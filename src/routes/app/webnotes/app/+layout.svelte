<script lang='ts'>
  import { page } from "$app/state";
  import { logOut } from "$lib/db/auth";
  import { TextField, Header, Dialog, Footer, TextButton } from "$lib/v2";
  
  let menusVisible = true;
  let searchExp: string;
  
  $: ids = page.data.ids;
  
  function validateId(input: string) {
    return input?.replaceAll(" ", "");
  }
  
  function find() {
    if (ids.includes(validateId(searchExp))) {
      window.location.href = "/app/webnotes/note/" + validateId(searchExp);
    }
    searchExp = "";
  }
</script>


<main class="cursor-default relative min-h-screen">
    <Dialog role="menu">
        <div class="h-4"/>
        <div class="flex justify-center">
        <TextButton primary onClick={async () => {
            await logOut();
            window.location.reload();
        }}>
            Log out
        </TextButton>
        </div>
        <Footer center title="Help" href="app/faq"/>
    </Dialog>
    <Header abbreviation="wn" href="/app/webnotes" message="Early development. Notes not permanent." account bind:menusVisible={menusVisible}>
        <div
            on:focusin={() => menusVisible = false}
            on:focusout={() => menusVisible = true}
            class="w-full sm:w-[50vw]"
        >
            <TextField
                bind:value={searchExp}
                placeholder="Search"
                href="/app/webnotes/note/{validateId(searchExp)}"
                onSubmit={find}
            />
        </div>
    </Header>
    <div class={menusVisible ? "" : "hidden sm:contents"}>
        <slot/>
    </div>
</main>