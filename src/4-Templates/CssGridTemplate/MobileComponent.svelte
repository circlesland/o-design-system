<script lang="ts">
  export let componentStyle: string = "";
</script>

<div
  class="flex flex-col items-center justify-center h-full bg-white bg-center bg-cover"
  style="{componentStyle} background-image: url(/images/background.webp)">
  <div
    class="justify-center w-full h-full max-w-lg bg-white shadow-2xl wrap md:m-12"
    style="position:relative;max-height: 900px">
    <slot />
  </div>
</div>
