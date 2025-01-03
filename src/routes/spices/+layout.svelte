<script lang="ts">
    import "../../tavy.postcss";
	import { theme } from "./theme";
</script>




<main
    class="overflow-hidden min-h-screen"
    style="
    background-color: {theme.background};
    color: {theme.foreground};
    text-align: {theme.alignment};
    font-family: {theme.body};
    "
>
    <slot/>
</main>