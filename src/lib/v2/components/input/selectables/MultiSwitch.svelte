<script lang='ts'>
	import { InlineButton } from "$lib/v2";

	export let value = 0;
    export let options: string[];
</script>


{#each options as v, i}
    {#if i != 0}
        <span class="text-[#999999]">
            &nbsp;𐄁
        </span>
    {/if}
    <InlineButton invisible onClick={() => value = i}>
        <span class="{i == value ? 'text-black underline underline-offset-8' : 'text-[#999999]' }">
            {v}
        </span>
    </InlineButton>
{/each}