<script lang='ts'>
    import { Footer, Text, TextButton } from "$lib/v2";

    let windowHeight = 1080;
    let scrollY = 0;
</script>


<svelte:head>
    <title>Home 𐄁 Taavi Rübenhagen</title>
    <meta name="description" content="Taavi Rübenhagen"/>
</svelte:head>


<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>


<main class="overflow-hidden min-h-screen flex flex-col justify-center p-8 sm:p-16">
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
    <Footer home title="GitHub" href="https://github.com/taavirubenhagen"/>
</main>