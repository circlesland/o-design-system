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
      Willkommen,
      <br />auf Omo Earth
    </h1>
    <p class="text-sm py-4 text-center text-gray-700">
      Die Menschen auf Omo Earth nennen sich Omo Sapiens. Jeder Omo entwickelt
      und kontrolliert 100% seiner eigenen Daten und Apps und speichert diese in
      seinem privaten Omo Haus. Um als Omo Sapien dein Haus zu öffnen oder ein
      neues Omo Sapien Haus zu bauen, melde dich unten an.
    </p>
  </main>
  <footer class="flex p-4">
    <Route dapp={o.DENTITY} route="login">
      <button class="w-full">Login</button>
    </Route>
    <Route dapp={o.DENTITY} route="intro">
      <button class="w-full">Register</button>
    </Route>
  </footer>
</div>
