<script lang="ts">
  import { o, Router } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";

  if (window.o.session.hasSession) {
    Router.page.base(`${window.location.origin}/ipns/${o.DENTITY}`);
    Router.page(`dapps`);
  }
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
    <h1 class="text-3xl text-center font-title text-primary">
      Willkommen,
      <br />auf Omo Earth
    </h1>
    <p class="py-4 text-sm text-center text-gray-700">
      Die Menschen auf Omo Earth nennen sich Omo Sapiens. Jeder Omo entwickelt
      und kontrolliert 100% seiner eigenen Daten und Apps und speichert diese in
      seinem privaten Omo Haus. Um als Omo Sapien dein Haus zu öffnen oder ein
      neues Omo Sapien Haus zu bauen, melde dich unten an.
    </p>
  </main>
  <footer class="flex p-4">
    <Route dapp={o.DENTITY} route="login" cssClass="mr-4">
      <button class="w-full">Login</button>
    </Route>
    <Route dapp={o.DENTITY} route="intro">
      <button class="w-full">Register</button>
    </Route>
  </footer>
</div>
