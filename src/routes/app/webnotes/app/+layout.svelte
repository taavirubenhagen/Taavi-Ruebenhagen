<script lang='ts'>
	import { currentUsername, logOut } from "$lib/db/supabase";
    import { InlineButton, Text, TextButton, TextField, Header } from "$lib/v2";
    
    let searchExp: string;
</script>


<main class="relative min-h-screen">
    <Header abbreviation="wn" href="/app/webnotes" message="Notes are not yet permanent." messageHref="/app/webnotes/app/faq">
        <div class="mx-8 w-full sm:w-1/2">
            <TextField bind:value={searchExp} placeholder="Find by ID" action="Find"></TextField>
        </div>
        {#await currentUsername()}
            <div></div>
        {:then username}
            <InlineButton onClick={async () => {
              if (username) {
                await logOut();
                window.location.href = "/app";
                return;
              }
              window.location.href = "/app/auth/login";
            }}>
                <Text small paragraph>
                    <span class="whitespace-nowrap">
                        {#if username}
                            @{username}
                        {:else}
                            Log In
                        {/if}
                    </span>
                </Text>
            </InlineButton>
        {/await}
        <!--<InlineButton href="/app/webnotes/app/faq">
            Help
        </InlineButton>-->
    </Header>
    <slot/>
</main>