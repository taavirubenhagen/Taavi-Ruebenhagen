<script lang='ts'>
    import { InlineButton, Text } from "$lib/v2";

    export let center = false
    export let home = false
    export let title = "Info";
    export let href: string | null = null;
</script>



<Text small paragraph>
    <div class="absolute z-35 left-0 bottom-16 w-full px-8 md:px-16 flex {center ? "justify-center" : "justify-start"} items-center">
        {#if home}
            <div class="flex justify-end">
                <InlineButton invisible href="/portfolio/projects">
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
    </div>
</Text>