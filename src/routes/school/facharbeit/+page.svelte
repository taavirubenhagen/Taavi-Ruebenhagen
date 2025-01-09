<script lang="ts">
    import { type Theme, smoothnessScale, Text, TextButton } from "$lib/v1";
	import { onMount, SvelteComponent } from "svelte";
    
    const theme: Theme = {
      background: "#FFFFFF",
      surface: "#EEEEEE",
      foreground: "#000000",
      primary: "#FF00FF",
      accent: "#0000FF",
      alignment: "left",
      body: "Nunito",
      fontHeading: "Nunito",
      fontWeightButton: "bold",
      mono: "DM Mono",
      rectangular: false,
      smoothness: 3,
    };
    
    let mainDownloadButton: SvelteComponent;
    
    onMount(() => mainDownloadButton.click());
</script>

<main
    class="h-screen px-8 md:px-16 py-16 selection:bg-black selection:text-white text-center"
    style="
        bg-color: {theme.background};
        font-family: {theme.body};
    "
>
    <div
        class="relative flex flex-col justify-center items-center"
        style="
            border-radius: {0.25 * smoothnessScale(theme)}rem;
        "
    >
        <div class="abslute top-0">
            <Text medium heading using={theme}>
                "Pick Me Girls"
            </Text>
        </div>
        <div
            class="relative z-40 mx-8 my-4 border border-black bg-white px-4 py-2"
            style="
                border-radius: {0.125 * smoothnessScale(theme)}rem;
            "
        >
            <Text small heading using={theme}>
                vs
            </Text>
        </div>
        <div class="absolte bottom-0">
            <Text medium heading using={theme}>
                "Pick Me Boys"
            </Text>
        </div>
    </div>
    <div class="pt-4">
        <Text small heading using={theme}>
            Zusätzliches Präsentationsmaterial
        </Text>
    </div>
    <div class="h-32"></div>
    <TextButton
        bind:this={mainDownloadButton} primary
        download={'/school/facharbeit/"Pick Me Girls" vs. "Pick Me Boys" - Geschlechterstereotype in geschlechtsspezifischen Social-Media-Trends'}
        using={theme} onClick={() => console.log("Clicked")}>
        Facharbeit herunterladen
    </TextButton>
    <!--<Text small paragraph>
        <span class="italic">
            Updated at 2024-12-14
        </span>
        <br/><br/>
        Presentation Master 2 (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Presentation Master 2.
        <br/><br/>
        This Privacy Policy applies to our website, and its associated subdomains (collectively, our “Service”) alongside our application, Presentation Master 2. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
        <br/>
        <br/><br/>
        <br/><br/>
        <Text medium heading>
            Beispiele
        </Text>
        <br/><br/>
    </Text>-->
    <div class="h-64"></div>
    <Text small paragraph>Diese Seite ist noch im Aufbau.</Text>
</main>