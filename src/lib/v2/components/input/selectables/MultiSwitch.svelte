<script lang='ts'>
	import { InlineButton } from "$lib/v2";

	export let value: string;
	export let route: string | null = null;
    export let options: string[];
</script>


{#each options as v, i}
    {#if i != 0}
        <span class="text-[#999999]">
            &nbsp;𐄁
        </span>
    {/if}
    <span class="{v == value ? 'text-black' : 'text-[#999999]' } capitalize">
        <InlineButton invisible={v != value} onClick={
        () => route
        ? window.location.href = route + "/" + v.replaceAll(" ", "")
        : value = v
        }>
            {v}
        </InlineButton>
    </span>
{/each}