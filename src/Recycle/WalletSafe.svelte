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
  <main class="overflow-y-scroll h-full bg-gray-100 text-center">
    <div
      class="text-white mx-4 mt-4 mb-2 border-gray-200 border flex items-center justify-center text-4xl font-bold text-center bg-primary rounded">
      <p class="font-title text-gray-100 py-12 uppercase">672 ø</p>
    </div>

    <!-- <div class="font-title text-tertiary text-xl">Transaction History</div>
    {#each $transactions as transaction}
      <div class="flex h-14 w-full text-secondary border-b border-gray-100">
        <div class="w-12 h-12 flex flex-col justify-center text-center">
          <i class="text-2xl fas fa-arrow-down" />
        </div>
        <div class="text-base py-2 px-2 flex-1">
          <b class="text-secondary font-title">{transaction.subject}</b>
          <p class="text-xs -mt-2 text-gray-500">
            10min ago from {users.byId(transaction.from.id).name} to {users.byId(transaction.to.id).name} -- {transaction.createdAt}
            <!-- {moment.unix(item.time).locale('en').fromNow()}
          </p>
        </div>
        <div class="font-title h-12 py-2 px-3 text-2xl font-bold text-secondary">
          {transaction.amount}
          <!-- {(item.transfer.amount / 1000000000000000000).toFixed(2)} Φ
        </div>
      </div>
    {/each} -->
  </main>

  <footer
    class="pb-2 pt-3 px-4 flex justify-between text-gray-400 bg-white border-t border-gray-300">
    <div class="text-xs px-4 flex items-center text-center justify-center">
      <div>
        <i class="text-2xl fas fa-piggy-bank" />
        <p>soon</p>
      </div>
    </div>
    <div class="text-xs px-4 flex items-center  text-center justify-center">
      <div>
        <i class="text-2xl fas fa-store" />
        <p>soon</p>
      </div>
    </div>
    <div class="text-xs px-4 flex items-center  text-center justify-center">
      <div>
        <i class="text-2xl fas fa-plus" />
        <p>soon</p>
      </div>
    </div>
    <div class="text-xs px-4 flex items-center  text-center justify-center">
      <div>
        <i class="text-2xl fas fa-comments" />
        <p>soon</p>
      </div>
    </div>
    <div
      class="text-xs text-primary px-4 flex items-center  text-center justify-center">
      <Route dapp={o.DENTITY} route="dapps">
        <div>
          <i class="text-2xl fas fa-user-circle" />
          <p>Home</p>
        </div>
      </Route>
    </div>
  </footer>
</div>
