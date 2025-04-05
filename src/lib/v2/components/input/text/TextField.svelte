<script lang='ts'>
	import { InlineButton, Text, TextButton } from "$lib/v2";
	import { dialog, input } from "$state/state";

    export let dark = false;
    export let inside = "";
    export let value: string;
    export let placeholder;
    export let action: string | null = null;
    export let href: string | null = null;
    export let onSubmit = () => {};
    
    let active = $dialog == inside;
    
    const shortcuts = false;
</script>


<Text medium paragraph>
    <div class="relative w-full h-full"
        on:focusin={() => active = true}
        on:focusout={() => setTimeout(() => active = false, 100)}>
        <!-- svelte-ignore a11y-autofocus -->
        <input
            bind:value={value}
            autofocus={$dialog == inside && false}
            on:focusin={() => input.set(true)}
            on:focusout={() => input.set(false)}
            placeholder={placeholder + ( shortcuts ? " [F]" : "" )}
            on:keydown={(event) => {
                if (event.key == "Enter") {
                    onSubmit();
                }
            }}
            class=
            "bg-[#F0F0F0] {dark ? "invert" : ""}
            w-full h-10
            outline-none rounded-full
            px-4 text-black"
        />
        {#if action}
            <div class="absolute right-0 top-0 h-full pr-5 flex items-center">
                {#if active}
                    <InlineButton invisible href={href} onClick={onSubmit}>
                        <img src="/icons/tavy-24-04/arrow-forward.svg" alt="" class="h-4 opacity-40">
                    </InlineButton>
                {/if}
            </div>
        {/if}
    </div>
</Text>