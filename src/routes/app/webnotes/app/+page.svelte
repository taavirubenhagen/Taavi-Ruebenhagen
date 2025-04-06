<script lang='ts'>
  import { page } from "$app/state";
  import { user } from "$lib/db/auth";
  import { insertNote } from "$lib/db/notes";
  import { dialog, input } from "$state/state";
  import { Dialog, Footer, MultiSwitch, Text, TextButton, TextField, InlineButton, ShortcutIndicator } from "$lib/v2";
  import { general } from "$state/context";
  
  
  let createA: HTMLElement;
  let access: "private" | "public" | "collaborative" = "collaborative";
  let idInput: string;
  
  
  $: ids = page.data.ids;
  $: notes = page.data.notes;
  $: validId = validateId(idInput);
  
  
  function validateId(input: string) {
    return input?.replaceAll(" ", "");
  }
  
  async function openOrCreate() {
    if (!ids.includes(validId)) {
      await insertNote(validId, access);
    }
    createA.click();
  }
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<!-- svelte-ignore a11y-missing-content -->
<a bind:this={createA} href ="/app/webnotes/note/{validId}" class="hidden"/>
<Dialog role="login"/>
<Dialog role="create">
    <Text p heading>
        <MultiSwitch bind:value={access} options={["private", "collaborative"]}/>
    </Text>
    <div/>
    {#await user()}
        Loading...
    {:then user}
        {#if access != "collaborative" && !user.name}
            <TextButton expanded primary onClick={() => dialog.set("login")}>
                Log in
            </TextButton>
        {:else}
            <TextField
                inside="create"
                bind:value={idInput}
                placeholder="Note ID"
                onSubmit={openOrCreate}
            />
            {#if ids.includes(idInput) || !validId || idInput != validId}
                <div/>
                <div class="flex justify-between">
                    <span class={
                        ids.includes(idInput) || !validId
                        ? "text-red-500"
                        : "text-green-500"
                    }>
                        <div/>
                        {#if ids.includes(idInput)}
                            ID already exists.
                        {:else if !validId}
                            ID can't be empty.
                        {:else if idInput != validId}
                            Will be created as
                            <span class={$general.headingFont}>
                                {validId}.
                            </span>
                        {/if}
                    </span>
                </div>
            {/if}
        {/if}
    {/await}
</Dialog>
<div class="absolute z-30 w-full md:px-[25%] bottom-32 px-8">
    <TextButton expanded primary shortcut="A" onClick={() => {
      input.set(true);
      dialog.set("create");
    }}>
        Write
    </TextButton>
</div>
<div class="min-h-[calc(100vh-4rem-4rem)] p-8 md:px-[25%]">
    {#await user()}
        <div class="h-[calc(100vh-20rem-2.5rem)] bg-white text-black p-8 md:p-16 flex flex-col justify-center items-center gap-4">
            <Text medium heading>
                <span class="font-serif">
                    Loading...
                </span>
            </Text>
            <TextButton href="app/faq">
                <span class="font-serif">
                    Help
                </span>
            </TextButton>
        </div>
    {:then user}
        {#if !user.name}
            <div class="h-[calc(100vh-20rem-2.5rem)] flex flex-col justify-center items-center gap-4 text-center">
                <Text small heading>
                    Welcome to Web Notes :)
                </Text>
                <Text medium paragraph>
                    You're currently an anonymous user.
                    <br/>
                    Press
                    <ShortcutIndicator alwaysVisible>
                        K
                    </ShortcutIndicator>
                    to toggle hints for keyboard shortcuts.
                </Text>
                <div/>
                <TextButton shortcut="L" onClick={() => {
                  input.set(true);
                  dialog.set("login");
                }}>
                    Log in
                </TextButton>
            </div>
        {:else if !ids.length}
                <div class="h-[calc(100vh-20rem-2.5rem)] flex flex-col justify-center items-center gap-4 text-center">
                    <Text small heading>
                        No notes yet
                    </Text>
                    <Text medium paragraph>
                        Press "Write" to create one.
                    </Text>
                    <!--<div/>
                    <TextButton shortcut="H" href="app/faq">
                        Help
                    </TextButton>-->
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
    <Footer title="Help" href="app/faq"/>
</div>