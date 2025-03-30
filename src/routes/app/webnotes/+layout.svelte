<script lang='ts'>
    import { Text, TextButton } from "$lib/v2";
</script>


<main>
    <div class="fixed z-50 top-0 w-full h-8 bg-[#F0F0F0] px-8 md:px-16 flex justify-center items-center text-[#999999]">
        <a href="/app/webnotes">
            <Text small paragraph>
                Web Notes is under active development. Your notes will propably deleted at some time.
            </Text>
        </a>
    </div>
    <slot/>
</main>