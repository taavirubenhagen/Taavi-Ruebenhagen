<script lang='ts'>
    import { Button, Text } from "$lib/v1";
	import { slide } from "svelte/transition";
	import { TextButton } from ".";

	export let imprint = false;
	
    export let visible: boolean;
    export let changeVisibility;
</script>


{#if visible}
    <div
        in:slide={{duration: 400}}
        out:slide={{duration: 400}}
        class="fixed z-40 -bottom-32 w-full py-32"
    >
        <div class="relative bg-neutral-200">
            <div class="-translate-y-1/2 absolute z-40 top-0 w-full flex justify-center">
                <TextButton onClick={changeVisibility}>
                    Close
                </TextButton>
            </div>
            <div class="p-8 text-left">
                <slot/>
                {#if imprint}
                    <Text small paragraph>
                        Taavi Rübenhagen<br/>
                        Pothof 9d<br/>
                        38122 Braunschweig, Germany<br/>
                        <br/><br/>
                        E-Mail: t.ruebenhagen@gmail.com
                    </Text>
                {/if}
            </div>
        </div>
    </div>
{/if}