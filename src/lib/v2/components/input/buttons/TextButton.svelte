<script lang='ts'>
    import { ShortcutIndicator, Text } from "$lib/v2";

    export let dark = false;
    export let expanded = false;
    export let primary = false;
    export let shortcut: string | null = null;
    export let href: string | null = null;
    export let onClick = () => {};
</script>


<button class={expanded ? "w-full" : ""} on:click={href ? () => window.location.href = href : onClick}>
    <Text medium paragraph>
        <div
            class=
            "transition-all duration-[100ms] relative
            border {dark ? "border-white" : "border-black"} rounded-full h-10
            {primary ? "hover:bg-opacity-80 bg-black text-white" : "hover:opacity-60 bg-white text-black"}
            px-4 flex justify-center items-center gap-2 capitalize"
        >
            <slot/>
            {#if shortcut}
                <ShortcutIndicator dark={dark || primary}>
                    {shortcut}
                </ShortcutIndicator>
            {/if}
        </div>
    </Text>
</button>