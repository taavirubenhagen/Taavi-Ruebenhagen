<script lang='ts'>
    import { copy } from 'svelte-copy';
    import { onMount } from "svelte";
	import { page } from "$app/state";
	import { updateNote, deleteNote } from "$lib/db/notes";
    import { Dialog, InlineButton, Text, TextButton } from "$lib/v2";
	import { dialog } from '$state/state';
	import ShortcutIndicator from '$lib/v2/elements/ShortcutIndicator.svelte';
    
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
            <ShortcutIndicator>
                c
            </ShortcutIndicator>
        </Text>
    </button>
    <div class="absolute z-50 right-8 bottom-8 opacity-50">
        <InlineButton invisible onClick={() => dialog.set($dialog == "deletenote" ? "" : "deletenote")}>
            <Text p heading>
                {$dialog == "deletenote" ? "Close" : "View Options"}
            </Text>
        </InlineButton>
    </div>
    <Dialog role="deletenote">
        <TextButton primary onClick={() => {
            deleteNote(id);
            window.location.href = "/app/webnotes";
        }}>
            Delete Note
        </TextButton>
    </Dialog>
    <textarea
        bind:value={text}
        on:input={() => {
          copied = false;
          updateNote(id, text);
        }}
        placeholder={id}
        class="w-screen min-h-screen outline-none p-8 text-black"
    />
</main>