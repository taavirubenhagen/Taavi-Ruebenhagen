<script lang='ts'>
    import { Button } from "$lib/v1";

    export let invisible = false;
    export let openInNew = false;
    export let onClick;
</script>


<Button onClick={onClick}>
    <div
        class=
        "{invisible ? "" : "underline underline-offset-8"}
        transition duration-200"
    >
        <slot/>
    </div>
</Button>