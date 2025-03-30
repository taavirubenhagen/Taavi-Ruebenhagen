<script lang='ts'>
    export let invisible = false;
    export let href: string | null = null;
    export let onClick = () => {};
</script>


<button on:click={href == null ? onClick : () => window.location.href = href}>
    <div
        class=
        "transition-all duration-[200ms] hover:text-[#999999]
        {invisible ? "" : "underline underline-offset-8"}
        transition duration-200"
    >
        <slot/>
    </div>
</button>