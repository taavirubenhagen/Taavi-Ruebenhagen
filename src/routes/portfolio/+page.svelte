<script lang='ts'>
    import { Dialog, Footer, Icon, Switch, Text, TextButton } from "$lib/v2";
	import { dialog } from "$state/state";

	const projects = [
        ["Presentation Master 2", "/presenter/square_icon.png", "font-sans", "/presenter"],
        ["hoffmanns-schuppen.com", "hoffmanns/Logo.jpg", 'font-hoffmanns', "https://hoffmanns-schuppen.com"],
        ["rubenhagen.com", "/Logo.png", "font-mono font-bold", "/"],
        //["Web Notes [First Look]", "/webnotes/Transparent Logo.png", "font-serif", "/app/webnotes"],
        //["Ultraminimalist UI Icons", "/icons/settings.svg", "font-sans", "/coming-soon"],
    ];
	const finishedProjects = [
        ["Presentation Master 2", "/presenter/square_icon.png", "font-sans", "/presenter"],
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


<Dialog role="projects" title="projects.">
    <div/>
    <Switch bind:value={allProjects} trueTitle="All" falseTitle="Finished"/>
    <div/>
    <div class="flex flex-col gap-4">
        {#each allProjects ? projects : finishedProjects as data}
            <button
                on:click={() => window.location.href = data[3]}
                class=
                "transition-all duration-200
                rounded-[1rem] border-2 border-black
                p-3 hover:scale-[101%]
                flex items-center gap-4 text-left"
            >
                <div>
                    <img src={data[1]} alt="" class="shadow rounded-lg w-10"/>
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
<main class="overflow-hidden min-h-screen p-8 sm:p-16 flex flex-col justify-center gap-8">
    <!--<img src="/rubenhagen/portrait.png" alt="" class="w-16 h-16">-->
    <Text large heading>
        taavi ruebenhagen.
    </Text>
    <div class="w-full flex justify-start gap-4">
        <TextButton onClick={() => dialog.set("projects")}>
            Explore
        </TextButton>
        <TextButton href="mailto:t.ruebenhagen@gmail.com">
            Contact
        </TextButton>
    </div>
    <div class="absolute left-0 bottom-0">
        <Footer home/>
    </div>
</main>