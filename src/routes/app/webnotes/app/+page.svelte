<script lang='ts'>
  import { page } from "$app/state";
  import { currentUsername } from "$lib/db/supabase";
  import { Dialog, Footer, InlineButton, MultiSwitch, Switch, Text, TextButton, TextField } from "$lib/v2";
  
  
  $: ids = page.data.ids;
  $: notes = page.data.notes;
  $: validId = validateId(idInput);
  
  let create = false;
  let mode = "open";
  let idInput: string;
  
  function validateId(input: string) {
    return input?.replaceAll(" ", "");
  }
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<Dialog bind:visible={create}>
    <Text p heading>
        <MultiSwitch bind:value={mode} options={["Open", "Public", "Private"]}/>
    </Text>
    <div/>
    {#await currentUsername()}
        Loading...
    {:then data}
        {#if mode.toLowerCase() != "open" && !data}
            <div class="flex gap-4">
                <TextButton expanded primary href="/app/auth/login">
                    Log in
                </TextButton>
                <TextButton expanded href="/app/auth/signup">
                    Sign Up
                </TextButton>
            </div>
            <div/>
            <Text medium paragraph>
                &nbsp;
            </Text>
        {:else}
            <TextField
                bind:value={idInput}
                placeholder="Note ID"
                action={ids.includes(idInput) ? "Open" : "Create"}
                href="/app/webnotes/note/{idInput}"
            />
            <div/>
            <span class={
                ids.includes(idInput) || !validId
                ? "text-red-500"
                : "text-green-500"
            }>
                <Text medium paragraph>
                    {#if ids.includes(idInput)}
                        ID already exists.
                    {:else if !validId}
                        ID can't be empty.
                    {:else if idInput != validId}
                        Will be created as {validId}.
                    {:else}
                        Valid ID :)
                    {/if}
                </Text>
            </span>
        {/if}
    {/await}
</Dialog>
<div class="fixed w-full md:px-[25%] bottom-32 px-8">
    <TextButton expanded primary onClick={async () => create = true}>
        Write new
    </TextButton>
</div>
<main class="min-h-[calc(100vh-4rem-4rem)] p-8 md:px-[25%]">
    {#await currentUsername()}
        <Text medium paragraph>
            Loading...
        </Text>
    {:then username}
        {#if !username}
            <TextButton onClick={() => create = true}>
                Write a note
            </TextButton>
        {:else}
            <Text small heading>
                Web Notes
            </Text>
            <div class="h-4"></div>
            {#each notes as note}
                <a
                    href="/app/webnotes/note/{note.id}"
                    class="mb-4 rounded-lg border border-[#999999] hover:border-black p-4 flex flex-col gap-4"
                >
                    <Text p heading>
                        {note.id}
                    </Text>
                    <span class="text-[#999999]">
                        <Text medium paragraph>
                            {note.text}
                        </Text>
                    </span>
                </a>
            {/each}
        {/if}
    {/await}
    <!--
    <div>
        <div class="md:pl-16 pt-16 md:pt-0 pb-32">
            {#if mode != "open"}
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
    -->
    <Footer/>
</main>