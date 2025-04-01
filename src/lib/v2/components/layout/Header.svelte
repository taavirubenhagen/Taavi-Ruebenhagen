<script lang='ts'>
	import { logOut, user } from "$lib/db/auth";
    import { Dialog, InlineButton, LoginDialog, Text, TextButton } from "$lib/v2";
	import { fly } from "svelte/transition";

    export let abbreviation = "tr";
    export let href = "/";
    export let message: string | null = null;
    export let messageHref: string | null = null;
    export let account = false;
    export let menusVisible = true;
    
    let login = false;
    let menu = false;
</script>


{#await user()}
    <div/>
{:then user}
    {#if user.name}
        <Dialog bind:visible={login}>
            <TextButton expanded>
                Create Note
            </TextButton>
            <TextButton expanded>
                See my Notes
            </TextButton>
            <TextButton onClick={() => {logOut(); login = false}}>
                Log out
            </TextButton>
        </Dialog>
    {:else}
        <LoginDialog bind:visible={login}/>
    {/if}
{/await}
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
    <a class="{menusVisible ? "" : ""} w-16" href={href}>
        <Text small heading>
            {abbreviation}.
        </Text>
    </a>
    <slot/>
    {#if account}
        <div class="{menusVisible ? "" : ""} flex w-16 justify-end">
            {#await user()}
                <div class="w-16"/>
            {:then user}
                <div
                    class="relative w-16 flex justify-end"
                >
                    <button
                        on:click={() => user.name ? menu = true : login = true}
                        class="transition duration-[100ms] rounded-full h-10 aspect-square bg-[#BBBBBB] hover:bg-[#999999]"
                    >
                        {#if user.name}
                            {user.name.at(0)}
                        {:else}
                            >
                        {/if}
                    </button>
                    {#if menu}
                        <div
                            in:fly={{ duration: 200, y: -4 }}
                            class=
                            "absolute z-35 right-0 top-0
                            shadow rounded-2xl rounded-tr-[calc(1.25rem+2px)] border border-black
                            bg-white bg-opacity-0 backdrop-blur-[8px] p-4 pt-14 whitespace-nowrap"
                        >
                            <button
                                on:click={() => menu = false} class="absolute right-0 top-0 w-10 h-10 flex justify-center items-center">
                                x
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