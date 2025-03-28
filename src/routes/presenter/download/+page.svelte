<script lang="ts">
	import { slide } from "svelte/transition";

    import { Text, InlineButton, TextButton, Footer } from "$lib/v2";

    let imprintVisible = false;
</script>




<main class="relative overflow-x-hidden min-h-screen p-16 pt-32 pb-40 flex flex-col justify-center items-center text-center font-mono">
    <Text large paragraph>
        <TextButton download href="/presenter/Presentation Master 2 - Desktop Companion.msi">
            Download PM2 for Windows
        </TextButton>
        <br/><br/>
        <br/><br/>
        Requires network access and simulates key presses,
        <br/>
        which can result in false-positive antivirus warnings.
        <br/><br/>
        <InlineButton href="mailto:t.ruebenhagen@gmail.com">
            Any questions?
        </InlineButton>
    </Text>
    <Footer href="/presenter"/>
</main>