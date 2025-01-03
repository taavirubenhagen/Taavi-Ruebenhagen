<!--TODO: Privacy Policy, Imprint, Link to home-->

<script lang='ts'>
	import { fly, slide } from "svelte/transition";
    import { scale, Text, TextButton } from "$lib/v1";
	import {
        InlineButton,
        BottomSheet,
    } from "../presenter/[components]";
	import { theme } from "./theme";

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




<div class="text-white">
    <BottomSheet imprint visible={imprintVisible && scrollY >= totalHeightFactorOffset * windowHeight} changeVisibility={() => imprintVisible = false}/>
    <div
        class="fixed z-40 top-0 w-full flex justify-between items-center"
        style="
            height: {scale(2)}rem;
            background-color: {theme.surface};
            padding-left: {scale(1)}rem;
            padding-right: {scale(1)}rem;
        "
    >
        <TextButton navigation using={theme} onClick={() => {}}>
            <Text small heading>Menu</Text>
        </TextButton>
        Spices
        <TextButton navigation using={theme} onClick={() => {}}>
            <Text small heading>Cart</Text>
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
    <div style="height: {scale(2)}rem;"/>
    <div
        class='fixed w-screen h-full bg-cover flex flex-col justify-center items-center'
        style='
            background-image: url("/spices/images/marketing/epic_sale_background.jpg");
            background-size: cover;
        '
    >
        <Text medium heading inside={windowHeight}>
            Winter Sale
        </Text>
    </div>
</div>