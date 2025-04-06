<script lang='ts'>
  import { Icon, Text } from "$lib/v2";
import { general, light } from "$state/context";
  
  export let dark = false;
  export let small = false;
  export let checked: boolean;
</script>

<button on:click={() => checked = !checked} class="transition-all duration-[100ms] opacity-100 hover:opacity-60 flex items-center gap-4">
    <span class="border border-black {small ? "rounded-[4px] w-4 h-4" : "rounded-[6px] w-5 h-5"} inline-flex justify-center items-center">
        {#if checked}
            <Icon name="check" widthClass={small ? "w-2" : "w-3"}/>
        {/if}
    </span>
    <Text small={small} medium={!small} paragraph>
        <slot/>
    </Text>
</button>