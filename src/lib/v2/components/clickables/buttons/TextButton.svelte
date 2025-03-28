<script lang='ts'>
    import { Text } from "$lib/v2";

    export let dark = false;
    export let download = false;
    export let href: string | null = null;
    export let onClick = () => {};
</script>


<button on:click={onClick}>
    <div
        class=
            "{dark ? "invert hover:invert-0" : "invert-0 hover:invert"}
            border border-black rounded-full
            px-4 py-2 bg-white text-black capitalize"
    >
        <Text medium paragraph>
            {#if href}
                {#if download}
                    <a download href={href}>
                        <slot/>
                    </a>
                {:else}
                    <a href={href}>
                        <slot/>
                    </a>
                {/if}
            {:else}
                <slot/>
            {/if}
        </Text>
    </div>
</button>