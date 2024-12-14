<script lang='ts'>
    import "../../tavy.postcss";

    export let small = false;
    export let medium = false;
    export let large = false;
    export let heading = false;
    export let paragraph = false;
</script>


{#if paragraph}
    <p class='inline'>
        {#if small}
            <p class='text-base'><slot/></p>
        {:else if medium}
            <p class='text-xl'><slot/></p>
        {:else if large}
            <p class="hidden"><slot/></p>
        {/if}
    </p>
{/if}
{#if heading}
    <p class='font-bold tracking-wider'>
        {#if small}
            <p class='text-base md:text-lg'><slot/></p>
        {:else if medium}
            <p class='text-4xl md:text-5xl'><slot/></p>
        {:else if large}
            <p class='text-5xl md:text-8xl'><slot/></p>
        {/if}
    </p>
{/if}