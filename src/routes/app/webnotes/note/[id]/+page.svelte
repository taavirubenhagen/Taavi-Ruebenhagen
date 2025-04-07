<script lang='ts'>
    import { copy } from 'svelte-copy';
    import { onMount } from "svelte";
	import { page } from "$app/state";
	import { updateNote, deleteNote } from "$lib/db/notes";
    import { Indicator, Dialog, InlineButton, Text, TextButton, Icon } from "$lib/v2";
	import { dialog } from '$state/state';
	import { user } from '$lib/db/auth';
    
    $: url = page.url.href;
    $: id = page.data.id;
    $: dbUser = page.data.user;
    $: access = page.data.access;
    $: dbText = page.data.text;
    
    let copied = false;
    let text = dbText;
    
    onMount(() => text = dbText);
</script>


<svelte:head>
    <title>{id} 𐄁 Web Notes</title>
    <meta name="description" content="test 𐄁 Web Notes"/>
</svelte:head>


<Text medium paragraph>
    <main class="relative overflow-scroll w-screen h-screen">
        {#await user()}
            Loading...
        {:then u}
            <button
                on:click={() => copied = true}
                use:copy={url + "/" + id}
                class="cursor-pointer absolute left-8 bottom-8 hover:opacity-60 text-justify font-bold capitalize"
            >
                {access}
                <br/>
                <span class="opacity-50">
                    {copied ? "Copied!" : "Copy URL"}
                </span>
                <Indicator>
                    c
                </Indicator>
            </button>
            <div class="absolute z-50 right-8 bottom-8 opacity-50 hover:opacity-60 font-bold">
                <InlineButton invisible onClick={() => dialog.set($dialog == "deletenote" ? "" : "deletenote")}>
                    <span class="font-bold">
                        {$dialog == "deletenote" ? "Close" : "View Options"}
                    </span>
                </InlineButton>
            </div>
            <Dialog role="deletenote" title="Options">
                <div/>
                <div class="flex justify-between items-center">
                    <Text large paragraph>
                        Delete Note
                    </Text>
                    <TextButton primary onClick={() => {
                        deleteNote(id);
                        window.location.href = "/app/webnotes";
                    }}>
                        Delete
                    </TextButton>
                </div>
            </Dialog>
            <div class="border-b border-[#E0E0E0] w-screen h-12 overflow-scroll px-8 flex items-center gap-4 whitespace-nowrap">
                <InlineButton invisible onClick={() => dialog.set($dialog == "deletenote" ? "" : "deletenote")}>
                    <span class="opacity-50 font-bold">
                        Attach File
                    </span>
                </InlineButton>
                <div/>
                {#each ["Image.jgp", "File.pdf", "Icon.svg", "Model.blend"] as title}
                    <button class="border border-[#E0E0E0] rounded-lg hover:opacity-50 h-8 px-4 flex items-center gap-4">
                        <Text small paragraph>
                            {title}
                        </Text>
                    </button>
                {/each}
            </div>
            <Text medium paragraph>
                {#if access == "public" && dbUser != u.id}
                    <div class="w-screen min-h-[calc(100vh-3rem)] outline-none p-8">
                        {text}
                    </div>
                {:else}
                <!-- svelte-ignore a11y-autofocus -->
                    <textarea
                        autofocus
                        bind:value={text}
                        on:input={() => {
                        copied = false;
                        updateNote(id, text);
                        }}
                        placeholder={id}
                        class="w-screen min-h-[calc(100vh-3rem)] outline-none p-8"
                    />
                {/if}
            </Text>
        {/await}
    </main>
</Text>