<script lang='ts'>
    import { InlineButton, Text } from "$lib/v2";

    export let left = false
    export let home = false
    export let href: string | null = null;
</script>



<Text small paragraph>
    <div class="absolute z-35 left-0 bottom-16 w-full px-16 flex {left ? "justify-start" : "justify-center"} items-center">
        {#if !home}
            <div class="flex justify-end">
                <InlineButton invisible href="/">
                    Home
                </InlineButton>
            </div>
            <div class="flex justify-center">
                &nbsp;𐄁&nbsp;
            </div>
        {/if}
        {#if href != null}
            <div class="flex justify-end">
                <InlineButton invisible href={href}>
                    Info
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