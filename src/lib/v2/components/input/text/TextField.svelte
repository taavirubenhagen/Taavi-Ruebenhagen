<script lang='ts'>
	import { Icon, InlineButton, Text, TextButton } from "$lib/v2";
	import { dialog, input } from "$state/state";
	
    export let dark = false;
    export let inside = "";
    export let value: string;
    export let placeholder;
    export let href: string | null = null;
    export let onSubmit = () => {};
    
    let a: HTMLElement;
    let active = $dialog == inside && inside != "";
    
    const shortcuts = false;
</script>


<Text medium paragraph>
    <div class="relative w-full h-full">
        <div
            class=
            "bg-[#F0F0F0] {dark ? "invert" : ""}
            w-full h-10
            rounded-full
            px-4 text-black"
        >
            <!-- svelte-ignore a11y-autofocus -->
            <input
                bind:value={value}
                autofocus={$dialog == inside && inside != ""}
                on:focusin={() => {
                  input.set(true);
                  active = true;
                }}
                on:focusout={async () => {
                  await new Promise(r => setTimeout(r, 200));
                  input.set(false);
                  active = false;
                }}
                placeholder={placeholder + ( shortcuts ? " [F]" : "" )}
                on:keydown={(event) => {
                  if (event.key == "Enter") {
                    if (href) {
                      a.click();
                      return;
                    }
                    onSubmit();
                  }
                }}
                class="outline-none w-full h-full bg-transparent"
            />
            <a bind:this={a} href={href} class="absolute right-0 top-0 h-full opacity-40 pr-5 flex items-center">
                {#if active}
                    <InlineButton invisible onClick={href ? undefined : onSubmit}>
                        <Icon name="arrow-forward"/>
                    </InlineButton>
                {/if}
            </a>
        </div>
    </div>
</Text>