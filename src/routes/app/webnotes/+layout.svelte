<script lang='ts'>
    import { Text, TextButton } from "$lib/v2";
</script>


<main>
    <a href="/app/webnotes/app/faq">
        <div class="fixed z-50 top-0 w-full h-8 bg-[#F0F0F0] px-8 md:px-16 flex justify-center items-center text-[#999999]">
            <Text small paragraph>
                Notes are not yet permanent.
            </Text>
        </div>
    </a>
    <slot/>
</main>