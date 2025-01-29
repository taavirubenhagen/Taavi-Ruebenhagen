<!-- TODO: R -->

<script lang='ts'>
    import { type Theme } from "$lib/v1";

    export let theme: Theme;
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