<script lang='ts'>
  import { page } from "$app/state";
  import { currentUsername } from "$lib/db/supabase";
  import { Footer, InlineButton, MultiSwitch, Switch, Text, TextButton, TextField } from "$lib/v2";
  
  
  $: notes = page.data.notes;
  
  let mode = 1;
  let idInput: string;
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<main class="min-h-full flex flex-col items-start p-8 md:p-16 pt-32 md:pt-32">
    <div class="w-full grid md:grid-cols-2">
        <div class="md:pr-16">
            <div class="flex">
                <Text p heading>
                    <MultiSwitch bind:value={mode} options={["Open", "Public", "Private"]}/>
                </Text>
            </div>
            <!--
            <div class="h-8"></div>
            <Text small paragraph>  
                <span class="text-[#999999]">
                    {#if mode == 0}
                        View access: Public
                        <br/>
                        Edit access: Public
                    {:else if mode == 1}
                        View access: Public
                        <br/>
                        Edit access: Private
                    {:else if mode == 2}
                        View access: Private
                        <br/>
                        Edit access: Private
                    {/if}
                </span>
            </Text>
            -->
            <div class="h-16"></div>
            {#await currentUsername()}
                Loading...
            {:then data}
                {#if mode > 0 && !data}
                    <div class="flex gap-4">
                        <TextButton expanded primary href="/app/auth/login">
                            Log in
                        </TextButton>
                        <TextButton expanded href="/app/auth/signup">
                            Sign Up
                        </TextButton>
                    </div>
                {:else}
                    <div class="flex gap-4">
                        <TextField bind:value={idInput} placeholder="Type an ID"/>
                        <TextButton primary href="/app/webnotes/note/{idInput}">
                            Open
                        </TextButton>
                    </div>
                {/if}
            {/await}
        </div>
        <div class="md:pl-16 pt-16 md:pt-0 pb-32">
            {#if mode > 0}
                {#await currentUsername()}
                    <span class="text-[#999999]">
                        <Text small paragraph>
                            When you are logged in, your notes will appear here.
                        </Text>
                    </span>
                {:then data}
                    {#if data}
                        <div class="flx items-start flex-wrap gap-4">
                            {#each notes as note}
                                <Text small paragraph>
                                    <InlineButton href="/app/webnotes/note/{note.id}">
                                        {note.id}<br/><br/>
                                    </InlineButton>
                                </Text>
                            {/each}
                        </div>
                    {:else}
                        <span class="text-[#999999]">
                            <Text small paragraph>
                                When you are logged in, your notes will appear here.
                            </Text>
                        </span>
                    {/if}
                {/await}
            {/if}
        </div>
    </div>
    <Footer/>
</main>