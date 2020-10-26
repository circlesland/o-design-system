<script lang="ts">
  import { o, Router } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";

  if (!window.o.session.hasSession) Router.page("login");
  let user = window.o.session.getUser();
</script>

<style>
  .grid {
    display: grid;
    grid-template-rows: 1fr auto;
    position: relative;
  }
</style>

<div class="grid h-full">
  <main class="h-full overflow-y-scroll bg-gray-100">
    <div
      class="flex justify-center mx-4 mt-4 mb-2 text-4xl font-bold text-center text-white border border-gray-200 rounded bg-primary">
      <div>
        {#if user}
          <img
            src={user.img}
            class="w-32 h-32 mx-auto mt-6 border-4 border-white rounded-full"
            alt="name" />
          <p class="py-6 text-lg text-gray-100 uppercase font-title">
            {#if user.username}{user.username}{:else}{user.email}{/if}
          </p>
        {/if}
      </div>
    </div>
    <div class="flex flex-wrap mx-2">
      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-8 text-center text-gray-800 bg-white border border-gray-200 rounded">
          <Route dapp={o.DENTITY} route="odentity">
            <div class="text-primary">
              <i class="text-5xl fas fa-user-astronaut" />
              <p class="pt-3">°Identity</p>
            </div>
          </Route>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-6 text-center text-gray-800 bg-white border border-gray-200 rounded">
          <Route dapp={o.WALLET} route="index">
            <div class="text-primary">
              <i class="text-5xl fas fa-piggy-bank" />
              <p class="pt-3">°Wallet</p>
            </div>
          </Route>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-8 text-center text-gray-800 bg-white border border-gray-200 rounded">
          <Route dapp={o.FRIENDS} route="index">
            <div class="text-primary">
              <i class="text-5xl fas fa-address-book" />
              <p class="pt-3">°Friends</p>
            </div>
          </Route>
        </div>
      </div>

      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-6 text-center text-gray-400 bg-white border border-gray-200 rounded">
          <div class="text-gray-500">
            <i class="text-5xl fas fa-comments" />
            <p class="pt-3">°Talk</p>
            <span class="text-xs">(coming soon)</span>
          </div>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-6 text-center text-gray-400 bg-white border border-gray-200 rounded">
          <div class="text-gray-500">
            <i class="text-5xl fas fa-store" />
            <p class="pt-3">°Market</p>
            <span class="text-xs">(coming 2021)</span>
          </div>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-6 text-center text-gray-400 bg-white border border-gray-200 rounded">
          <div class="text-gray-500">
            <i class="text-5xl fas fa-user-friends" />
            <p class="pt-3">°Teams</p>
            <span class="text-xs">(coming 2021)</span>
          </div>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-6 text-center text-gray-400 bg-white border border-gray-200 rounded">
          <div class="text-gray-500">
            <i class="text-5xl fas fa-film" />
            <p class="pt-3">°Movies</p>
            <span class="text-xs">(coming 2021)</span>
          </div>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-6 text-center text-gray-400 bg-white border border-gray-200 rounded">
          <div class="text-gray-500">
            <i class="text-5xl fas fa-headphones" />
            <p class="pt-3">°Music</p>
            <span class="text-xs">(coming 2021)</span>
          </div>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-6 text-center text-gray-400 bg-white border border-gray-200 rounded">
          <div class="text-gray-500">
            <i class="text-5xl fas fa-book" />
            <p class="pt-3">°Books</p>
            <span class="text-xs">(coming 2021)</span>
          </div>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div
          class="flex items-center justify-center h-48 p-6 text-center text-gray-400 bg-white border border-gray-200 rounded">
          <div class="text-gray-500">
            <i class="text-5xl fas fa-file-alt" />
            <p class="pt-3">°Files</p>
            <span class="text-xs">(coming 2021)</span>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer
    class="flex justify-between px-4 pt-3 pb-2 text-gray-400 bg-white border-t border-gray-300">
    <div class="flex items-center justify-center px-4 text-xs text-center">
      <div>
        <i class="text-2xl fas fa-piggy-bank" />
        <p>soon</p>
      </div>
    </div>
    <div class="flex items-center justify-center px-4 text-xs text-center">
      <div>
        <i class="text-2xl fas fa-store" />
        <p>soon</p>
      </div>
    </div>
    <div class="flex items-center justify-center px-4 text-xs text-center">
      <div>
        <i class="text-2xl fas fa-plus" />
        <p>soon</p>
      </div>
    </div>
    <div class="flex items-center justify-center px-4 text-xs text-center">
      <div>
        <i class="text-2xl fas fa-comments" />
        <p>soon</p>
      </div>
    </div>
    <div
      class="flex items-center justify-center px-4 text-xs text-center text-primary">
      <Route dapp={o.DENTITY} route="dapps">
        <div>
          <i class="text-2xl fas fa-user-circle" />
          <p>Home</p>
        </div>
      </Route>
    </div>
  </footer>
</div>
