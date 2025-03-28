<script lang='ts'>
    import "../style/style.postcss";
    /*import {
      type Theme,
      Themed,
    } from "$lib/v2";*/
    
    export let small = false;
    export let medium = false;
    export let large = false;
    export let huge = false;
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
            <p class="text-sm md:text-md"><slot/></p>
        {:else if medium}
            <p class="text-md"><slot/></p>
        {:else if large}
            <p class="text-lg"><slot/></p>
        {:else if huge}
            <p class="text-6xl"><slot/></p>
        {/if}
    {/if}
{#if heading}
    <p class='font-bold tracking-wider'>
        {#if small}
            <p class="text-[0.5rem] md:text-[1rem]"><slot/></p>
        {:else if medium}
            <p class="text-[2rem] md:text-[2.5rem]"><slot/></p>
        {:else if large}
            <p class="text-[2.5rem] md:text-[3.5rem]"><slot/></p>
        {/if}
    </p>
{/if}