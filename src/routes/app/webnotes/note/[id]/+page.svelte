<script lang='ts'>
    import { copy } from 'svelte-copy';
    import { onMount } from "svelte";
	import { page } from "$app/state";
	import { updateNote, deleteNote } from "$lib/db/notes";
    import { Indicator, Dialog, InlineButton, Text, TextButton, Icon } from "$lib/v2";
	import { dialog } from '$state/state';
    
    $: url = page.url.href;
    $: id = page.data.id;
    $: user = page.data.user;
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


<main class="relative overflow-scroll w-screen h-screen">
    <button
        on:click={() => copied = true}
        use:copy={url + "/" + id}
        class="cursor-pointer absolute left-8 bottom-8 text-justify capitalize"
    >
        <Text p heading>
            {access}
            <br/>
            <span class="opacity-50">
                {copied ? "Copied!" : "Copy URL"}
            </span>
            <Indicator>
                c
            </Indicator>
        </Text>
    </button>
    <div class="absolute z-50 right-8 bottom-8 opacity-50">
        <InlineButton invisible onClick={() => dialog.set($dialog == "deletenote" ? "" : "deletenote")}>
            <Text p heading>
                {$dialog == "deletenote" ? "Close" : "View Options"}
            </Text>
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
            <Text p heading>
                <span class="opacity-50">
                    Attach File
                </span>
            </Text>
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
        <textarea
            bind:value={text}
            on:input={() => {
            copied = false;
            updateNote(id, text);
            }}
            placeholder={id}
            class="w-screen min-h-[calc(100vh-3rem)] outline-none p-8 text-black"
        />
    </Text>
</main>