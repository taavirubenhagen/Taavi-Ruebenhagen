<script lang='ts'>
    import { Dialog, Footer, Icon, Text, TextButton } from "$lib/v2";
	import { dialog } from "$state/state";

    let windowHeight = 1080;
    let scrollY = 0;
</script>


<svelte:head>
    <title>Home 𐄁 Taavi Rübenhagen</title>
    <meta name="description" content="Taavi Rübenhagen"/>
</svelte:head>


<svelte:window
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY}
/>


<Dialog role="projects">
    <Text small heading>
        <div class="h-8 flex items-center font-srif text-left">
            projects.
        </div>
    </Text>
    <div/>
    <div class="flex flex-col gap-4">
        {#each [
            ["Presentation Master<br/>[Monetized]", "download", "font-sans", "/presenter"],
            ["rubenhagen.com<br/>[In Development]", "settings", "font-mono", "/"],
            ["Web Notes [MVP]", "open-in-new", "font-serif", "/app/webnotes"],
        ] as data}
            <a
                href={data[3]}
                class=
                "transition-all duration-200
                rounded-2xl border-2 border-black
                h-16 p-4 hover:scale-[101%]
                flex items-center gap-8"
            >
                <div>
                    <Icon name={data[1]} widthClass="w-6"/>
                </div>
                <Text medium paragraph>
                    <span class={data[2]}>
                        {@html data[0]}
                    </span>
                </Text>
            </a>
        {/each}
    </div>
</Dialog>
<main class="overflow-hidden min-h-screen flex flex-col justify-center p-8 sm:p-16">
    <Text large heading>
        taavi ruebenhagen.
    </Text>
    <div class="h-16"></div>
    <div class="w-full flex justify-start gap-4">
        <TextButton onClick={() => dialog.set("projects")}>
            Explore
        </TextButton>
        <TextButton href="mailto:t.ruebenhagen@gmail.com">
            Contact
        </TextButton>
    </div>
    <Footer home/>
</main>