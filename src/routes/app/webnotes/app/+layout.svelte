<script lang='ts'>
	import { currentUsername, logOut } from "$lib/db/supabase";
    import { InlineButton, TextButton, TextField, Header, Dialog } from "$lib/v2";
	import { LoginDialog } from "../../_lib";
    
	let dialog = false;
    let searchExp: string;
    
    $: menu = dialog && currentUsername();
    $: login = dialog && !currentUsername();
</script>


<main class="relative min-h-screen">
    <Dialog bind:visible={menu}>
        <TextButton expanded>
            Create Note
        </TextButton>
        <TextButton expanded>
            See my Notes
        </TextButton>
        <TextButton onClick={logOut}>
            Log out
        </TextButton>
        <div class="absolute bottom-16 w-full flex justify-center">
            <InlineButton onClick={() => dialog = false}>
                Close
            </InlineButton>
        </div>
    </Dialog>
    <LoginDialog bind:visible={login}/>
    <Header abbreviation="wn" href="/app/webnotes" messageHref="/app/webnotes/app/faq">
        <div class="w-full sm:w-1/2">
            <TextField bind:value={searchExp} placeholder="Find by ID" action="Find" onSubmit={() => searchExp = ""}></TextField>
        </div>
        {#await currentUsername()}
            <div></div>
        {:then username}
            <button on:click={async () => dialog = true} class="rounded-full h-10 aspect-square bg-[#999999]">
                {#if username}
                    t
                {:else}
                    ?
                {/if}
            </button>
        {/await}
    </Header>
    <slot/>
</main>