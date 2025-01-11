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
    class="relative min-h-screen py-16 selection:bg-black flex flex-col items-center selection:text-white text-center"
    style="
        bg-color: {theme.background};
        font-family: {theme.body};
    "
>
    <div class="relative flex flex-col justify-center items-center">
        <div class="abslute top-0">
            <Text medium heading using={theme}>"Pick Me Girls"</Text>
        </div>
        <div class="relative z-40 mx-8 my-4 border border-black bg-white px-4 py-2" style="border-radius: {0.125 * smoothnessScale(theme)}rem;">
            <Text small heading using={theme}>vs</Text>
        </div>
        <div class="absolte bottom-0">
            <Text medium heading using={theme}>"Pick Me Boys"</Text>
        </div>
    </div>
    <div class="pt-4">
        <Text small heading using={theme}>Zusätzliches Präsentationsmaterial</Text>
    </div>
    <div class="h-32"></div>
    <TextButton
        bind:this={mainDownloadButton} primary download
        href={'/school/facharbeit/Pick Me Girls vs. Pick Me Boys.pdf'}
        using={theme} onClick={() => console.log("Clicked")}>
        Facharbeit herunterladen
    </TextButton>
    <div class="h-32"></div>
    <div class="md:w-1/3 px-8 text-justify">
        <Text small paragraph>
            Ich habe TikTok-Videos wie das Beispiel unten, die sich mit dem "Pick Me"-Konzept befassen,
            statistisch analysiert (ohne Anspruch auf statistische Verwendbarkeit im eigentlichen Sinn; siehe Facharbeit),
            um dessen Bezug zu den Geschlechterstereotypen der Video-Ersteller zu untersuchen.
            Links zu allen untersuchten Videos und detailliertere Auswertungen sind in der Facharbeit zu finden.
            <br/><br/>
            Da Plakat und Website nur Platz für einen groben Überblick geben,
            bitte ich inständig um das Lesen der Arbeit selbst.
            Wichtige thematische und methodische Feinheiten werden dort im Detail erläutert.
        </Text>
    </div>
    <div class="h-16"></div>
    <div class="flex gap-4">
        <TextButton
            bind:this={mainDownloadButton}
            href={'https://www.tiktok.com/@imlucastho/video/7132145422826523909?is_from_webapp=1&sender_device=pc&web_id=7458694460530443798'}
            using={theme} onClick={() => console.log("Clicked")}>
            Beispiel-TikTok
        </TextButton>
        <TextButton
            bind:this={mainDownloadButton} download
            href={'/school/facharbeit/Grafik.pdf'}
            using={theme} onClick={() => console.log("Clicked")}>
            Grafik herunterladen
        </TextButton>
    </div>
</main>