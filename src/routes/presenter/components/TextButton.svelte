<script lang='ts'>
    import { Button } from "$lib";

    export let primary = false;
    export let onClick;
</script>


<Button onClick={onClick}>
    <div
        class=
        "{primary ? "invert" : "hover:invert"}
        transition duration-200
        rounded-full border border-white
        bg-black px-4 py-2"
    >
        <slot/>
    </div>
</Button>