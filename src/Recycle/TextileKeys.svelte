<script lang="ts">
  import { o } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";

  let keys = [
    {
      name: "Key 1",
    },
  ];
</script>

<style>
  .grid {
    display: grid;
    grid-template-rows: 1fr auto;
    position: relative;
  }
</style>

<div class="grid h-full">
  <main class="h-full py-2 overflow-y-scroll bg-gray-100">
    {#each keys as item}
      <div class="mx-4 my-2">
        <div class="flex w-full bg-white border border-gray-300 rounded">
          {item.name}
          <!-- <div><img style="height:56px" src={f.image} alt={f.name} /></div>
          <div class="flex-1 px-4 py-2 text-base">
            <b class="text-primary">{f.name}</b>
            <p class="-mt-1 text-xs text-gray-500">
              trusts:
              {item.trusts}
              -- trusted:
              {f.trusted}
            </p>
          </div>
          <div class="h-12 px-3 py-1 text-3xl text-primary">Add</div> -->
        </div>
      </div>
    {/each}
  </main>
  <footer
    class="flex justify-between px-4 pt-3 pb-2 text-gray-400 bg-white border-t border-gray-300">
    <div
      class="flex items-center justify-center px-4 text-xs text-center text-primary">
      <Route dapp={o.TEXTILE} route="threads">
        <div>
          <i class="text-2xl fas fa-boxes" />
          <p>Threads</p>
        </div>
      </Route>
    </div>
    <div
      class="flex items-center justify-center px-4 text-xs text-center text-primary">
      <Route dapp={o.TEXTILE} route="keys">
        <div>
          <i class="text-2xl fas fa-key" />
          <p>Keys</p>
        </div>
      </Route>
    </div>
    <div class="flex items-center justify-center px-4 text-xs text-center">
      <!-- <Route dapp={o.WALLET} route=""> -->
      <div>
        <i class="text-2xl fas fa-plus" />
        <p>soon</p>
      </div>
      <!-- </Route> -->
    </div>
    <div
      class="flex items-center justify-center px-4 text-xs text-center text-primary">
      <Route dapp={o.TEXTILE} route="index">
        <div>
          <i class="text-2xl fas fa-universal-access" />
          <p>Accounts</p>
        </div>
      </Route>
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
