<script lang='ts'>
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
    <!--
    <div class="h-8"></div>
    <div class="flex">
        <Text small heading>
            <Switch bind:value={create} trueTitle="Create" falseTitle="Open"/>
        </Text>
    </div>-->
    <div class="h-16"></div>
    {#if create}
        <!--<TextField bind:value={idInput} placeholder="Choose an ID"/>
        <div class="h-8"></div>-->
        <div class="w-full flex justify-start flex-wrap gap-4">
            <TextButton href="/app/webnotes/{idInput}">
                Private
            </TextButton>
            <TextButton href="/app/webnotes/test">
                Public
            </TextButton>
            <TextButton href="/app/webnotes/test">
                Collaborative
            </TextButton>
        </div>
        <div class="h-16"></div>
        <Text small paragraph>  
            <span class="text-[#999999]">
                Depending on what you select above, notes can be viewed or edited either by anyone or only from this device.
                <br/>
                You can share a notes unique URL to collaborate with others or show them your thoughts.
                It's like Google Drive without the clutter.
                <br/><br/>
            </span>
        </Text>
    {:else}
        <TextField bind:value={idInput} placeholder="Type an ID"/>
        <div class="h-8"></div>
        <TextButton href="/app/webnotes/test">
            Open
        </TextButton>
        <div class="h-16"></div>
    {/if}
    <Text small paragraph>  
        <span class="text-[#999999]">
            Even Private Web Notes can be hacked or accidentally deleted from the database at any time.
            <br/>
            Do not store any sensitive data here.
        </span>
    </Text>
    <Footer/>
</main>