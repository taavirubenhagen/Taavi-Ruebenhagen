<script lang='ts'>
    import { Text } from "$lib/v2";

    export let dark = false;
    export let expanded = false;
    export let unresponsive = false;
    export let primary = false;
    export let href: string | null = null;
    export let onClick = () => {};
</script>


<button class={expanded ? "w-full" : ""} on:click={href ? () => window.location.href = href : onClick}>
    <div
        class=
        "transition-all duration-[100ms]
        border {dark ? "border-white" : "border-black"} rounded-full h-11 sm:h-10
        {
          primary
          ? ( "bg-black text-white " + ( unresponsive ? "" : "hover:bg-white hover:text-black" ) )
          : ( "bg-white text-black " + ( unresponsive ? "" : "hover:bg-black hover:text-white" ) )
        }
        px-4 flex justify-center items-center capitalize"
    >
        <Text medium paragraph>
            <slot/>
        </Text>
    </div>
</button>