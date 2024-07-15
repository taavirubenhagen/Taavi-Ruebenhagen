<!--TODO: Privacy Policy, Imprint, Link to home-->

<script lang='ts'>
	import { blur, fly, slide } from "svelte/transition";
    import { Text } from "$lib";
	import {
        InlineButton,
        TextButton
    } from "./components";

    const totalHeightFactor = 3;
    const totalHeightFactorOffset = totalHeightFactor - 1;

    let windowHeight = 1080;
    let scrollY = 0;

    let imprintVisible = false;
</script>




<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>




<main
    class=
    "overflow-hidden min-h-screen
    bg-black selection:bg-white
    text-white selection:text-black text-center"
>
    <div class="fixed z-40 top-0 w-full h-24 px-8 flex justify-between items-center">
        <Text medium heading>P.</Text>
        <TextButton
            primary={scrollY >= totalHeightFactorOffset * windowHeight}
            onClick={
                () => navigator.platform.toLowerCase().search("(android)") !== -1
                ? window.location.href = "https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2&hl=en_US"
                : alert("Coming soon on iOS. For Android, visit the Play Store on your mobile device.")
            }
        >
            Download
        </TextButton>
    </div>
    {#if scrollY >= totalHeightFactorOffset * windowHeight}
        <div
            in:fly={{delay: 1600, duration: 800, y: 16}}
            out:fly={{duration: 400, y: 16}}
            class="fixed z-30 bottom-0 w-full h-16 flex justify-center items-center"
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
            <div class="w-[10%] flex justify-center">
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
    {#if imprintVisible}
        <div
            in:slide={{duration: 400}}
            out:slide={{duration: 400}}
            class="fixed z-40 -bottom-32 w-full py-32"
        >
            <div class="relative bg-neutral-800">
                <div class="-translate-y-1/2 absolute z-40 top-0 w-full flex justify-center">
                    <TextButton onClick={() => imprintVisible = false}>
                        Close
                    </TextButton>
                </div>
                <div class="p-8 text-left">
                    <Text small paragraph>
                        Taavi Rübenhagen<br/>
                        Pothof 9d<br/>
                        38122 Braunschweig, Germany<br/>
                        <br/><br/>
                        E-Mail: taavi.ruebenhagen@gmail.com
                    </Text>
                </div>
            </div>
        </div>
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
                        Soon for iOS.
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
            src="/presenter/android_mockups/pixel_4_home_1.png"
            alt="Mockup of Presentation Master 2"
            class="h-[75vh]"
        />
    </div>
</main>