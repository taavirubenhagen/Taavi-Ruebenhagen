<script lang='ts'>
    import { Text } from "$lib/v2";

    export let dark = false;
    export let expanded = false;
    export let primary = false;
    export let href: string | null = null;
    export let onClick = () => {};
</script>


<button class={expanded ? "w-full" : ""} on:click={href ? () => window.location.href = href : onClick}>
    <div
        class=
        "transition-all duration-[100ms]
        border {dark ? "border-white" : "border-black"} rounded-full
        {
          primary
          ? "bg-black hover:bg-whte text-white hover:text-blck"
          : "bg-white hover:bg-back text-black hover:text-wite"
        }
        px-4 py-2 capitalize"
    >
        <Text medium paragraph>
            <slot/>
        </Text>
    </div>
</button>