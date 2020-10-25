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
    <h1 class="text-center text-3xl font-title text-primary">Intro Slide</h1>
    <p class="text-sm py-4 text-center text-gray-700">Explain More About Omo</p>
  </main>

  <footer class="flex p-4">
    <Route dapp={o.DENTITY} route="install" cssClass="w-full">Next</Route>
  </footer>
</div>
