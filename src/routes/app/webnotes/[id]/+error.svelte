<script lang="ts">
  import { Text, TextButton } from "$lib/v2";
</script>


<svelte:head>
    <title>Not Found 𐄁 Taavi Rübenhagen</title>
    <meta name="description" content="Taavi Rübenhagen"/>
</svelte:head>


<main class="min-h-screen bg-white text-black p-8 md:p-16 flex flex-col justify-center items-center">
    <Text huge heading>:(</Text>
    <div class="h-4"></div>
    <Text small heading>Web Note not found.</Text>
    <div class="h-16"></div>
    <TextButton href="/app/webnotes">back</TextButton>
</main>