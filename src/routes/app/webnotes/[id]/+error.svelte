<script lang="ts">
  import { Text, TextButton } from "$lib/v2";
</script>


<svelte:head>
    <title>Not Found 𐄁 Taavi Rübenhagen</title>
    <meta name="description" content="Taavi Rübenhagen"/>
</svelte:head>


<main class="min-h-screen bg-white text-black p-8 md:p-16 flex flex-col justify-center items-center text-center">
    <Text huge heading>Error.</Text>
    <div class="h-4"></div>
    <Text p heading>Make sure you entered a valid, non-empty ID.</Text>
    <div class="h-16"></div>
    <TextButton primary href="/app/webnotes">Back</TextButton>
</main>