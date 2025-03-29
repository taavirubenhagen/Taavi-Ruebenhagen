<script lang='ts'>
    import { Footer, Text, TextButton, InlineButton } from "$lib/v2";

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


<main class="min-h-full flex flex-col justify-center items-start p-8 sm:p-16">
    <Text large heading>
        projects.
    </Text>
    <div class="h-4"></div>
    <InlineButton invisible href="/portfolio/projects/unfinished">
        <Text small heading>
            more on the way.
        </Text>
    </InlineButton>
    <div class="h-16"></div>
    <div class="w-full flex flex-wrap justify-start gap-4">
        <TextButton href="/presenter">
            Presentation Master 2
        </TextButton>
        <TextButton href="https://rubenhagen.com">
            <span class="normal-case">
                rubenhagen.com
            </span>
        </TextButton>
    </div>
    <!--<div class="h-4"></div>
    <div class="w-full flex flex-wrap justify-start gap-4">
        <TextButton href="https://rubenhagen.com">
            <span class="normal-case">
                rubenhagen.com
            </span>
        </TextButton>
        <!.--<TextButton href="https://hoffmanns-schuppen.com">
            <span class="normal-case">
                hoffmanns-schuppen.com
            </span>
        </TextButton>-.->
    </div>-->
    <Footer title="GitHub" href="https://github.com/taavirubenhagen"/>
</main>