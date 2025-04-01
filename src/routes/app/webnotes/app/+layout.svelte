<script lang='ts'>
	import { TextField, Header } from "$lib/v2";
    
    let searchExp: string;
</script>


<main class="relative min-h-screen">
    <Header abbreviation="wn" href="/app/webnotes" messageHref="/app/webnotes/app/faq" account>
        <div class="w-full sm:w-[50vw]">
            <TextField bind:value={searchExp} placeholder="Search" action="Find" onSubmit={() => searchExp = ""}></TextField>
        </div>
    </Header>
    <slot/>
</main>