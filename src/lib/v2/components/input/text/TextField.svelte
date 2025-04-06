<script lang='ts'>
	import { Icon, InlineButton, Text, TextButton } from "$lib/v2";
	import { dialog, input } from "$state/state";
	
    export let dark = false;
    export let inside = "";
    export let value: string;
    export let placeholder;
    export let href: string | null = null;
    export let onSubmit = () => {};
    
    let active = false;
    
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
                on:focusout={() => {
                  input.set(false);
                  active = false;
                }}
                placeholder={placeholder + ( shortcuts ? " [F]" : "" )}
                on:keydown={(event) => {
                    if (event.key == "Enter") {
                        onSubmit();
                    }
                }}
                class="outline-none w-full h-full bg-transparent"
            />
            <div class="absolute right-0 top-0 h-full opacity-40 pr-5 flex items-center">
                {#if active}
                    <InlineButton invisible href={href} onClick={onSubmit}>
                        <Icon name="arrow-forward"/>
                    </InlineButton>
                {/if}
            </div>
        </div>
    </div>
</Text>