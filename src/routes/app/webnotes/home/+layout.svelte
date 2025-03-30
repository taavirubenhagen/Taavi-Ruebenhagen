<script lang='ts'>
    import { Text, TextButton } from "$lib/v2";
</script>


<main>
    <div class="fixed z-35 top-0 w-full h-32 px-8 md:px-16 pt-8 flex justify-between items-center">
        <a href="/app/webnotes">
            <Text medium heading>
                wn.
            </Text>
        </a>
        <TextButton href="mailto:t.ruebenhagen@gmail.com">
            FAQ
        </TextButton>
    </div>
    <slot/>
</main>