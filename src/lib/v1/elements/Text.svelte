<script lang='ts'>
    import { scale } from "$lib";
    
    export let small = false;
    export let medium = false;
    export let large = false;
    export let heading = false;
    export let paragraph = false;
    
    const style = (s: number) => `
        font-size: ${scale(s)}rem;`
        // TODO
        //@media (min-width: 768px) {
        //    font-size: ${scale(s) * 125}rem;
        //}
    ;
</script>


{#if paragraph}
    <p class='inline'>
        {#if small}
            <p style={style(0)}><slot/></p>
        {:else if medium}
            <p style={style(0.5)}><slot/></p>
        {:else if large}
            <p style={style(1)}><slot/></p>
        {/if}
    </p>
{/if}
{#if heading}
    <p class='font-bold tracking-wider'>
        {#if small}
            <p style={style(0.25)}><slot/></p>
        {:else if medium}
            <p style={style(1)}><slot/></p>
        {:else if large}
            <p style={style(1.5)}><slot/></p>
        {/if}
    </p>
{/if}