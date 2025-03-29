<script lang='ts'>
	import { page } from "$app/stores";
	import { updateNote } from "$lib/db/supabase";
    import { Footer, InlineButton, Text, TextButton } from "$lib/v2";
	import { onMount } from "svelte";
    
    $: id = $page.data.id;
    $: hash = $page.data.hash;
    $: isPublic = $page.data.public;
    $: dbText = $page.data.text;
    
    let text = dbText;
    let saved = true;
    
    onMount(() => text = dbText);
</script>


<svelte:head>
    <title>Test 𐄁 Web Notes</title>
    <meta name="description" content="test 𐄁 Web Notes"/>
</svelte:head>


<main class="relative overflow-scroll w-screen h-screen">
    <textarea
        bind:value={text}
        on:input={() => saved = false}
        placeholder={id}
        class="w-screen min-h-screen outline-none p-8 text-black"
    />
    <div class="fixed left-8 bottom-8">
        <Text small heading>
            <br/>
            View: Public
            <br/>
            Edit: Private
        </Text>
    </div>
    <div class="fixed right-8 bottom-8">
        <Text small heading>
            <InlineButton onClick={() => saved = true}>
                Copy URL
            </InlineButton>
        </Text>
    </div>
    <div class="fixed right-8 top-8">
        <Text small heading>
            {#if saved}
                Saved
            {:else}
                <InlineButton onClick={() => {
                  updateNote(id, text);
                  saved = true;
                }}>
                    Save
                </InlineButton>
            {/if}
        </Text>
    </div>
</main>