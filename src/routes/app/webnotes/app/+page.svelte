<script lang='ts'>
  import { page } from "$app/state";
  import { user } from "$lib/db/auth";
  import { insertNote } from "$lib/db/notes";
  import { Dialog, Footer, MultiSwitch, Text, TextButton, TextField, LoginDialog, InlineButton } from "$lib/v2";
  
  
  $: ids = page.data.ids;
  $: notes = page.data.notes;
  $: validId = validateId(idInput);
  
  let create = false;
  let access: "private" | "public" | "collaborative" = "collaborative";
  let idInput: string;
  
  let login = false;
  
  function validateId(input: string) {
    return input?.replaceAll(" ", "");
  }
  
  
  async function openOrCreate() {
    if (!ids.includes(validId)) {
      await insertNote(validId, access);
    }
    window.location.href = "/app/webnotes/note/" + validId;
  }
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<LoginDialog bind:visible={login}/>
<Dialog bind:visible={create}>
    <Text p heading>
        <MultiSwitch bind:value={access} options={["private", "public", "collaborative"]}/>
    </Text>
    <div/>
    {#await user()}
        Loading...
    {:then user}
        {#if access != "collaborative" && !user.name}
            <TextButton expanded primary onClick={() => login = true}>
                Log in
            </TextButton>
            <div/>
            <Text medium paragraph>
                &nbsp;
            </Text>
        {:else}
            <TextField
                bind:value={idInput}
                placeholder="Note ID"
                action={ids.includes(validId) ? "Open" : "Create"}
                onSubmit={openOrCreate}
            />
            <div/>
            <div class="flex justify-between">
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
                <InlineButton onClick={() => create = false}>
                    Cancel
                </InlineButton>
            </div>
        {/if}
    {/await}
</Dialog>
<div class="absolute w-full md:px-[25%] bottom-32 px-8">
    <TextButton expanded primary onClick={() => create = true}>
        Write
    </TextButton>
</div>
<main class="min-h-[calc(100vh-4rem-4rem)] p-8 md:px-[25%]">
    {#await user()}
        <Text medium paragraph>
            Loading...
        </Text>
    {:then user}
        {#if !user.name}
            <div class="h-[calc(100vh-20rem-2.5rem)] flex flex-col justify-center items-center gap-4">
                <Text small heading>
                    Welcome to Web Notes :)
                </Text>
                <span class="tet-[#999999]">
                    <Text medium paragraph>
                        You're currently an anonymous user.
                    </Text>
                </span>
                <div/>
                <TextButton onClick={() => login = true}>
                    Log in
                </TextButton>
            </div>
        {:else if !ids.length}
                <div class="h-[calc(100vh-20rem-2.5rem)] flex flex-col justify-center items-center gap-4">
                    <Text small heading>
                        No notes yet
                    </Text>
                    <span class="tet-[#999999]">
                        <Text medium paragraph>
                            Press "Write" to create one.
                        </Text>
                    </span>
                    <div/>
                    <TextButton href="app/faq">
                        Help
                    </TextButton>
                </div>
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