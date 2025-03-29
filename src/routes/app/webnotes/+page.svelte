<script lang='ts'>
    import { page } from '$app/stores';
    import { Footer, Switch, Text, TextButton, TextField } from "$lib/v2";

    let create = true;
    let idInput: string;
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<main class="overflow-hidden min-h-screen flex flex-col items-start p-8 sm:p-16">
    <Text large heading>
        Web Notes
    </Text>
    <div class="h-8"></div>
    <div class="flex">
        <Text small heading>
            <Switch bind:value={create} trueTitle="Create" falseTitle="Open"/>
        </Text>
    </div>
    <div class="h-16"></div>
    {#if create}
        <div class="w-full flex justify-start gap-4">
            <TextButton href="/app/webnotes/test">
                Private
            </TextButton>
            <TextButton href="/app/webnotes/test">
                Public
            </TextButton>
            <TextButton href="/app/webnotes/test">
                Collaborative
            </TextButton>
        </div>
    {:else}
        <TextField bind:value={idInput} placeholder="Type an ID"/>
        <div class="h-8"></div>
        <TextButton href="/app/webnotes/test">
            Open
        </TextButton>
    {/if}
    <div class="h-16"></div>
    <Text small paragraph>  
        <span class="text-[#999999]">
            Even Private Web Notes are not secure. Do not store any sensitive data here.
        </span>
    </Text>
    <Footer/>
</main>