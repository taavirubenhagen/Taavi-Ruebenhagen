<script lang='ts'>
	import { InlineButton } from "$lib/v2";

    export let value: boolean;
    export let trueTitle: string;
    export let falseTitle: string;
</script>



<InlineButton invisible onClick={() => value = true}>
    <span class="{value ? 'text-black underline underline-offset-8' : 'text-[#999999]' }">
        {trueTitle}
    </span>
</InlineButton>
<span class="text-[#999999]">
    𐄁
</span>
<InlineButton invisible onClick={() => value = false}>
    <span class="{!value ? 'text-black underline underline-offset-8' : 'text-[#999999]' }">
        {falseTitle}
    </span>
</InlineButton>