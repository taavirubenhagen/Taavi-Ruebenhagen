<!--TODO: Privacy Policy, Imprint, Link to home-->

<script lang='ts'>
    import { InlineButton, Text, TextButton } from "$lib/v2";

    let windowHeight = 1080;
    let scrollY = 0;
</script>




<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>




<main
    class=
    "overflow-hidden min-h-screen flex flex-col justify-center items-center
    selection:bg-black p-16 selection:text-white font-mono"
>
    <div class="absolute bottom-16">
        <Text small paragraph>
            <InlineButton
                invisible
                href="/legal/imprint"
            >
                Imprint
            </InlineButton>
        </Text>
    </div>
    <Text large heading>
        taavi ruebenhagen.
    </Text>
    <div class="h-16"></div>
    <div class="flex gap-8">
        <TextButton href="/presenter">
            Presentation Master 2
        </TextButton>
    </div>
</main>