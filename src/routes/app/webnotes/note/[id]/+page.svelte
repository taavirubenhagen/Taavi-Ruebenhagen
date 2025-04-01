<script lang='ts'>
    import { copy } from 'svelte-copy';
    import { onMount } from "svelte";
	import { page } from "$app/state";
	import { updateNote, deleteNote } from "$lib/db/notes";
    import { InlineButton, Text, TextButton } from "$lib/v2";
    
    $: id = page.data.id;
    $: user = page.data.user;
    $: access = page.data.access;
    $: dbText = page.data.text;
    
    let text = dbText;
    let deleteDialog = false;
    
    onMount(() => text = dbText);
</script>


<svelte:head>
    <title>{id} 𐄁 Web Notes</title>
    <meta name="description" content="test 𐄁 Web Notes"/>
</svelte:head>


<main class="relative overflow-scroll w-screen h-screen">
    <div class="cursor-pointer absolute left-8 bottom-8 capitalize" use:copy={"https://rubenhagen.com/app/webnotes/note/" + id}>
        <Text p heading>
            {access}
            <br/>
            <span class="text-[#999999]">
                {false ? "Copied!" : "Copy URL"}
            </span>
        </Text>
    </div>
    <div class="absolute z-50 right-8 bottom-8 font-bold">
        <InlineButton invisible onClick={() => deleteDialog = !deleteDialog}>
            <span class="text-[#999999]">{deleteDialog ? "Close" : "View Options"}</span>
        </InlineButton>
    </div>
    {#if deleteDialog}
        <div class="fixed z-40 w-full h-full bg-white flex justify-center items-center">
            <TextButton primary onClick={() => {
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