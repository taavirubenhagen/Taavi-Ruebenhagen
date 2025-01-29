<script lang='ts'>
    import { Button } from "$lib/v1";

    export let primary = false;
    export let download = false;
    export let external = false;
    export let onClick;
</script>


<Button onClick={onClick}>
    <div
        class=
        "{primary ? "invert hover:invert-0" : "invert-0 hover:invert"}
        transition duration-200
        rounded-full border border-white
        bg-black px-4 py-2 text-white"
    >
        <slot/>
    </div>
</Button>