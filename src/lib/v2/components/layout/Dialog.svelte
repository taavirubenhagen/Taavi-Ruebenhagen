<script lang='ts'>
  import { logIn, signUp } from "$lib/db/auth";
  import { InlineButton, Switch, Text, TextButton, TextField } from "$lib/v2";
  import { dialog } from "$state/state";
  
  export let closable = false;
  export let role: string;
  
  let signup = false;
  let loginError = false;
  let usernameInput: string;
  let passwordInput: string;
  
  async function login() {
    const success = signup 
    ? await signUp(usernameInput.toLowerCase(), passwordInput)
    : await logIn(usernameInput.toLowerCase(), passwordInput);
    loginError = !success;
    if (success) {
      dialog.set("");
      window.location.reload();
    }
    return;
  }
</script>


{#if $dialog == role}
    <Text medium paragraph>
        <div
            class=
            "transition-all duration-[100ms]
            fixed z-40 top-0 w-full h-full
            bg-white p-8 md:p-16
            flex flex-col justify-center items-center"
        >
            <div class="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/4 h-full flex flex-col justify-center gap-4">
                {#if role == "login"}
                    <Switch bind:value={signup} trueTitle="Sign up" falseTitle="Log in"/>
                    <div/>
                    <div class="lowercase">
                        <TextField bind:inside={$dialog} bind:value={usernameInput} placeholder="Username (a-z)" onSubmit={login}/>
                    </div>
                    <TextField bind:value={passwordInput} placeholder="Password (8+ characters)" onSubmit={login}/>
                    <div class="flex gap-4">
                        <TextButton expanded primary onClick={login}>
                            {signup ? "Sign up" : "Log in"}
                        </TextButton>
                        <TextButton
                            expanded
                            shortcut="x"
                            onClick={() => {
                                dialog.set("");
                                loginError = false;
                                usernameInput = "";
                                passwordInput = "";
                            }
                        }>
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
                {:else}
                    <slot/>
                {/if}
                {#if closable}
                    <div class="absolute z-50 bottom-16 w-full flex justify-center">
                        <InlineButton onClick={() => dialog.set("")}>
                            Close [X]
                        </InlineButton>
                    </div>
                {/if}
            </div>
        </div>
    </Text>
{/if}