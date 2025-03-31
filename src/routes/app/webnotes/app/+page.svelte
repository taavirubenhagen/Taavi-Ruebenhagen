<script lang='ts'>
  import { page } from "$app/state";
  import { currentUsername } from "$lib/db/auth";
  import { Dialog, Footer, InlineButton, MultiSwitch, Switch, Text, TextButton, TextField } from "$lib/v2";
	import { LoginDialog } from "../../_lib";
  
  
  $: ids = page.data.ids;
  $: notes = page.data.notes;
  $: username = currentUsername();
  $: validId = validateId(idInput);
  
  let create = false;
  let mode = "collaborative";
  let idInput: string;
  
  let login = false;
  
  function validateId(input: string) {
    return input?.replaceAll(" ", "");
  }
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<LoginDialog bind:visible={login}/>
<Dialog bind:visible={create}>
    <Text p heading>
        <MultiSwitch bind:value={mode} options={["collaborative", "public", "private"]}/>
    </Text>
    <div/>
    {#await username}
        Loading...
    {:then un}
        {#if mode.toLowerCase() != "collaborative" && !un}
            <div class="flex gap-4">
                <TextButton expanded primary onClick={() => login = true}>
                    Log in
                </TextButton>
                <TextButton expanded onClick={() => login = true}>
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
                href="/app/webnotes/note/{validId}/{username}/{mode}"
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
<div class="absolute w-full md:px-[25%] bottom-32 px-8">
    <TextButton expanded primary onClick={async () => create = true}>
        Write
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
            {#each notes as note}
                <a
                    href="/app/webnotes/note/{note.id}"
                    class="mb-4 rounded-lg border border-[#999999] hover:border-black overflow-hidden max-w-full p-4 flex flex-col gap-4 text-wrap"
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
    <Footer/>
</main>