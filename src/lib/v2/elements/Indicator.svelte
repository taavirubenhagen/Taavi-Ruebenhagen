<script lang='ts'>
	import { shortcuts } from "$state/preferences";

	export let alwaysVisible = false;
    export let dark = false;
</script>


{#if $shortcuts || alwaysVisible}
    <span class="inline rounded-[4px] {dark ? "bg-[#606060] text-white" : " bg-[#F0F0F0] text-black" } font-mono px-1">
        <span class="opacity-60">
            <slot/>
        </span>
    </span>
{/if}