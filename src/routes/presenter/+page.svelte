<!--TODO: Privacy Policy, Imprint, Link to home-->

<script lang='ts'>
	import { fly } from "svelte/transition";
    import { Text } from "$lib";
	import {
        InlineButton,
        TextButton
    } from "./components";

    const totalHeightFactor = 3;
    const totalHeightFactorOffset = totalHeightFactor - 1;

    let windowHeight = 1080;
    let scrollY = 0;
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
            onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2&hl=en_US"}
        >
            Download
        </TextButton>
    </div>
    {#if scrollY >= totalHeightFactorOffset * windowHeight}
        <div
            in:fly={{delay: 3200, duration: 400, y: 32}}
            out:fly={{duration: 400, y: 8}}
            class="fixed z-40 bottom-0 w-full h-16 flex justify-center items-center"
        >
            <div class="w-[45%] flex justify-end">
                <Text small paragraph>
                    <InlineButton invisible onClick={() => alert("Coming soon!")}>
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
                <InlineButton invisible onClick={() => alert("Coming soon!")}>
                    Studio
                </InlineButton>
            </div>
        </div>
    {/if}
    <div class='fixed w-screen h-screen px-8 flex flex-col justify-center items-center'>
        {#if scrollY < windowHeight * 0.25}
            <div
                in:fly={{duration: 400, y: 32}}
                out:fly={{duration: 400, y: 8}}
            >
                <Text large heading>
                    Presentation
                    <br/>
                    Remote Control.
                </Text>
            </div>
        {:else if scrollY > windowHeight * 1.75}
            <div class="flex flex-col items-center gap-4">
                <div
                    in:fly={{duration: 400, y: 32}}
                    out:fly={{duration: 400, y: 8}}
                >
                    <Text large heading>
                        Soon for iOS.
                    </Text>
                </div>
                <div
                    in:fly={{delay: 1600, duration: 800, y: 32}}
                    out:fly={{duration: 400, y: 8}}
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
            src="/presenter/screenshot_1.jpg"
            alt="Mockup of Presentation Master 2"
            class="shadow-xl rounded-[4rem] h-[75vh] aspect-[0.5] border-8 border-neutral-300 bg-black p-2"
        />
    </div>
</main>