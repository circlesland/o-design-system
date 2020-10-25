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
    <h1 class="text-center text-3xl font-title text-primary">
      Connect Circle Seed
    </h1>
    <p class="text-sm py-4 text-center text-gray-700">
      Store with textile or only in localstore
    </p>
  </main>

  <footer class="flex p-4 border-t border-gray-300">
    <Route dapp={o.WALLET} route="safe" cssClass="mr-4">
      <button class="w-full bg-gray-300 text-primary">Store Local</button>
    </Route>
    <Route dapp={o.WALLET} route="safe">
      <button class="w-full">Save with Textile</button>
    </Route>
  </footer>
</div>
