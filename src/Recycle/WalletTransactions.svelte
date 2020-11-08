<script lang="ts">
  import {o} from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";
  import {CirclesHub} from "@omoearth/o-circles-protocol/src/circles/circlesHub";
  import Web3 from "web3";
  import {Person} from "@omoearth/o-circles-protocol/src/model/person";
  import Web3Provider from "./Web3Provider.svelte";

  let web3: Web3;

  let viewModel = {
    circlesBalance: "loading ..",
    ethBalance: "loading ..",
    transactions:[],
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
  }

  async function reload() {
    const balance = await person.getBalance();
    const balanceString = web3.utils.fromWei(balance, "ether");
    const dot = balanceString.indexOf(".");
    viewModel.circlesBalance = balanceString.slice(0, dot + 3);

    const incomingTransactions =  await person.getIncomingTransactions();
    const outgoingTransactions =  await person.getOutgoingTransactions();
    const allTransactions = incomingTransactions.concat(outgoingTransactions);
    allTransactions.sort((a,b) => -(a.blockNo.cmp(b.blockNo)));
    viewModel.transactions = allTransactions;
  }

  $: {
    if (person)
      reload();
  }

  // TODO: Lock controls until the dependency is available
  function onWeb3(event:{detail:{web3:Web3}}) {
    web3 = event.detail.web3;

    if (!web3)
      return;

    init();
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: relative;
  }
  .saldo {
    @apply text-red-500;
  }
</style>

<Web3Provider on:initialized={onWeb3}/>

<div class="grid h-full">
  <div
    class="flex items-center justify-center mx-4 mt-4 mb-2 text-5xl font-bold text-center text-white border border-gray-200 rounded bg-primary">
    <p class="py-12 text-gray-100 uppercase font-title">{viewModel.circlesBalance} ø</p>
  </div>
  <main class="h-full overflow-y-scroll bg-gray-100">
    {#each viewModel.transactions as t}
      <div class="mx-4 mb-2">
        <div class="flex w-full bg-white border border-gray-300 rounded">
          <div class="flex-1 px-4 py-2 text-base">
            <b class="text-primary">{t.direction === "in" ? "Incoming" : "Outgoing"} {t.subject}</b>
            <p class="-mt-1 text-xs text-gray-500">
              {t.createdAt}
              ago from
              {t.from}
            </p>
          </div>
          <div
            class="h-12 px-3 py-1 text-3xl text-green-500"
            class:saldo={t.amount < 0}>
            {t.amount}
          </div>
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
