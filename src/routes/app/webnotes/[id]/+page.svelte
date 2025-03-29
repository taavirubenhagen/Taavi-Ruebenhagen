<script lang='ts'>
	import { page } from "$app/stores";
    import { Footer, InlineButton, Text, TextButton } from "$lib/v2";
    
    $: id = $page.data.id;
    $: hash = $page.data.hash;
    $: isPublic = $page.data.public;
    $: dbText = $page.data.text;
    
    let text = dbText;
    let saved = true;
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
    <div class="fixed right-16 bottom-16">
        <Text small heading>
            <br/>
            View: Public
            <br/>
            Edit: Private
        </Text>
    </div>
    <div class="fixed right-8 top-8">
        <Text small heading>
            {#if saved}
                Saved
            {:else}
                <InlineButton onClick={() => saved = true}>
                    Save
                </InlineButton>
            {/if}
        </Text>
    </div>
</main>