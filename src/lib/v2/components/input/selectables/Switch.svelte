<script lang='ts'>
	import { InlineButton } from "$lib/v2";
	import { general } from "$state/context";

    export let value: boolean;
    export let trueTitle: string;
    export let falseTitle: string;
</script>


<div class="flex {$general.buttonFont}">
    <InlineButton invisible onClick={() => value = false}>
        <span class="{!value ? 'text-black underline underline-offset-8' : 'text-[#999999]' }">
            {falseTitle}
        </span>
    </InlineButton>
    <span class="text-[#999999]">
        &nbsp;𐄁&nbsp;
    </span>
    <InlineButton invisible onClick={() => value = true}>
        <span class="{value ? 'text-black underline underline-offset-8' : 'text-[#999999]' }">
            {trueTitle}
        </span>
    </InlineButton>
</div>