<!--TODO: Privacy Policy, Imprint, Link to home-->

<script lang='ts'>
	import { fly } from "svelte/transition";
    import { Text, TextButton, InlineButton } from "$lib/v2";

    const totalHeightFactor = 3;
    const totalHeightFactorOffset = totalHeightFactor - 1;

    let windowHeight = 1080;
    let scrollY = 0;

    let downloadVisible = false;
</script>




<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>




<main class="overflow-x-hidden overflow-y-scroll min-h-screen text-center">
    {#if downloadVisible}
        <div in:fly={{duration: 400, y: 0}} out:fly={{duration: 400, y: 0}}>
            <Text huge paragraph>
                <div class="fixed z-40 w-screen h-screen bg-black flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-32">
                    <a href="https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2">
                        <img class="w-32" src="/presenter/icons/temp/android.svg" alt="Download for Android">
                    </a>
                    <a href="https://apps.apple.com/us/app/presentation-master-2/id6739542508">
                        <img class="w-32" src="/presenter/icons/temp/ios.svg" alt="Download for iOS">
                    </a>
                    <a href="/presenter/download">
                        <img class="w-32" src="/presenter/icons/temp/windows.svg" alt="Download desktop companion">
                    </a>
                </div>
            </Text>
        </div>
    {/if}
    <div class="fixed z-40 top-0 w-full h-24 px-8 flex justify-between items-center">
        <Text medium heading>P.</Text>
        <TextButton
            dark={scrollY < totalHeightFactorOffset * windowHeight}
            onClick={() => downloadVisible = !downloadVisible}
        >
            {#if downloadVisible}
                Back
            {:else}
                Download
            {/if}
        </TextButton>
    </div>
    {#if scrollY >= totalHeightFactorOffset * windowHeight}
        <Text small paragraph>
            <div
                in:fly={{delay: 1600, duration: 800, y: 16}}
                out:fly={{duration: 400, y: 16}}
                class="fixed z-30 bottom-0 w-full h-24 flex justify-center items-center"
            >
                <div class="w-[45%] flex justify-end">
                    <InlineButton
                        invisible
                        href="/legal/imprint"
                    >
                        Imprint
                    </InlineButton>
                </div>
                <div class="w-[10%] md:w-[5%] flex justify-center">
                    <Text small paragraph>
                        |
                    </Text>
                </div>
                <div class="w-[45%] flex">
                    <InlineButton invisible href="/">
                        Studio
                    </InlineButton>
                </div>
            </div>
        </Text>
    {/if}
    <div class='fixed w-screen h-screen px-8 flex flex-col justify-center items-center'>
        {#if scrollY < windowHeight * 0.1875}
            <div
                in:fly={{duration: 400, y: 32}}
                out:fly={{duration: 400, y: -16}}
            >
                <Text large heading>
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
                    <Text large heading>
                        Now for iOS.
                    </Text>
                </div>
                <div
                    in:fly={{delay: 800, duration: 800, y: 32}}
                    out:fly={{duration: 400, y: 16}}
                >
                    <Text small paragraph>
                        Already available on Android.
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
            src="/presenter/images/android_mockups/pixel_5_connecting.png"
            alt="Mockup of Presentation Master 2"
            class="h-[75vh] md:h-[87.5vh]"
        />
    </div>
</main>