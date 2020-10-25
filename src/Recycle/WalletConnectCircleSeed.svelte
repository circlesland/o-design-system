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

  <footer class="p-4 border-t border-gray-300">
    <div>
      <p class="text-gray-700 text-xs uppercase mb-1">
        Enter seedphrase to recover
      </p>
      <textarea
        placeholder="word1 word2 word3 word4 .... word23 word24"
        class="text-primary border rounded border-gray-300 w-full h-24 p-2 mb-2 bg-transparent" />
    </div>
    <div class="flex">
      <Route dapp={o.WALLET} route="safe" cssClass="mr-4">
        <button class="w-full bg-gray-300 text-primary">Store Local</button>
      </Route>
      <Route dapp={o.WALLET} route="safe">
        <button class="w-full">Save with Textile</button>
      </Route>
    </div>
  </footer>
</div>

<!-- 
<div class="box border rounded flex flex-col shadow bg-white">
  <div class="box__title bg-grey-lighter px-3 py-2 border-b">
    <h3 class="text-sm  text-primary font-medium">
      Please save your Seedphrase*
    </h3>
  </div>
  <textarea
    placeholder="word1 word2 word3 word4 .... word23 word24"
    class="text-primary flex-1 p-2 m-1 bg-transparent" />
</div>
<button class="mt-2" on:click={() => navigateTo('mail')}>Send login mail</button>
<p class="text-xs mt-2 text-gray-500">
  *Your seedphrase is like you password, please write it down and store it
  somewhere save. When you lose your seedphrase you will never be able to login
  or recover your Circles Account
</p> -->
