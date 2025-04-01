<script lang='ts'>
  import { InlineButton, Text } from "$lib/v2";
  
  export let closable = false;
  export let visible: boolean;
</script>


{#if visible}
    <Text medium paragraph>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            on:keydown={(event) => {
                if (event.key == "Escape" || event.key == "x") {
                    visible = false;
                }
            }}
            class=
            "transition-all duration-[100ms]
            fixed z-40 top-0 w-full h-full
            bg-white p-8 md:p-16
            flex flex-col justify-center items-center"
        >
            <div class="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/4 h-full flex flex-col justify-center gap-4">
                <slot/>
                {#if closable}
                    <div class="absolute z-50 bottom-16 w-full flex justify-center">
                        <InlineButton onClick={() => visible = false}>
                            Close [X]
                        </InlineButton>
                    </div>
                {/if}
            </div>
        </div>
    </Text>
{/if}