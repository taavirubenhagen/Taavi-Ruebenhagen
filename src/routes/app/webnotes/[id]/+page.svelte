<script lang='ts'>
    import { copy } from 'svelte-copy';
    import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { updateNote, deleteNote } from "$lib/db/supabase";
    import { Footer, InlineButton, Text, TextButton } from "$lib/v2";
    
    $: id = $page.data.id;
    $: hash = $page.data.hash;
    $: isPublic = $page.data.public;
    $: dbText = $page.data.text;
    
    let text = dbText;
    let deleteDialog = false;
    
    onMount(() => text = dbText);
</script>


<svelte:head>
    <title>Test 𐄁 Web Notes</title>
    <meta name="description" content="test 𐄁 Web Notes"/>
</svelte:head>


<main class="relative overflow-scroll w-screen h-screen">
    <div class="cursor-pointer fixed left-8 bottom-8" use:copy={"https://rubenhagen.com/app/webnotes/" + id}>
        <Text small heading>
            View: Public
            <br/>
            Edit: Private
            <br/>
            <span class="text-[#999999]">
                Click to Copy URL
            </span>
        </Text>
    </div>
    <div class="fixed z-50 right-8 bottom-8">
        <InlineButton onClick={() => deleteDialog = !deleteDialog}>
            {deleteDialog ? "Cancel" : "Delete"}
        </InlineButton>
    </div>
    {#if deleteDialog}
        <div class="fixed z-40 w-full h-full bg-white flex justify-center items-center">
            <TextButton dark onClick={() => {
              deleteNote(id);
              window.location.href = "/app/webnotes";
            }}>
                Delete Note
            </TextButton>
        </div>
    {/if}
    <textarea
        bind:value={text}
        on:input={() => updateNote(id, text)}
        placeholder={id}
        class="w-screen min-h-screen outline-none p-8 text-black"
    />
</main>