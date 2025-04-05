<script lang='ts'>
	import { page } from "$app/stores";
    import { Footer, InlineButton, MultiSwitch, Switch, Text, TextButton, TextField } from "$lib/v2";

    $: notes = $page.data.notes;
    
    let loggedIn = false;
    let login = false;
    let mode = 0;
    
    let usernameInput: string;
    let passwordInput: string;
    let idInput: string;
</script>


<svelte:head>
    <title>How it works 𐄁 Web Notes</title>
    <meta name="description" content="How it works 𐄁 Web Notes"/>
</svelte:head>


<main class="w-full min-h-full p-8 md:p-16 flex flex-col items-center">
    <div class="lg:w-2/3 xl:w-1/2 flex flex-col text-justify">
        <Text medium heading>
            How it works
        </Text>
        <div class="h-12 md:h-16"></div>
        <Text medium paragraph>
            Web Notes is like if your classic Android notes app and Google Drive had a child.
            <br/>
            You can write notes and share them with your friends or across your own different devices.
            Once you understand how it works, it's the simplest form of collaborative note taking.
        </Text>
        <div class="h-24"></div>
        <Text small heading>
            <span class="text-left">
                Open, Public and Private Notes
            </span>
            </Text>
            <div class="h-12"></div>
        <Text medium paragraph>
            Web Notes can either be open, public or private.
            This refers to the level of access that both the creator and an anonymous user with the notes ID have.
            <br/><br/>
            Open notes can be viewed and edited by anyone, even if they are not logged in.
            Public notes can be viewed by anyone, but only edited by their creator.
            Private notes are just for you alone.
            Keep in mind that Web Notes is just a side project and does not neccessarily offer perfect security.
        </Text>
        <div class="h-32"></div>
    </div>
    <Footer/>
</main>