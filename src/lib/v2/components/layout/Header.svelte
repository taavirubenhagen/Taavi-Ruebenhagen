<script lang='ts'>
	import { logOut, user } from "$lib/db/auth";
    import { Dialog, Icon, InlineButton, Text, TextButton } from "$lib/v2";
	import { general, light } from "$state/context";
	import { dialog, input } from "$state/state";
	import { fly } from "svelte/transition";

    export let abbreviation = "tr";
    export let href = "/";
    export let message: string | null = null;
    export let messageHref: string | null = null;
    export let account = false;
    export let menusVisible = true;
</script>


{#if message}
    <a href={messageHref}>
        <div class="fixed z-50 top-0 w-full h-8 bg-[#F0F0F0] px-8 md:px-16 flex justify-center items-center text-[#999999]">
            <Text small paragraph>
                {message}
            </Text>
        </div>
    </a>
{/if}
<div
    class=
    "fixed {message ? "top-8" : "top-0"} w-full h-24 px-8 md:px-16 flex
    {menusVisible ? "justify-between" : "justify-center sm:justify-between"}
    items-center gap-8"
>
    <Text small heading>
        <a class="{menusVisible ? "" : ""} w-16 {$general.headingFont}" href={href}>
            {abbreviation}.
        </a>
    </Text>
    <slot/>
    {#if account}
        <div class="{menusVisible ? "" : ""} flex w-16 justify-end {$general.headingFont}">
            {#await user()}
                <div class="w-16"/>
            {:then u}
                <button
                    on:click={() => {
                      input.set(true);
                      dialog.set(u.id ? "menu" : "login");
                    }}
                    class="transition duration-[100ms] rounded-full h-10 aspect-square flex justify-center items-center"
                >
                    {#if u.id}
                        <Icon name="menu" widthClass="w-5"/>
                    {:else}
                        <Icon name="login" widthClass="w-5"/>
                    {/if}
                </button>
            {/await}
        </div>
    {/if}
</div>
<div class="h-24 {message ? "mb-8" : ""}"/>