<script lang='ts'>
	import { InlineButton, Text } from "$lib/v2";
	import { general } from "$state/context";

    export let value: boolean;
    export let trueTitle: string;
    export let falseTitle: string;
</script>



<Text p heading>
    <div class="flex {$general.buttonFont}">
        <InlineButton invisible onClick={() => value = false}>
            <span class="{!value ? 'text-black underline underline-offset-8' : 'text-[#999999]' } capitalize">
                {falseTitle}
            </span>
        </InlineButton>
        <span class="text-[#999999]">
            &nbsp;&nbsp;𐄁&nbsp;&nbsp;
        </span>
        <InlineButton invisible onClick={() => value = true}>
            <span class="{value ? 'text-black underline underline-offset-8' : 'text-[#999999]' } capitalize">
                {trueTitle}
            </span>
        </InlineButton>
    </div>
</Text>