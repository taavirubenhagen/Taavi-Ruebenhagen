<script lang='ts'>
    import { InlineButton, Text } from "$lib/v2";

    export let center = false
    export let fenni = false;
    export let home = false
    export let title = "Info";
    export let href: string | null = null;
</script>


<div class="h-16 md:h-20"/>
<Text small paragraph>
    <div class="absolute z-35 left-0 bottom-0 w-full h-16 md:h-20 px-8 md:px-16 flex {center ? "justify-center" : "justify-start"} items-start">
        {#if fenni}
            <InlineButton
                invisible
                href="/legal/imprint"
            >
                Impressum
            </InlineButton>
        {:else}
            {#if home}
                <div class="flex justify-end">
                    <InlineButton invisible href="/portfolio/projects/unfinished">
                        Projects
                    </InlineButton>
                </div>
                <div class="flex justify-center">
                    &nbsp;𐄁&nbsp;
                </div>
            {:else}
                <div class="flex justify-end">
                    <InlineButton invisible href="/">
                        Studio
                    </InlineButton>
                </div>
                <div class="flex justify-center">
                    &nbsp;𐄁&nbsp;
                </div>
            {/if}
            {#if href != null}
                <div class="flex justify-end">
                    <InlineButton invisible href={href}>
                        {title}
                    </InlineButton>
                </div>
                <div class="flex justify-center">
                    &nbsp;𐄁&nbsp;
                </div>
            {/if}
            <div class="flex">
                <InlineButton
                    invisible
                    href="/legal/imprint"
                >
                    Imprint
                </InlineButton>
            </div>
        {/if}
    </div>
</Text>