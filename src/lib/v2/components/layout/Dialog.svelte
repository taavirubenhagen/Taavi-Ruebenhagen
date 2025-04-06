<script lang='ts'>
  import { logIn, signUp } from "$lib/db/auth";
  import { IconButton, InlineButton, Form, Switch, Text, TextButton, Checkbox } from "$lib/v2";
  import { dialog } from "$state/state";
  
  export let role: string;
  export let title: string | null = null;
  
  let signup = false;
  let newsletter = false;
  let loginError = false;
  
  let inputs = ["", ""];
  
  function close() {
    dialog.set("");
    loginError = false;
    inputs = ["", ""];
  }
  
  
  async function login() {
    const success = signup 
    ? await signUp(inputs[0].toLowerCase(), inputs[1])
    : await logIn(inputs[0].toLowerCase(), inputs[1]);
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
            p-8 md:p-16
            flex flex-col justify-center items-center"
        >
            <button on:click={close} class="absolute w-full h-full bg-opacity-50 bg-black"></button>
            <div class="relative rounded-[2rem] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/4 bg-white p-8 flex flex-col justify-center gap-4">
                {#if title}
                    <Text small heading>
                        {title}
                    </Text>
                {:else}
                    <div class="h-4"/>
                {/if}
                {#if role == "login"}
                    <Switch bind:value={signup} trueTitle="Sign up" falseTitle="Log in"/>
                    <div/>
                    <Form
                        bind:values={inputs}
                        inside="login"
                        placeholders={["E-Mail", "Password (8+ characters)"]}
                        onSubmit={login}
                    />
                    {#if signup}
                        <Checkbox small bind:checked={newsletter}>
                            Newsletter
                        </Checkbox>
                        <div/>
                    {/if}
                    <div/>
                    <div class="flex gap-4">
                        <TextButton expanded primary onClick={login}>
                            {signup ? "Sign up" : "Log in"}
                        </TextButton>
                        <TextButton
                            expanded
                            shortcut="x"
                            onClick={close}
                        >
                            Cancel
                        </TextButton>
                    </div>
                    {#if loginError}
                        <div/>
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
                <div class="absolute top-8 right-8">
                    <IconButton name="close" onClick={close}/>
                </div>
            </div>
        </div>
    </Text>
{/if}