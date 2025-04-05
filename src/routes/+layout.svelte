<script lang="ts">
  import "../tavy.postcss";
  import { shortcuts } from "$state/preferences";
  import { dialog, input } from "$state/state";
  import { page } from "$app/state";
  import { logOut, user } from "$lib/db/auth";
  
  
  //$: url = page.url.href;
  
  let shortcutReceiver: any;
  
  
  async function handleKeydown(event: KeyboardEvent & {
    currentTarget: EventTarget & HTMLButtonElement;
  }) {
    if ($input) {
      return;
    }
    switch (event.key) {
      case "Escape":
        dialog.set("");
        return;
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
          dialog.set("login");
          return;
        }
        await logOut();
        window.location.reload();
        return;
      case "a":
        dialog.set("create");
        return;
      case "x":
        dialog.set("");
        return;
    }
  }
</script>


<button
    bind:this={shortcutReceiver}
    autofocus
    on:focusout={() => shortcutReceiver.focus()}
    on:keydown={handleKeydown}
    class="relative w-screen min-h-screen cursor-default bg-white selection:bg-black text-justify text-black selection:text-white"
>
    <slot/>
</button>