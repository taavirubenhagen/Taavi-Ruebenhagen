<script lang='ts'>
    import { Dialog, Footer, Icon, Switch, Text, TextButton } from "$lib/v2";
	import { dialog } from "$state/state";

	const projects = [
        ["Presentation Master", "download", "font-sans", "/presenter"],
        ["rubenhagen.com", "settings", "font-mono", "/"],
        ["hoffmanns-schuppen.com", "open-in-new", 'font-mono', "https://hoffmanns-schuppen.com"],
        ["Web Notes [First Look]", "lock-open", "font-serif", "/app/webnotes"],
    ];
	const finishedProjects = [
        ["Presentation Master", "download", "font-sans", "/presenter"],
    ];
	
    let windowHeight = 1080;
    let scrollY = 0;
    
    let allProjects = false;
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
    <Switch bind:value={allProjects} trueTitle="All" falseTitle="Finished"/>
    <div/>
    <div class="flex flex-col gap-4">
        {#each allProjects ? projects : finishedProjects as data}
            <button
                on:click={() => window.location.href = data[3]}
                class=
                "transition-all duration-200
                rounded-2xl border-2 border-black
                h-16 p-4 hover:scale-[101%]
                flex items-center gap-8 text-left"
            >
                <div>
                    <Icon name={data[1]} widthClass="w-6"/>
                </div>
                <Text medium paragraph>
                    <span class={data[2]}>
                        {data[0]}
                    </span>
                </Text>
            </button>
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