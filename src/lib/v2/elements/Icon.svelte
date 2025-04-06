<script lang='ts'>
  export let dark = false;
  export let name: string;
  export let widthClass = "w-4";
</script>


<img src="/icons/{name}.svg" alt="" class={widthClass + ( dark ? " invert" : "" )}/>