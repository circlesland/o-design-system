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
      Upload profile image
    </h1>
    <p class="text-sm py-4 text-center text-gray-700">
      You can even hide images in your new home
    </p>
  </main>

  <footer class="p-4">
    <div
      class="w-full bg-gray-300 border text-gray-700 border-gray-300 rounded text-center p-16 mb-4">
      Dropzone / Choose image
      <br />(maybe use filepond)
    </div>
    <Route dapp={o.DENTITY} route="dapps">
      <button class="w-full">Save Image</button>
    </Route>
  </footer>
</div>
