<script lang='ts'>
	import { page } from "$app/state";
  import { TextField, Header } from "$lib/v2";
  
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
    <Header abbreviation="wn" href="/app/webnotes" messageHref="/app/webnotes/app/faq" account bind:menusVisible={menusVisible}>
        <div
            on:focusin={() => menusVisible = false}
            on:focusout={() => menusVisible = true}
            class="w-full sm:w-[50vw]"
        >
            <TextField
                bind:value={searchExp}
                placeholder="Search"
                onSubmit={find}
            />
        </div>
    </Header>
    <slot/>
</main>