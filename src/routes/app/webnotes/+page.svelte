<script lang='ts'>
	import { page } from "$app/stores";
    import { Footer, InlineButton, MultiSwitch, Switch, Text, TextButton, TextField } from "$lib/v2";

    $: notes = $page.data.notes;
    
    let mode = 0;
    let idInput: string;
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<main class="relative min-h-screen flex flex-col items-start p-8 md:p-16">
    <Text medium heading>
        Web Notes
    </Text>
    <div class="h-4"></div>
    <Text p heading>
        by Taavi Rübenhagen
    </Text>
    <div class="h-24"></div>
    <div class="w-full grid md:grid-cols-2">
        <div class="md:pr-16">
            <div class="flex">
                <Text p heading>
                    <MultiSwitch bind:value={mode} options={["Open", "Public", "Private"]}/>
                </Text>
            </div>
            <div class="h-12 md:h-16"></div>
            <div class="flex gap-4">
                <TextField bind:value={idInput} placeholder="Type an ID"/>
                <TextButton primary href="/app/webnotes/{idInput}">
                    Open
                </TextButton>
            </div>
            <div class="h-16"></div>
            <Text small paragraph>  
                <span class="text-[#999999]">
                    {#if mode == 0}
                        A open note can be edited by any user.<br/>
                    {:else if mode == 1}
                        A public note can be viewed by any user, but it can only be edited from the device it was created on.
                    {:else if mode == 2}
                        A private note can only be seen on the device it was created on.<br/>
                    {/if}
                    <!--
                    <br/><br/>
                    Web Notes are anything but secure. Do not store any important or sensitive data here.
                    -->
                </span>
            </Text>
        </div>
        <!--
        <div class="md:pl-16 pt-32 md:pt-0">
            <Text small heading>
                Notes in the database
            </Text>
            <div class="h-8"></div>
            <div class="flex items-start flex-wrap gap-4">
                {#each notes as note}
                    <Text small paragraph>
                        <a href="/app/webnotes/{note.id}" class="rounded-lg bg-[#F0F0F0] px-4 py-2">
                            {note.id}
                        </a>
                    </Text>
                {/each}
            </div>
        </div>
        -->
    </div>
    <!--<div class="h-56"></div>-->
    <Footer/>
</main>