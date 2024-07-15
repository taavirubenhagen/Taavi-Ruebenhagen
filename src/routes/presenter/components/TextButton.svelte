<script lang='ts'>
    import { Button } from "$lib";

    export let onClick;
</script>


<Button onClick={onClick}>
    <div class="rounded-full border border-white px-4 py-2">
        <slot/>
    </div>
</Button>