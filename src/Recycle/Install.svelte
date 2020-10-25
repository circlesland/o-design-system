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
  <main class="h-full p-8 overflow-y-scroll text-center bg-gray-100">
    <h1 class="text-3xl text-center font-title text-primary">Build Home</h1>
    <p class="py-4 text-sm text-center text-gray-700">
      Explain installation of your new home
      <br /><br />
      <span class="text-xs text-gray-500">*during alpha test phase only remote
        textile hosting partner. More options coming soon, including offline
        first storage, filecoin backups and metamask authentication</span>
    </p>
  </main>

  <footer class="p-4">
    <div>
      <!-- <form method="POST" onsubmit="return false;"> -->
      <p class="p-1 text-gray-700">Choose your home provider</p>
      <div class="flex">
        <div
          class="w-20 h-20 p-4 mr-1 bg-gray-100 bg-gray-200 border border-gray-300 rounded-lg">
          <img src="images/textile.png" />
        </div>
        <div
          class="w-20 h-20 p-3 mr-1 text-xs text-center text-gray-500 bg-gray-100 rounded-lg">
          other (coming soon)
        </div>
        <div
          class="w-20 h-20 p-3 mr-1 text-xs text-center text-gray-500 bg-gray-100 rounded-lg">
          download (coming soon)
        </div>
      </div>
      <p
        class="p-2 mt-2 text-gray-600 bg-gray-100 border border-gray-300 rounded-lg">
        https://hub.textile.io
        <!-- {addrGatewayUrl} -->
      </p>

      <!-- <p class="p-1 text-gray-700">Anmelden</p>
      <div
        class="w-full px-2 pt-1 mb-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none">
        <label
          for="email"
          class="block text-xs font-medium text-gray-600">Email</label>

        <input
          type="text"
          name="email"
          class="w-full text-xl text-gray-700 bg-gray-200 border border-transparent rounded-lg  focus:outline-none"
          bind:value={login} />
      </div>
      <div
        class="w-full p-3 font-bold text-center text-white uppercase rounded-lg bg-primary"
        on:click={() => signInOrSignUpAsync()}>
        Omo Haus öffne dich
      </div> -->
      <!-- </form> -->
    </div>
    <Route dapp={o.DENTITY} route="register">
      <button class="w-full">Set provider</button>
    </Route>
  </footer>
</div>
