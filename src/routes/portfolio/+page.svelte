<!--TODO: Privacy Policy, Imprint, Link to home-->

<script lang='ts'>
    import { Text } from "$lib/v2";

    let windowHeight = 1080;
    let scrollY = 0;
</script>




<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>




<main
    class=
    "overflow-hidden min-h-screen text-center"
>
    <!--<BottomSheet imprint visible={imprintVisible && scrollY >= totalHeightFactorOffset * windowHeight} changeVisibility={() => imprintVisible = false}/>
    <BottomSheet visible={downloadVisible} changeVisibility={() => downloadVisible = false}>
        <div class="flex gap-4">
            <TextButton
                external
                onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2"}
            >
                Android
            </TextButton>
            <TextButton
                external
                onClick={() => window.location.href = "https://apps.apple.com/us/app/presentation-master-2/id6739542508"}
            >
                iOS
            </TextButton>
            <TextButton external onClick={() => window.location.href = "/presenter/download"}>
                Desktop (companion)
            </TextButton>
        </div>
    </BottomSheet>-->
    <div class="fixed z-40 top-0 w-full h-24 px-8 flex justify-between items-center">
        <Text medium heading>P.</Text>
        <!--<TextButton
            primary={scrollY >= totalHeightFactorOffset * windowHeight}
            onClick={() => downloadVisible = true}
        >
            Download
        </TextButton>-->
    </div>
    <div class="w-screen h-screen grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
        <a href="/presenter" class="relative w-full h-full bg-black">
            <div class="absolute z-30 bottom-0 w-full p-8 md:p-16 text-left">
                <Text medium heading>
                    Presentation Master 2
                </Text>
            </div>
            <img src="/presenter/Advertisement/Banner.png" alt="Presentation Master 2" class="w-full h-full brightness-90 hover:brightness-100 object-cover">
        </a>
        <a href="https://hoffmanns-schuppen.com" class="relative w-full h-full bg-green-950">
            <div class="absolute z-30 md:bottom-0 w-full p-8 md:p-16 text-right font-serif">
                <Text medium heading>
                    Hoffmann's Schuppen
                </Text>
            </div>
            <img src="/hoffmanns/Foto.jpg" alt="Hoffmann's Schuppen" class="w-full h-full brightness-[60%] hover:brightness-[65%] object-cover"/>
        </a>
    </div>
</main>