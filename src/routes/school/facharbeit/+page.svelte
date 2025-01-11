<script lang="ts">
    import { type Theme, smoothnessScale, Text, TextButton } from "$lib/v1";
	import { onMount, SvelteComponent } from "svelte";
    
    const theme: Theme = {
      background: "#FFFFFF",
      surface: "#5555FF",
      foreground: "#000000",
      primary: "#FF5555",
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
    <div class="h-24"></div>
    <div class="flex justify-center items-center gap-4">
        <TextButton
            bind:this={mainDownloadButton} primary download
            href={'/school/facharbeit/Pick Me Girls vs. Pick Me Boys.pdf'}
            using={theme} onClick={() => console.log("Clicked")}>
            Facharbeit herunterladen
        </TextButton>
        <TextButton
            bind:this={mainDownloadButton}
            href={'https://www.tiktok.com/@imlucastho/video/7132145422826523909?is_from_webapp=1&sender_device=pc&web_id=7458694460530443798'}
            using={theme} onClick={() => console.log("Clicked")}>
            <div class="text-white">
                Beispiel-TikTok
            </div>
        </TextButton>
    </div>
    <div class="h-24"></div>
    <div class="md:w-1/3 px-8 text-justify">
        <Text small paragraph>
            In der Facharbeit wurden TikTok-Videos wie das Beispiel oben, die sich mit dem "Pick Me"-Konzept befassen,
            statistisch analysiert
            und in Bezug zu verbreiteten Geschlechterstereotypen gesetzt.
            <br/><br/>
            Die Ergebnisse sind in der Grafik auf dem Plakat vorgestellt.
            Die roten und blauen Balken stellen jeweils dar,
            in wie vielen der untersuchten Videos eine Eigenschaft der jeweiligen "Pick Me"-Variante zugesprochen wurde.
            <br/><br/>
            Da Plakat und Website nur Platz für einen groben Überblick geben,
            wird inständig um das Lesen der Arbeit selbst gebeten.
            Wichtige thematische und methodische Feinheiten werden dort im Detail erläutert
            und Links zu allen untersuchten Videos bereitgestellt.
        </Text>
    </div>
    <div class="h-16"></div>
</main>