<script lang='ts'>
	import { InlineButton, Text, TextButton } from "$lib/v2";

    export let dark = false;
    export let autofocus = false;
    export let value: string;
    export let placeholder;
    export let action: string | null = null;
    export let href: string | null = null;
    export let onSubmit = () => {};
    
    let active = autofocus;
</script>


<Text medium paragraph>
    <div class="relative h-full"
        on:focusin={() => active = true}
        on:focusout={() => setTimeout(() => active = false, 200)}>
        <!-- svelte-ignore a11y-autofocus -->
        <input
            autofocus={autofocus}
            bind:value={value}
            placeholder={placeholder}
            class=
            "{active ? "border-black bg-white" : "border-transparent bg-[#F0F0F0]"} {dark ? "invert" : ""}
            border w-full h-10
            outline-none rounded-full
            px-4 text-black"
        />
        {#if action}
            <div class="absolute right-0 top-0 flex items-end">
                {#if active}
                    <div class="bg-black rounded-r-full">
                        <TextButton primary href={href} onClick={onSubmit}>
                            {action}
                        </TextButton>
                    </div>
                {:else}
                    <div></div>
                {/if}
            </div>
        {/if}
    </div>
</Text>