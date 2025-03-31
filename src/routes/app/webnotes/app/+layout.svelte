<script lang='ts'>
	import { currentUsername, logOut } from "$lib/db/supabase";
    import { Text, TextButton, TextField, Header, Dialog } from "$lib/v2";
	import { LoginDialog } from "../../_lib";
    
    let menu = false;
    let searchExp: string;
</script>


<main class="relative min-h-screen">
    {#await currentUsername()}
        <div/>
    {:then username}
        {#if true}
            <Dialog bind:visible={menu}>
                <TextButton expanded>
                    Create Note
                </TextButton>
                <TextButton expanded>
                    See my Notes
                </TextButton>
                <TextButton onClick={() => {logOut(); menu = false}}>
                    Log out
                </TextButton>
            </Dialog>
        {:else}
            <LoginDialog visible={menu && !username}/>
        {/if}
    {/await}
    <Header abbreviation="wn" href="/app/webnotes" messageHref="/app/webnotes/app/faq">
        <div class="w-full sm:w-[50vw]">
            <TextField bind:value={searchExp} placeholder="Search" action="Find" onSubmit={() => searchExp = ""}></TextField>
        </div>
          {#await currentUsername()}
              <div></div>
          {:then username}
              <button on:click={async () => menu = true} class="rounded-full h-10 aspect-square bg-[#999999]">
                  {#if username}
                      {username.at(0)}
                  {:else}
                      ?
                  {/if}
              </button>
          {/await}
    </Header>
    <slot/>
</main>