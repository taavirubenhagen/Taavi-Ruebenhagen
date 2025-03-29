<script lang='ts'>
    import { Text, TextButton } from "$lib/v2";
</script>


<main>
    <div class="fixed z-40 top-0 w-full h-24 px-8 md:px-16 pb-64 flex justify-between items-center">
        <a href="/" style="font-family: 'DM Mono';">
            <Text medium heading>
                tr.
            </Text>
        </a>
        <TextButton href="mailto:t.ruebenhagen@gmail.com">
            Contact
        </TextButton>
    </div>
    <slot/>
</main>