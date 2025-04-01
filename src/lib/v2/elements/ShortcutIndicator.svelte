<script lang='ts'>
    export let dark = false;
</script>


<span class="hidden lg:inline rounded-[4px] {dark ? "bg-[#606060] text-white" : " bg-[#F0F0F0] text-black" } px-1">
    <span class="opacity-60">
        <slot/>
    </span>
</span>