<script lang='ts'>
	import { InlineButton } from "$lib/v2";

    export let dark = false;
    export let value: string;
    export let placeholder;
</script>




<input
    bind:value={value}
    placeholder={placeholder}
    class=
    "{dark ? "invert" : ""} w-full
    outline-none border border-black rounded-full
    px-4 py-2 bg-white text-black"
/>