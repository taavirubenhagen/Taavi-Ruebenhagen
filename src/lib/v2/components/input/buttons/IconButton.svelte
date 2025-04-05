<script lang='ts'>
	export let name: string;
    export let href: string | null = null;
    export let onClick = () => console.log("InlineButton should have href or onClick attribute");
</script>


<button on:click={href == null ? onClick : () => window.location.href = href} class="transition-all duration-[200ms] inline hover:opacity-60">
    <img src="/icons/tavy-24-04/{name}.svg" alt="" class="w-4"/>
</button>