<script lang='ts'>
    import { Text } from "$lib";
	import { fly } from "svelte/transition";

    let windowHeight = 1080;
    let scrollY = 0;
</script>




<svelte:window bind:innerHeight={windowHeight} bind:scrollY={scrollY}/>




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
        <div
            in:fly={{duration: 400, y: 32}}
            out:fly={{duration: 400, y: 8}}
        >
            <Text large heading>
                Now for iOS.
            </Text>
        </div>
    {/if}
</div>
<div class="relative w-screen h-[312.5vh] pb-[calc(100vh/3)] flex flex-col justify-center items-center">
    <img
        src="/presenter/screenshot_1.jpg"
        alt="Mockup of Presentation Master 2"
        class="shadow-xl rounded-[4rem] h-[87.5vh] aspect-[0.5] border-8 border-neutral-300 bg-black p-2"
    />
</div>
