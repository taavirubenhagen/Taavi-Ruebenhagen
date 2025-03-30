<script lang='ts'>
    import { Text } from "$lib/v2";

    export let dark = false;
    export let expanded = false;
    export let primary = false;
    export let download = false;
    export let href: string | null = null;
    export let onClick = () => {};
</script>


<button class={expanded ? "w-full" : ""} on:click={onClick}>
    <div
        class=
        "transition-all duration-[100ms]
        border {dark ? "border-white" : "border-black"} rounded-full
        {
          primary
          ? "bg-black hover:bg-white text-white hover:text-black"
          : "bg-white hover:bg-black text-black hover:text-white"
        }
        px-4 py-2 capitalize"
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