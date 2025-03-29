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
        "border border-black rounded-full
        {
          dark
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