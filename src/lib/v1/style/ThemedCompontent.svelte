<!-- TODO: R -->

<script lang='ts'>
    //import { Button } from "$lib";

    export let theme: {
        background: string;
        surface: string;
        foreground: string;
        primary: string;
        accent: string;
        body: string;
        heading: string;
        mono: string;
        rectangular: number;
        smoothness: number;
    };
</script>


<div style="
    background-color: {theme.background};
">
    <slot/>
</div>


<style lang='postcss'>
    .themed {
        background-color: theme;
    }
</style>