<script lang='ts'>
    import "../../tavy.postcss";

    export let small = false;
    export let medium = false;
    export let large = false;
    export let heading = false;
    export let paragraph = false;
</script>


{#if heading}
    {#if small}
        <p class='font-sans font-bold text-base md:text-lg inline'><slot/></p>
    {:else if medium}
        <p class='font-sans font-bold text-4xl md:text-5xl inline'><slot/></p>
    {:else if large}
        <p class='font-sans font-bold text-6xl md:text-8xl inline'><slot/></p>
    {/if}
{/if}