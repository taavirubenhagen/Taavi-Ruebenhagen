<script lang='ts'>
	import { logOut, user } from "$lib/db/auth";
    import { Dialog, Icon, InlineButton, Text, TextButton } from "$lib/v2";
	import { dialog } from "$state/state";
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
    "fixed z-30 {message ? "top-8" : "top-0"} w-full h-24 px-8 md:px-16 flex
    {menusVisible ? "justify-between" : "justify-center sm:justify-between"}
    items-center gap-8"
>
    <Text small heading>
        <a class="{menusVisible ? "" : ""} w-16 font-mono" href={href}>
            {abbreviation}.
        </a>
    </Text>
    <slot/>
    {#if account}
        <div class="{menusVisible ? "" : ""} flex w-16 justify-end">
            {#await user()}
                <div class="w-16"/>
            {:then user}
                <div
                    class="relative"
                >
                    <button
                        on:click={() => dialog.set(user.name ? "menu" : "login")}
                        class="transition duration-[100ms] rounded-full bg-black h-10 aspect-square bg-opacity-20 flex justify-center items-center"
                    >
                        {#if user.name}
                            {user.name.at(0)}
                        {:else}
                            <Icon name="login"/>
                        {/if}
                    </button>
                    {#if $dialog == "menu"}
                        <div
                            in:fly={{ duration: 200, y: -4 }}
                            class=
                            "absolute z-35 right-0 top-0
                            shadow rounded-2xl rounded-tr-[1.25rem] border border-black
                            bg-white bg-opacity-0 backdrop-blur-[8px] p-4 pt-14 whitespace-nowrap"
                        >
                            <button
                                on:click={() => dialog.set("")}
                                class="transition-all duration-[100ms] absolute right-0 top-0 w-10 h-10 hover:opacity-60 flex justify-center items-center">
                                <img src="/icons/tavy-24-04/close.svg" alt="" class="h-4"/>
                            </button>
                            <InlineButton onClick={async () => {
                                await logOut();
                                window.location.reload();
                            }}>
                                Log out
                            </InlineButton>
                        </div>
                    {/if}
                </div>
            {/await}
        </div>
    {/if}
</div>
<div class="h-24 {message ? "mb-8" : ""}"/>