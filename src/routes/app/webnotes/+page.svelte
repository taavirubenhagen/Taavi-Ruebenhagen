<script lang='ts'>
	import { page } from "$app/stores";
    import { Footer, InlineButton, Switch, Text, TextButton, TextField } from "$lib/v2";

    $: notes = $page.data.notes;
    
    let create = true;
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
    <Text small heading>
        by Taavi Rübenhagen
    </Text>
    <div class="h-24"></div>
    <div class="flex">
        <Text small heading>
            <Switch bind:value={create} trueTitle="Create" falseTitle="Open"/>
        </Text>
    </div>
    <div class="h-16"></div>
    {#if create}
        <TextField bind:value={idInput} placeholder="Choose an ID"/>
        <div class="h-4 md:h-8"></div>
        <div class="w-full flex justify-start items-center flex-wrap gap-4">
            <!--<TextButton href="/app/webnotes/{idInput}">
                Private
            </TextButton>
            <TextButton href="/app/webnotes/test">
                Public
            </TextButton>-->
            <TextButton dark href="/app/webnotes/{idInput}">
                Collaborative
            </TextButton>
            <div></div>
            <Text medium paragraph>
                [More on the way]
            </Text>
        </div>
        <div class="h-16"></div>
        <Text small paragraph>  
            <span class="text-[#999999]">
                Depending on what you select above, notes can be viewed or edited either by anyone or only from this device.
                <br/>
                You can share a notes unique URL to collaborate with others or show them your thoughts.
                It's like Google Drive without the clutter.
                <br/><br/>
                Even Private Web Notes can be hacked or accidentally deleted from the database at any time.
                <br/>
                Do not store any sensitive data here.
            </span>
        </Text>
    {:else}
        <div class="grid md:grid-cols-2">
            <div class="md:pr-8">
                <div class="flex gap-4">
                    <TextField bind:value={idInput} placeholder="Type an ID"/>
                    <TextButton dark href="/app/webnotes/{idInput}">
                        Open
                    </TextButton>
                </div>
                <div class="h-16"></div>
                <Text small paragraph>  
                    <span class="text-[#999999]">
                        Even Private Web Notes can be hacked or accidentally deleted from the database at any time.
                        <br/>
                        Do not store any sensitive data here.
                    </span>
                </Text>
            </div>
            <div class="md:pl-8 pt-16 md:pt-0">
                <Text small heading>
                    Notes in the database:
                </Text>
                <div class="h-8"></div>
                <div class="flex items-start flex-wrap gap-4">
                    {#each notes as note}
                        <Text small paragraph>
                            <a href="/app/webnotes/{note.id}" class="rounded-lg bg-[#F0F0F0] px-2 py-1">
                                {note.id}
                            </a>
                        </Text>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
    <div class="h-32"></div>
    <Footer/>
</main>