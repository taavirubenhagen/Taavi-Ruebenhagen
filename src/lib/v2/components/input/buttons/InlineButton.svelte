<script lang='ts'>
	import { ShortcutIndicator } from "$lib/v2";

    export let invisible = false;
    export let shortcut: string | null = null;
    export let href: string | null = null;
    export let onClick = () => console.log("InlineButton should have href or onClick attribute");
</script>


<button on:click={href == null ? onClick : () => window.location.href = href} class="transition-all duration-[200ms] hover:opacity-60 inline-flex capitalize">
    <span class={invisible ? "" : "underline underline-offset-8"}>
        <slot/>
    </span>
    {#if shortcut}
        &nbsp;
        <ShortcutIndicator>
            {shortcut}
        </ShortcutIndicator>
    {/if}
</button>