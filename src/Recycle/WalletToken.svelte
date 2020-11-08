<script lang="ts">
  import { o } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";
  import Web3 from "web3";
  import {Person} from "@omoearth/o-circles-protocol/src/model/person";
  import Web3Provider from "./Web3Provider.svelte";
  import {CirclesHub} from "@omoearth/o-circles-protocol/src/circles/circlesHub";
  import {BN} from "ethereumjs-util";

  let web3: Web3;

  let viewModel = {
    tokens:[]
  }

  let person: Person;

  function init()
  {
    if (!web3)
      throw new Error("The 'web3' property has no value.");

    const hubAddress = "0x29b9a7fBb8995b2423a71cC17cf9810798F6C543";
    const circlesHub = new CirclesHub(web3, hubAddress);
    const safeAddress = localStorage.getItem("omo.safeAddress");

    person = new Person(circlesHub, safeAddress);
    reload();
  }

  async function reload() {
    viewModel.tokens = await person.getTokenBalances();
  }

  // TODO: Lock controls until the dependency is available
  function onWeb3(event:{detail:{web3:Web3}}) {
    web3 = event.detail.web3;

    if (!web3)
      return;

    init();
  }

  function formatWei(bn:BN) {
    const str = web3.utils.fromWei(bn, "ether");
    const dot = str.indexOf(".");
    return str.slice(0, dot + 3);
  }
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

<Web3Provider on:initialized={onWeb3}/>
<div class="grid h-full">
  <main class="h-full overflow-y-scroll bg-gray-100">
    <div
      class="flex items-center justify-center mx-4 mt-4 mb-2 text-5xl font-bold text-center text-white border border-gray-200 rounded bg-primary">
      <p class="py-12 text-gray-100 uppercase font-title">672 ø</p>
    </div>
    {#each viewModel.tokens as t}
      <div class="mx-4 mb-2">
        <div class="flex w-full bg-white border border-gray-300 rounded">
          <div class="flex-1 px-4 py-2 text-base">
            <b class="text-primary">{t.token}</b>
            <p class="-mt-1 text-xs text-gray-500">

            </p>
          </div>
          <div class="h-12 px-3 py-1 text-3xl text-primary">{formatWei(t.balance)}</div>
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
