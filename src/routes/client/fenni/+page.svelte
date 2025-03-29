<script lang='ts'>
    import { Footer, Text, TextButton } from "$lib/v2";

    let windowHeight = 1080;
    let scrollY = 0;
</script>


<svelte:head>
    <title>Home 𐄁 FENNI</title>
    <meta name="description" content="FENNI 𐄁 Fenja Rübenhagen"/>
</svelte:head>


<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>


<main class="overflow-hidden min-h-screen flex flex-col justify-center p-8 sm:p-16">
    <Text large heading>
        Hi, ich bin Fenni.
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