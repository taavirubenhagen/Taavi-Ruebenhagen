<script lang='ts'>
	import { InlineButton, Text, TextButton } from "$lib/v2";
	import { dialog, input } from "$state/state";
	
	export let values: string[];
    export let dark = false;
    export let inside = "";
    export let placeholders: string[];
    export let href: string | null = null;
    export let onSubmit = () => {};
    
    const shortcuts = false;
    
    let elements = Array<HTMLInputElement>(values.length);
    
    function handleKeydown(event: KeyboardEvent, i: number) {
      if (event.key == "Enter") {
        if (i == values.length - 1) {
          onSubmit();
          return;
        }
        elements[i + 1].focus();
        elements[i + 1].focus();
        console.log(elements[i + 1].getHTML());
      }
    }
</script>


<Text medium paragraph>
    <div
        class=
        "bg-[#F0F0F0] {dark ? "invert" : ""}
        w-full h-[calc(6rem+2px)]
        rounded-[1.25rem]
        px-4 text-black"
    >
        {#each values as v, i}
            {#if i > 0}
                <div class="rounded-full bg-white h-[2px]"/>
            {/if}
            <div class="h-12 flex items-center px-0">
                <!-- svelte-ignore a11y-autofocus -->
                <input
                    bind:this={elements[i]}
                    bind:value={v}
                    autofocus={$dialog == inside && i == 0}
                    placeholder={placeholders[i] + ( shortcuts ? " [F]" : "" )}
                    on:focusin={() => input.set(true)}
                    on:focusout={() => input.set(false)}
                    on:keydown={(event) => handleKeydown(event, i)}
                    class="outline-none w-full h-1/2 bg-transparent"
                />
            </div>
        {/each}
    </div>
</Text>