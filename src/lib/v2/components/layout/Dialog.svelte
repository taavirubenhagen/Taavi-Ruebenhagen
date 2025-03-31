<script lang='ts'>
  import { Text } from "$lib/v2";
  
  export let visible;
</script>


<Text medium paragraph>
    <main
        class=
        "transition-all duration-[100ms]
        {visible ? "opacity-100" : "pointer-events-none opacity-0"}
        fixed z-40 top-0 w-full h-full
        bg-white p-8 md:p-16
        flex flex-col justify-center items-center"
    >
        <div class="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/4 h-full flex flex-col justify-center gap-4">
            <slot/>
        </div>
    </main>
</Text>