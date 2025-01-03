<script lang='ts'>
    import { context, scale, md, type Theme } from "$lib/v1";
    
    export let small = false;
    export let medium = false;
    export let large = false;
    export let heading = false;
    export let paragraph = false;
    export let inside = context.md;
    export let using: Theme|null = null;
    
    function style(heading: boolean, s1: number, s2: number) {
        if (using) {
          return `
          font-family: ${using.heading} : ${using.body};
          font-size: ${scale(md(inside) ? s2 : s1)}rem;
          `;
        }
        return `
        font-size: ${scale(md(inside) ? s2 : s1)}rem;
        `;
    }
</script>


{#if paragraph}
    <p class='inline'>
        {#if small}
            <p style={style(false, 0, 0)}><slot/></p>
        {:else if medium}
            <p style={style(false, 0.5, 0.5)}><slot/></p>
        {:else if large}
            <p style={style(false, 1, 1)}><slot/></p>
        {/if}
    </p>
{/if}
{#if heading}
    <p class='font-bold tracking-wider'>
        {#if small}
            <p style={style(true, 0.25, 0.25)}><slot/></p>
        {:else if medium}
            <p style={style(true, 1, 1.5)}><slot/></p>
        {:else if large}
            <p style={style(true, 2, 2.5)}><slot/></p>
        {/if}
    </p>
{/if}