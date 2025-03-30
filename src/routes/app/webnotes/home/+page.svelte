<script lang='ts'>
	import { page } from "$app/stores";
    import { Footer, InlineButton, MultiSwitch, Switch, Text, TextButton, TextField } from "$lib/v2";

    $: notes = $page.data.notes;
    
    let loggedIn = false;
    let login = false;
    let mode = 0;
    
    let usernameInput: string;
    let passwordInput: string;
    let idInput: string;
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<main class="relative min-h-screen flex flex-col items-start p-8 md:p-16 pt-40 md:pt-48">
    {#if login}
        <div class="fixed z-40 left-0 top-0 w-full h-full bg-white p-16 flex flex-col justify-center items-center">
            <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/4 flex flex-col justify-center gap-4">
                <TextField bind:value={usernameInput} placeholder="Username"/>
                <TextField bind:value={passwordInput} placeholder="Password"/>
                <div class="flex gap-4">
                    <TextButton expanded primary onClick={() => {
                        loggedIn = true;
                        login = false;
                        usernameInput = "";
                        passwordInput = "";
                    }}>
                        Log in
                    </TextButton>
                    <TextButton expanded onClick={() => {
                        login = false;
                        usernameInput = "";
                        passwordInput = "";
                    }}>
                        Cancel
                    </TextButton>
                </div>
            </div>
        </div>
    {/if}
    <div class="w-full grid md:grid-cols-2">
        <div class="md:pr-16">
            <div class="flex">
                <Text p heading>
                    <MultiSwitch bind:value={mode} options={["Open", "Public", "Private"]}/>
                </Text>
            </div>
            <div class="h-8"></div>
            <Text small paragraph>  
                <span class="text-[#999999]">
                    {#if mode == 0}
                        View access: Public
                        <br/>
                        Edit access: Public
                    {:else if mode == 1}
                        View access: Public
                        <br/>
                        Edit access: Private
                    {:else if mode == 2}
                        View access: Private
                        <br/>
                        Edit access: Private
                    {/if}
                </span>
            </Text>
            <div class="h-8"></div>
            {#if mode > 0 && !loggedIn}
                <TextButton expanded primary onClick={() => login = true}>
                    Log in to access
                </TextButton>
            {:else}
                <div class="flex gap-4">
                    <TextField bind:value={idInput} placeholder="Type an ID"/>
                    <TextButton primary href="/app/webnotes/{idInput}">
                        Open
                    </TextButton>
                </div>
            {/if}
        </div>
        {#if mode > 0 && loggedIn}
            <div class="md:pl-16 pt-16 pb-56">
                <div class="flx items-start flex-wrap gap-4">
                    {#each notes as note}
                        <Text small paragraph>
                            <InlineButton href="/app/webnotes/{note.id}">
                                {note.id}<br/><br/>
                            </InlineButton>
                        </Text>
                    {/each}
                </div>
            </div>
        {:else if mode > 0}
            <span class="text-[#999999]">
                <Text small paragraph>
                    When you are logged in, your notes will appear here.
                </Text>
            </span>
        {/if}
    </div>
    <Footer/>
</main>