<script lang='ts'>
	import { currentUsername, logOut } from "$lib/db/supabase";
    import { InlineButton, Text, TextButton } from "$lib/v2";
</script>


<main class="relative min-h-screen">
    <div class="fixed z-40 top-0 w-full h-32 px-8 md:px-16 pt-8 flex justify-between items-center">
        <a href="/app/webnotes">
            <Text medium heading>
                wn.
            </Text>
        </a>
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
                <Text p heading>
                    {#if username}
                        @{username}
                    {:else}
                        Log In
                    {/if}
                </Text>
            </InlineButton>
        {/await}
        <TextButton href="/app/webnotes/app/faq">
            Help
        </TextButton>
    </div>
    <div class="h-8"></div>
    <slot/>
</main>