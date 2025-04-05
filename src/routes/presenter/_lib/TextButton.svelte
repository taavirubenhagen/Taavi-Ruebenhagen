<script lang='ts'>
    import { ShortcutIndicator, Text } from "$lib/v2";
	import { dark, general } from "$state/context";

    export let expanded = false;
    export let primary = false;
    export let shortcut: string | null = null;
    export let href: string | null = null;
    export let onClick = () => {};
</script>


<Text medium paragraph>
    <button class={$general.buttonFont + ( expanded ? " w-full" : "" )} on:click={href ? () => window.location.href = href : onClick}>
        <div
            class=
            "transition-all duration-[100ms] relative
            rounded-full border h-10
            {primary ? "border-black hover:border-white invert hover:invert-0" : "border-white hover:border-black invert-0 hover:invert"}
            {$dark.primary} px-4 flex justify-center items-center gap-2 capitalize"
        >
            <slot/>
            {#if shortcut}
                <ShortcutIndicator dark={primary}>
                    {shortcut}
                </ShortcutIndicator>
            {/if}
        </div>
    </button>
</Text>