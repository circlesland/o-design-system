<script lang="ts">
  import { o } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";

  let token = [
    {
      token: "Samuel",
      amount: 442,
      trusted: 27,
    },
    {
      token: "Mela",
      amount: 152,
      trusted: 18,
    },
    {
      token: "Julia",
      amount: 127,
      trusted: 15,
    },
    {
      token: "Elsa",
      amount: 102,
      trusted: 12,
    },
    {
      token: "Felix",
      amount: 95,
      trusted: 12,
    },
    {
      token: "Daniel",
      amount: 84,
      trusted: 7,
    },
    {
      token: "Bobo",
      amount: 60,
      trusted: 16,
    },
    {
      token: "Chidi",
      amount: 14,
      trusted: 23,
    },
    {
      token: "Lolo",
      amount: 2,
      trusted: 5,
    },
  ];
</script>

<style>
  .grid {
    display: grid;
    grid-template-rows: 1fr auto;
    position: relative;
  }
  .saldo {
    @apply text-red-500;
  }
</style>

<div class="grid h-full">
  <main class="h-full overflow-y-scroll bg-gray-100">
    <div
      class="flex items-center justify-center mx-4 mt-4 mb-2 text-5xl font-bold text-center text-white border border-gray-200 rounded bg-primary">
      <p class="py-12 text-gray-100 uppercase font-title">672 ø</p>
    </div>
    {#each token as t}
      <div class="mx-4 mb-2">
        <div class="flex w-full bg-white border border-gray-300 rounded">
          <div class="flex-1 px-4 py-2 text-base">
            <b class="text-primary">{t.token}</b>
            <p class="-mt-1 text-xs text-gray-500">
              {t.trusted}x trusted

              <!-- {moment.unix(item.time).locale('en').fromNow()} -->
            </p>
          </div>
          <div class="h-12 px-3 py-1 text-3xl text-primary">{t.amount}</div>
        </div>
      </div>
    {/each}
  </main>

  <footer
    class="flex justify-between px-4 pt-3 pb-2 text-gray-400 bg-white border-t border-gray-300">
    <div
      class="flex items-center justify-center px-4 text-xs text-center text-primary">
      <Route dapp={o.WALLET} route="safes">
        <div>
          <i class="text-2xl fas fa-piggy-bank" />
          <p>Accounts</p>
        </div>
      </Route>
    </div>
    <div
      class="flex items-center justify-center px-4 text-xs text-center text-primary">
      <Route dapp={o.WALLET} route="token">
        <div>
          <i class="text-2xl fas fa-coin" />
          <p>Token</p>
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
      <Route dapp={o.WALLET} route="transactions">
        <div>
          <i class="text-2xl fas fa-exchange-alt" />
          <p>Transfers</p>
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
