<script lang='ts'>
    import { Text } from "$lib/v2";

    export let abbreviation = "tr";
    export let href = "/";
    export let message: string | null = null;
    export let messageHref: string | null = null;
</script>


{#if message}
    <a href={messageHref}>
        <div class="fixed z-50 top-0 w-full h-8 bg-[#F0F0F0] px-8 md:px-16 flex justify-center items-center text-[#999999]">
            <Text small paragraph>
                {message}
            </Text>
        </div>
    </a>
{/if}
<div class="fixed z-30 {message ? "top-8" : "top-0"} w-full h-24 px-8 md:px-16 flex justify-between items-center gap-8">
    <a href={href}>
        <Text small heading>
            {abbreviation}.
        </Text>
    </a>
    <slot/>
</div>
<div class="h-24 {message ? "mb-8" : ""}"/>