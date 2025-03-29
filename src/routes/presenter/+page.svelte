<script lang='ts'>
	import { fade, fly } from "svelte/transition";
    import { Text, TextButton, InlineButton, Footer } from "$lib/v2";

    const totalHeightFactor = 3;
    const totalHeightFactorOffset = totalHeightFactor - 1;

    let windowHeight = 1080;
    let scrollY = 0;
    
    let downloadVisible = false;
</script>


<svelte:head>
    <title>Presentation Master 2</title>
    <meta name="description" content="Upgraded Presentation Companion"/>
</svelte:head>


<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>


<main class="overflow-x-hidden overflow-y-scroll min-h-screen bg-black text-center text-white font-sans">
    {#if downloadVisible}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="fixed z-40 w-screen h-screen bg-black flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-32"
            in:fade={{duration: 400}} out:fade={{duration: 400}}
            on:click={() => downloadVisible = !downloadVisible}
        >
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
    {/if}
    <div class="fixed z-40 top-0 w-full h-24 px-8 flex justify-between items-center">
        <a href="/" style="font-family: 'DM Mono';">
            <Text medium heading>
                tr.
            </Text>
        </a>
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
    <div class='fixed w-screen h-screen px-8 flex flex-col justify-center items-center'>
        {#if scrollY < windowHeight * 0.1875}
            <div
                in:fly={{delay: 400, duration: 400, y: 16}}
                out:fly={{duration: 400, y: -16}}
            >
                <Text large heading>
                    Upgraded
                    <br/>
                    Presentation Companion.
                </Text>
            </div>
        {:else if scrollY > windowHeight * 1.25}
            <div class="flex flex-col items-center gap-4">
                <div
                    in:fly={{delay: 400, duration: 400, y: 16}}
                    out:fly={{duration: 400, y: 16}}
                >
                    <Text large heading>
                        Now for iOS.
                    </Text>
                </div>
                <div
                    in:fly={{delay: 800, duration: 800, y: 16}}
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
        class="relative w-screen pb-[calc(100vh/3)] flex flex-col justify-center items-center"
        style="height: {totalHeightFactor * 100}vh;"
    >
        <img
            src="/presenter/images/Mockup.png"
            alt="Mockup of Presentation Master 2"
            class="h-[75vh] md:h-[87.5vh]"
        />
    </div>
    {#if scrollY >= totalHeightFactorOffset * windowHeight}
        <div
            in:fly={{delay: 1200, duration: 800, y: 16}}
            out:fly={{duration: 400, y: 16}}
            class="fixed z-30 bottom-0 w-full h-24 flex justify-center items-center"
        >
            <Footer center/>
        </div>
    {/if}
</main>