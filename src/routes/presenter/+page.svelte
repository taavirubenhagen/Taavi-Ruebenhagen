<script lang='ts'>
	import { fly } from "svelte/transition";
    import { Text } from "$lib";
	import { TextButton } from "./components";

    const totalHeightFactor = 3.125;
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
            onClick={() => {}}
        >
            Download
        </TextButton>
    </div>
    <!--<div class="fixed z-40 bottom-0 w-full h-16 flex justify-center items-center">
        <div class="rounded-full w-8 h-8 bg-neutral-700">
            <Text small paragraph>
                {( scrollY / ( totalHeightFactorOffset * windowHeight ) * 100 ).toFixed(0)}
            </Text>
        </div>
    </div>-->
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
        class="relative w-screen pb-[calc(100vh/3)] flex flex-col justify-center items-center"
        style="height: {totalHeightFactor * 100}vh;"
    >
        <img
            src="/presenter/screenshot_1.jpg"
            alt="Mockup of Presentation Master 2"
            class="shadow-xl rounded-[4rem] h-[87.5vh] aspect-[0.5] border-8 border-neutral-300 bg-black p-2"
        />
    </div>
</main>