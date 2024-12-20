<script lang='ts'>
    //import "../../tavy.postcss";

    export let onClick;
</script>


<button on:click={onClick}>
    <slot/>
</button>