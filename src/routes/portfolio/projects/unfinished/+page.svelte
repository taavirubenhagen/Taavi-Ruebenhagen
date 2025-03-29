<script lang='ts'>
    import { Footer, Text, TextButton, InlineButton } from "$lib/v2";

    let windowHeight = 1080;
    let scrollY = 0;
</script>


<svelte:head>
    <title>All Projects 𐄁 Taavi Rübenhagen</title>
    <meta name="description" content="Taavi Rübenhagen"/>
</svelte:head>


<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>


<main class="min-h-screen flex flex-col items-start p-8 sm:p-16 pt-32 md:pt-48">
    <Text large heading>
        all projects.
    </Text>
    <div class="h-4"></div>
    <Text small heading>
        in development;
    </Text>
    <div class="h-16"></div>
    <InlineButton href="/:)">
        404
        <br/><br/>
    </InlineButton>
    <InlineButton href="https://fenni.me">
        fenni.me
        <br/><br/>
    </InlineButton>
    <InlineButton href="https://hoffmanns-schuppen.com">
        hoffmanns-schuppen.com
        <br/><br/>
    </InlineButton>
    <InlineButton href="/">
        rubenhagen.com
        <br/><br/>
    </InlineButton>
    <InlineButton href="https://github.com/taavirubenhagen/Just-Notes">
        Just Notes
        <br/><br/>
    </InlineButton>
    <InlineButton href="/presenter">
        Presentation Master
        <br/><br/>
    </InlineButton>
    <InlineButton href="/app/webnotes">
        Web Notes
        <br/><br/>
    </InlineButton>
    <div class="h-32"></div>
    <Footer title="GitHub" href="https://github.com/taavirubenhagen"/>
</main>