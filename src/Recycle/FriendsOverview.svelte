<script lang="ts">
  import { o } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";

  let friends = [
    {
      name: "Jonas Dorsch",
      trusts: 42,
      trusted: 15,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Julia Erin",
      trusts: 3,
      trusted: 24,
      image: "https://randomuser.me/api/portraits/women/76.jpg",
    },
    {
      name: "Elsa Kubitch",
      trusts: 3,
      trusted: 24,
      image: "https://randomuser.me/api/portraits/women/64.jpg",
    },
    {
      name: "Darius Elf",
      trusts: 45,
      trusted: 64,
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      name: "Lena Larou",
      trusts: 341,
      trusted: 224,
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      name: "Erik Papadopolus",
      trusts: 4,
      trusted: 0,
      image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
      name: "Nina Wacker",
      trusts: 8,
      trusted: 2,
      image: "https://randomuser.me/api/portraits/women/34.jpg",
    },
    {
      name: "Janina Zopf",
      trusts: 31,
      trusted: 22,
      image: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    {
      name: "Jonas Feucht",
      trusts: 15,
      trusted: 74,
      image: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      name: "Doris Mensch",
      trusts: 83,
      trusted: 12,
      image: "https://randomuser.me/api/portraits/women/98.jpg",
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
    {#each friends as f}
      <div class="mx-4 my-2">
        <div class="flex w-full bg-white border border-gray-300 rounded">
          <div><img style="height:56px" src={f.image} alt={f.name} /></div>
          <div class="flex-1 px-4 py-2 text-base">
            <b class="text-primary">{f.name}</b>
            <p class="-mt-1 text-xs text-gray-500">
              trusts:
              {f.trusts}
              -- trusted:
              {f.trusted}
            </p>
          </div>
          <div class="h-12 px-3 py-1 text-3xl text-primary">Add</div>
        </div>
      </div>
    {/each}
  </main>
  <footer
    class="flex justify-between px-4 pt-3 pb-2 text-gray-400 bg-white border-t border-gray-300">
    <div class="flex items-center justify-center px-4 text-xs text-center">
      <!-- <Route dapp={o.WALLET} route="safes"> -->
      <div>
        <i class="text-2xl fas fa-globe-africa" />
        <p>soon</p>
      </div>
      <!-- </Route> -->
    </div>
    <div class="flex items-center justify-center px-4 text-xs text-center">
      <!-- <Route dapp={o.WALLET} route="token"> -->
      <div>
        <i class="text-2xl fas fa-globe-africa" />
        <p>soon</p>
      </div>
      <!-- </Route> -->
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
      <Route dapp={o.FRIENDS} route="overview">
        <div>
          <i class="text-2xl fas fa-user-friends" />
          <p>Friends</p>
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
