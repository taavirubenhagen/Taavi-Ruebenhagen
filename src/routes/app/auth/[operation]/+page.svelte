<script lang='ts'>
  import { page } from "$app/state";
  import { logIn, signUp } from "$lib/db/supabase";
  import { Footer, InlineButton, MultiSwitch, Switch, Text, TextButton, TextField } from "$lib/v2";
  
  $: signup = page.params.operation == "signup"
  
  let loginError = false;
  let usernameInput: string;
  let passwordInput: string;
  
  
  async function login() {
    const { success } = signup 
    ? await signUp(usernameInput, passwordInput)
    : await logIn(usernameInput, passwordInput);
    loginError = !success;
    if (success) {
      window.location.href = "/app/webnotes";
    }
    return;
  }
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<main class="w-full h-screen bg-white p-8 md:p-16 flex flex-col justify-center items-center">
    <div class="w-full h-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/4 flex flex-col justify-center gap-4">
        <TextField autofocus bind:value={usernameInput} placeholder="Username (a-z)"/>
        <TextField bind:value={passwordInput} placeholder="Password (8+ characters)"/>
        <div class="flex gap-4">
            <TextButton expanded primary onClick={login}>
                {signup ? "Sign up" : "Log in"}
            </TextButton>
            <TextButton expanded onClick={() => {
                loginError = false;
                usernameInput = "";
                passwordInput = "";
            }}>
                Cancel
            </TextButton>
        </div>
        {#if loginError}
            <div></div>
            <span class="text-red-500">
                <Text medium paragraph>
                    {signup ? "Signup" : "Login"} failed.
                    <InlineButton href="/app/auth/{signup ? "login" : "signup"}">
                        {signup ? "Log in" : "Sign up"} instead
                    </InlineButton>
                </Text>
            </span>
        {/if}
    </div>
    <Footer/>
</main>