<script lang='ts'>
    import "../style/style.postcss";
    /*import {
      type Theme,
      Themed,
    } from "$lib/v2";*/
    
    export let small = false;
    export let medium = false;
    export let large = false;
    export let heading = false;
    export let paragraph = false;
    //export let inside = context.md;
    /*export let using: Theme|null = {
      "background": "#000000",
    };*/
</script>


{#if paragraph}
    <p class='inline'>
        {#if small}
            <p class="text-sm"><slot/></p>
        {:else if medium}
            <p class="text-md"><slot/></p>
        {:else if large}
            <p class="text-lg"><slot/></p>
        {/if}
    </p>
{/if}
{#if heading}
    <p class='font-bold tracking-wider'>
        {#if small}
            <p class="text-[1rem]"><slot/></p>
        {:else if medium}
            <p class="text-[1.5rem] md:text-[2rem]"><slot/></p>
        {:else if large}
            <p class="text-[2rem] md:text-[3.5rem]"><slot/></p>
        {/if}
    </p>
{/if}