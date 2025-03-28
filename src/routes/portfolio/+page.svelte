<!--TODO: Privacy Policy, Imprint, Link to home-->

<script lang='ts'>
    import { Footer, Text, TextButton } from "$lib/v2";

    let windowHeight = 1080;
    let scrollY = 0;
</script>




<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>




<main
    class=
    "overflow-hidden min-h-screen flex flex-col justify-center
    selection:bg-black p-16 selection:text-white font-mono"
>
    <Text large heading>
        taavi ruebenhagen.
    </Text>
    <div class="h-16"></div>
    <div class="w-full flex justify-start gap-4">
        <TextButton href="/presenter">
            Explore
        </TextButton>
        <TextButton href="mailto:t.ruebenhagen@gmail.com">
            Contact
        </TextButton>
    </div>
    <Footer left home/>
</main>