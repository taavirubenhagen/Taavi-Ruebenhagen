<script lang='ts'>
    import "../style/style.postcss";
    //import { type Theme } from "$lib/v2";

    //export let theme: Theme|null;
</script>


<div style="
    background-color: theme?.background;
">
    <slot/>
</div>