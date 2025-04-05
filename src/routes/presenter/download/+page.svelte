<script lang="ts">
	import { slide } from "svelte/transition";

    import { Text, InlineButton, TextButton, Footer } from "$lib/v2";

    let imprintVisible = false;
</script>


<svelte:head>
    <title>Download 𐄁 Presentation Master 2</title>
    <meta name="description" content="Upgraded Presentation Companion"/>
</svelte:head>


<main class="relative overflow-x-hidden min-h-screen p-16 pt-32 pb-40 flex flex-col justify-center items-center text-center">
    <Text large paragraph>
        <span class="font-mono">
            <TextButton href="/presenter/Presentation Master 2 - Desktop Companion.msi">
                <span class="font-mono">
                    Download PM2 for Windows
                </span>
            </TextButton>
            <br/><br/>
            Requires network access and simulates key presses,
            <br/>
            which can result in false-positive antivirus warnings.
            <br/><br/>
            <InlineButton href="mailto:t.ruebenhagen@gmail.com">
                Any questions?
            </InlineButton>
        </span>
    </Text>
    <Footer center href="/presenter"/>
</main>