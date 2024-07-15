<script>
    import { Text } from "$lib";
	import { TextButton } from "./components";
</script>




<main
    class=
    "overflow-hidden min-h-screen
    bg-black selection:bg-white
    text-white selection:text-black text-center"
>
    <div class="fixed top-0 w-full h-24 px-8 flex justify-between items-center">
        <div>
            <Text medium heading>P.</Text>
        </div>
        <TextButton onClick={() => {}}>Download</TextButton>
    </div>
    <slot/>
</main>