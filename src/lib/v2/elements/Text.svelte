<script lang='ts'>
	import { general } from "$state/context";
    import "../style/style.postcss";
    
    export let p = false;
    export let medium = false;
    export let small = false;
    export let large = false;
    export let huge = false;
    export let heading = false;
    export let paragraph = false;
</script>


{#if paragraph}
    <p class='{$general.paragraphFont} inline'>
        {#if small}
            <p class="text-[0.875rem] sm:text-[0.875rem]"><slot/></p>
        {:else if medium}
            <p class="text-[0.875rem] sm:text-[1rem]"><slot/></p>
        {:else if large}
            <p class="text-lg"><slot/></p>
        {/if}
    {/if}
{#if heading}
    <p class='{$general.headingFont} font-bold tracking-wider'>
        {#if p}
            <p class="text-[0.875rem] sm:text-[1rem]"><slot/></p>
        {:else if small}
            <p class="text-[1.375rem] md:text-[1.625rem]"><slot/></p>
        {:else if medium}
            <p class="text-[2rem] md:text-[2.5rem]"><slot/></p>
        {:else if large}
            <p class="text-[2.25rem] md:text-[3.5rem]"><slot/></p>
        {:else if huge}
            <p class="text-[3rem] md:text-[3.5rem]"><slot/></p>
        {/if}
    </p>
{/if}