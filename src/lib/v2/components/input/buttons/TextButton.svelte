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
        border {dark ? "border-white" : "border-black"} rounded-full h-10
        {
          primary
          ? "bg-black hover:bg-white text-white hover:text-black"
          : "bg-white hover:bg-black text-black hover:text-white"
        }
        px-4 flex justify-center items-center capitalize"
    >
        <Text medium paragraph>
            <slot/>
        </Text>
    </div>
</button>