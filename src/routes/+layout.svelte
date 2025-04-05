<script lang="ts">
  import "../tavy.postcss";
  import { shortcuts } from "$state/preferences";
  import { dialog, input } from "$state/state";
  import { page } from "$app/state";
  import { logOut, user } from "$lib/db/auth";
  
  
  //$: url = page.url.href;
  
  
  async function handleKeydown(event: KeyboardEvent) {
    if (event.key == "Escape") {
      input.set(false);
      dialog.set("");
      return;
    }
    if ($input) {
      return;
    }
    switch (event.key) {
      case "c":
        //if (url.includes("/app/webnotes/note/")) {
          // TODO
        //}
        return;
      case "h":
        window.location.href = "/app/webnotes/app/faq";
        return;
      case "k":
        shortcuts.set(!$shortcuts);
        return;
      case "l":
        if (!( await user() ).name) {
          input.set(true);
          dialog.set("login");
          return;
        }
        await logOut();
        window.location.reload();
        return;
      case "a":
        input.set(true);
        dialog.set("create");
        return;
      case "x":
        dialog.set("");
        return;
    }
  }
</script>


<svelte:window on:keydown={(event) => handleKeydown(event)}/>


<main
    class="relative w-screen min-h-screen cursor-default bg-white selection:bg-black text-justify text-black selection:text-white"
>
    <slot/>
</main>