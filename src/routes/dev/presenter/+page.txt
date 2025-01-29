<!--TODO: Privacy Policy, Imprint, Link to home-->

<script lang='ts'>
	import { fly, slide } from "svelte/transition";
    import { Text } from "$lib/v2";

    const totalHeightFactor = 3;
    const totalHeightFactorOffset = totalHeightFactor - 1;

    let windowHeight = 1080;
    let scrollY = 0;

    let imprintVisible = false;
    let downloadVisible = false;
</script>




<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>




<main
    class=
    "overflow-hidden min-h-screen text-center"
>
    <BottomSheet imprint visible={imprintVisible && scrollY >= totalHeightFactorOffset * windowHeight} changeVisibility={() => imprintVisible = false}/>
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
    </BottomSheet>
    <div class="fixed z-40 top-0 w-full h-24 px-8 flex justify-between items-center">
        <Text medium heading>P.</Text>
        <TextButton
            primary={scrollY >= totalHeightFactorOffset * windowHeight}
            onClick={() => downloadVisible = true}
        >
            Download
        </TextButton>
    </div>
    {#if scrollY >= totalHeightFactorOffset * windowHeight}
        <div
            in:fly={{delay: 1600, duration: 800, y: 16}}
            out:fly={{duration: 400, y: 16}}
            class="fixed z-30 bottom-0 w-full h-24 flex justify-center items-center"
        >
            <div class="w-[45%] flex justify-end">
                <Text small paragraph>
                    <InlineButton
                        invisible
                        onClick={() => imprintVisible = true}
                    >
                        Imprint
                    </InlineButton>
                </Text>
            </div>
            <div class="w-[10%] md:w-[5%] flex justify-center">
                <Text small paragraph>
                    |
                </Text>
            </div>
            <div class="w-[45%] flex">
                <InlineButton invisible onClick={() => window.location.href="/"}>
                    Studio
                </InlineButton>
            </div>
        </div>
    {/if}
    <div class='fixed w-screen h-screen px-8 flex flex-col justify-center items-center'>
        {#if scrollY < windowHeight * 0.1875}
            <div
                in:fly={{duration: 400, y: 32}}
                out:fly={{duration: 400, y: -16}}
            >
                <Text medium heading inside={windowHeight}>
                    Presentation
                    <br/>
                    Remote Control.
                </Text>
            </div>
        {:else if scrollY > windowHeight * 1.25}
            <div class="flex flex-col items-center gap-4">
                <div
                    in:fly={{duration: 400, y: 32}}
                    out:fly={{duration: 400, y: 16}}
                >
                    <Text medium heading>
                        Now for iOS.
                    </Text>
                </div>
                <div
                    in:fly={{delay: 800, duration: 800, y: 32}}
                    out:fly={{duration: 400, y: 16}}
                >
                    <Text small paragraph>
                        *Already available on Android.
                    </Text>
                </div>
            </div>
        {/if}
    </div>
    <div
        class="relative w-screen pb-[calc(100vh/2)] flex flex-col justify-center items-center"
        style="height: {totalHeightFactor * 100}vh;"
    >
        <img
            src="/presenter/android_mockups/pixel_5_connecting.png"
            alt="Mockup of Presentation Master 2"
            class="h-[75vh] md:h-[87.5vh]"
        />
    </div>
</main>