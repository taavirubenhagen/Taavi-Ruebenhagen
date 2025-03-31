<script lang='ts'>
  import { logIn, signUp } from "$lib/db/auth";
  import { Dialog, Footer, InlineButton, MultiSwitch, Switch, Text, TextButton, TextField } from "$lib/v2";
  
  export let signup = false;
  export let visible: boolean;
  
  let loginError = false;
  let usernameInput: string;
  let passwordInput: string;
  
  async function login() {
    const { success } = signup 
    ? await signUp(usernameInput, passwordInput)
    : await logIn(usernameInput, passwordInput);
    loginError = !success;
    if (success) {
      visible = false;
    }
    return;
  }
</script>


<svelte:head>
    <title>Web Notes</title>
    <meta name="description" content="Web Notes"/>
</svelte:head>


<Dialog visible={visible}>
    <TextField bind:value={usernameInput} placeholder="Username (a-z)"/>
    <TextField bind:value={passwordInput} placeholder="Password (8+ characters)"/>
    <div class="flex gap-4">
        <TextButton expanded primary onClick={login}>
            {signup ? "Sign up" : "Log in"}
        </TextButton>
        <TextButton expanded onClick={() => {
            visible = false;
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
                <InlineButton onClick={() => {
                  loginError = false;
                  signup = !signup;
                }}>
                    {signup ? "Log in" : "Sign up"} instead
                </InlineButton>
            </Text>
        </span>
    {/if}
</Dialog>