<script lang='ts'>
    import { dialog } from "$state/state";
	import { TextField, Header } from "$lib/v2";
    
	let menusVisible = true;
    let searchExp: string;
</script>


<main class="cursor-default relative min-h-screen">
    <Header abbreviation="wn" href="/app/webnotes" messageHref="/app/webnotes/app/faq" account bind:menusVisible={menusVisible}>
        <div
            on:focusin={() => menusVisible = false}
            on:focusout={() => menusVisible = true}
            class="w-full sm:w-[50vw]"
        >
            <TextField
                bind:value={searchExp}
                placeholder="Search"
                action="Find"
                onSubmit={() => searchExp = ""}
            />
        </div>
    </Header>
    <slot/>
</main>