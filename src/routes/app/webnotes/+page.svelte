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


<main class="relative min-h-screen flex flex-col items-start p-8 md:p-16 pt-32 md:pt-40">
    <!--<Text medium heading>
        Web Notes
    </Text>
    <div class="h-4"></div>
    <Text p heading>
        by Taavi Rübenhagen
    </Text>
    <div class="h-24"></div>-->
    <div class="w-full grid md:grid-cols-2">
        <div class="md:pr-16">
            <div class="flex">
                <Text p heading>
                    <MultiSwitch bind:value={mode} options={["Open", "Public", "Private"]}/>
                </Text>
            </div>
            <div class="h-8"></div>
            <Text small paragraph>  
                <span class="text-[#999999]">
                    {#if mode == 0}
                        Can be edited by any user.<br/>.
                    {:else if mode == 1}
                        Can be viewed by any user, but only edited from the device it was created on.
                    {:else if mode == 2}
                        Can only be seen on the device it was created on.
                    {/if}
                    <!--
                    <br/><br/>
                    Web Notes are anything but secure. Do not store any important or sensitive data here.
                    -->
                </span>
            </Text>
            <div class="h-8"></div>
            <div class="flex gap-4">
                <TextField bind:value={idInput} placeholder="Type an ID"/>
                <TextButton primary href="/app/webnotes/{idInput}">
                    Open
                </TextButton>
            </div>
        </div>
        {#if mode > 0}
            <div class="md:pl-16 pt-16 pb-56">
                <div class="flx items-start flex-wrap gap-4">
                    {#each notes as note}
                        <Text small paragraph>
                            <InlineButton href="/app/webnotes/{note.id}">
                                {note.id}<br/><br/>
                            </InlineButton>
                        </Text>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
    <Footer/>
</main>