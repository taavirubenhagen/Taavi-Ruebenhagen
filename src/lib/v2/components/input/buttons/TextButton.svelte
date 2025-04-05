<script lang='ts'>
    import { ShortcutIndicator, Text } from "$lib/v2";
	import { contextButtonFontClass, contextPrimaryClass } from "$state/context";

    export let dark = false;
    export let expanded = false;
    export let primary = false;
    export let shortcut: string | null = null;
    export let href: string | null = null;
    export let onClick = () => {};
</script>


<Text medium paragraph>
    <button class={$contextButtonFontClass + ( expanded ? " w-full" : "" )} on:click={href ? () => window.location.href = href : onClick}>
        <div
            class=
            "transition-all duration-[100ms] relative
            border {dark ? "border-white" : "border-black"} rounded-full h-10
            {primary ? ( "hover:bg-opacity-80 " + $contextPrimaryClass + " text-white" ) : "hover:opacity-60 bg-white text-black"}
            px-4 flex justify-center items-center gap-2 capitalize"
        >
            <slot/>
            {#if shortcut}
                <ShortcutIndicator dark={dark || primary}>
                    {shortcut}
                </ShortcutIndicator>
            {/if}
        </div>
    </button>
</Text>