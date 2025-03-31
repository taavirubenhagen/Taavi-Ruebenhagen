<script lang='ts'>
  import { page } from "$app/state";
  import { currentUsername } from "$lib/db/supabase";
  import { Footer, InlineButton, MultiSwitch, Switch, Text, TextButton, TextField } from "$lib/v2";
  
  
  $: ids = page.data.ids;
  $: notes = page.data.notes;
  $: mode = page.params.mode;
  
  $: validId = validateId(idInput);
  
  let idInput: string;
  
  function validateId(input: string) {
    return input?.replaceAll(" ", "");
  }
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<main class="min-h-full flex flex-col items-start p-8 md:p-16">
    <div class="w-full grid md:grid-cols-2">
        <div class="md:pr-16">
            <Text p heading>
                <MultiSwitch value={mode}  options={["Open", "Public", "Private"]} route="/app/webnotes/app"/>
            </Text>
            <div class="h-16"></div>
            {#await currentUsername()}
                Loading...
            {:then data}
                {#if mode != "open" && !data}
                    <div class="flex gap-4">
                        <TextButton expanded primary href="/app/auth/login">
                            Log in
                        </TextButton>
                        <TextButton expanded href="/app/auth/signup">
                            Sign Up
                        </TextButton>
                    </div>
                {:else}
                    <TextField
                        autofocus
                        bind:value={idInput}
                        placeholder="Note ID"
                        action={ids.includes(idInput) ? "Open" : "Create"}
                        href="/app/webnotes/note/{idInput}"
                    />
                    <div class="h-8"></div>
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
                                <!--
                                <InlineButton href="/app/auth}">
                                    Open #{idInput}
                                </InlineButton>
                                -->
                        </Text>
                    </span>
                {/if}
            {/await}
        </div>
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
    <Footer/>
</main>