<script lang="ts">
  import { o, Router } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";
  async function logout() {
    await window.o.session.logout();
    Router.page(`login`);
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
  <main class="overflow-y-scroll h-full bg-gray-100 p-8 text-gray-800">
    <p class="text-xs text-gray-500">Profile</p>
    <p class="py-1">first name</p>
    <br />
    <p class="py-1">last name</p>
    <br />
    <p class="py-1">profile image</p>
    <br />
    <p class="py-1">public profile?</p>
    <br />
    <p class="text-xs text-gray-500">Authentication Agents</p>
    <p class="py-1">email</p>
    <br />
    <p class="py-1">Metamask (coming soon)</p>
    <br />
    <p class="text-xs text-gray-500">Settings</p>
    <p class="py-1">data store hub</p>
    <br />
    <p class="py-1">subscribe notifications</p>
    <br />
    <button on:click={logout}>logout</button>
  </main>

  <footer class="flex p-4">
    <Route dapp={o.DENTITY} route="dapps">
      <div class="w-full text-center text-primary">
        <span
          class="bg-gray-100 border border-gray-400 px-4 py-2 rounded">back</span>
      </div>
    </Route>
  </footer>
</div>
