<script lang='ts'>
	import { Icon } from "$lib/v2";

	export let name: string;
    export let href: string | null = null;
    export let onClick = () => console.log("InlineButton should have href or onClick attribute");
</script>


<button on:click={href == null ? onClick : () => window.location.href = href} class="transition-all duration-[200ms] inline hover:opacity-60">
    <Icon name={name}/>
</button>