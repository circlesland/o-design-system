<script lang="ts">
  import {o, Router} from "@omoearth/o-types";
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
  <main class="h-full p-8 overflow-y-scroll text-center bg-gray-100">
    <h1 class="text-3xl text-center font-title text-primary">Intro Slide</h1>
    <p class="py-4 text-sm text-center text-gray-700">Explain More About Omo</p>
  </main>

  <footer class="flex p-4 border-t border-gray-300">
    <Route dapp={o.DENTITY} route="install" cssClass="w-full">
      <button class="w-full">Next</button>
    </Route>
  </footer>
</div>
