<script lang="ts">
  import { o } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-rows: 1fr auto;
    position: relative;
  }
</style>

<div class="grid h-full">
  <main class="overflow-y-scroll h-full bg-gray-100 p-8 text-center">
    <p>Balance</p>

    <p>Transactions 1</p>
    <p>Transactions 2</p>
    <p>Transactions 3</p>
  </main>

  <footer class="flex p-4">footer area</footer>
</div>
