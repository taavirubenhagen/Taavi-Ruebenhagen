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


<main class="overflow-hidden text-center text-white font-[Nunito]">
    <img src="/fenni/wide_portrait.jpg" alt="Ich" class="fixed w-screen h-screen object-cover">
    <div class="relative z-10 min-h-screen flex flex-col justify-center items-center p-8 sm:p-16">
        <div class="text-6xl md:text-7xl font-bold" style="font-family: 'Permanent Marker';">
            Hi, ich bin Fenni.
        </div>
        <div class="h-16"></div>
        <div class="flex gap-4">
            <a href="https://instagram.com/fennis.life" class="rounded-full bg-yellow-800 px-4 py-2 text-white font-bold">
                <Text medium paragraph>
                    Meine Arbeit
                </Text>
            </a>
            <a href="mailto:contact@fenni.me" class="rounded-full bg-yellow-600 px-4 py-2 text-white font-bold">
                <Text medium paragraph>
                    Kontakt
                </Text>
            </a>
        </div>
        <Footer center fenni/>
    </div>
</main>