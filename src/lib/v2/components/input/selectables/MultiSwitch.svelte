<script lang='ts'>
	import { InlineButton } from "$lib/v2";
	import { general } from "$state/context";

	export let value: string;
	export let route: string | null = null;
    export let options: string[];
</script>


<div class="w-full flex justify-start {$general.buttonFont}">
    {#each options as v, i}
        {#if i != 0}
            <span class="text-[#999999]">
                &nbsp;&nbsp;𐄁&nbsp;&nbsp;
            </span>
        {/if}
        <InlineButton invisible={v != value} onClick={
        () => route
        ? window.location.href = route + "/" + v.replaceAll(" ", "")
        : value = v
        }>
            <span class="{v == value ? 'text-black' : 'text-[#999999]' } capitalize">
                {v}
            </span>
        </InlineButton>
    {/each}
</div>