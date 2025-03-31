<script lang='ts'>
    import { InlineButton, Text } from "$lib/v2";

    export let big = false;
    export let abbreviation = "tr";
    export let href = "/";
    export let message: string | null = null;
    export let messageHref: string | null = null;
</script>


<a href={messageHref}>
    <div class="fixed z-50 top-0 w-full h-8 bg-[#F0F0F0] px-8 md:px-16 flex justify-center items-center text-[#999999]">
        <Text small paragraph>
            {message}
        </Text>
    </div>
</a>
<div class="fixed z-40 {message ? "top-8" : "top-0"} w-full {big ? "h-24" : "h-16"} px-8 md:px-16 flex justify-between items-center">
    <a href={href}>
        <Text small heading>
            {abbreviation}
        </Text>
    </a>
    <slot/>
</div>
<div class="{big ? "h-24" : "h-16"} {message ? "mt-8" : ""}"/>