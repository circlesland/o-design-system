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
      <p class="p-1 text-gray-700">Choose your Home Provider</p>
      <div class="flex mb-4 ">
        <div
          class="w-20 h-20 p-4 mr-4 bg-gray-100 border border-gray-300 rounded-lg">
          <img src="/images/textile.png" alt="textile" />
        </div>
        <div
          class="w-20 h-20 p-3 mr-4 text-xs text-center text-gray-500 bg-gray-100 rounded-lg">
          other (coming soon)
        </div>
        <div
          class="w-20 h-20 p-3 mr-4 text-xs text-center text-gray-500 bg-gray-100 rounded-lg">
          download (coming soon)
        </div>
      </div>
      <p
        class="p-2 mb-4 text-gray-600 bg-gray-100 border border-gray-300 rounded-lg">
        https://hub.textile.io
        <!-- {addrGatewayUrl} -->
      </p>
    </div>
    <Route dapp={o.DENTITY} route="register">
      <button class="w-full">Set provider</button>
    </Route>
  </footer>
</div>
