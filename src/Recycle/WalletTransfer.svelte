<script lang="ts">
  import {o} from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";
  import {CirclesHub} from "@omoearth/o-circles-protocol/src/circles/circlesHub";
  import Web3 from "web3";
  import {BN} from "ethereumjs-util";
  import {Person} from "@omoearth/o-circles-protocol/src/model/person";
  import {Account} from "@omoearth/o-circles-protocol/src/interfaces/account";
  import Web3Provider from "./Web3Provider.svelte";
  import {GnosisSafeProxy} from "@omoearth/o-circles-protocol/src/safe/gnosisSafeProxy";
  import {entropyToMnemonic} from "bip39";

  let web3: Web3;

  let viewModel = {
    circlesBalance: "loading ..",
    receiver: "Choose",
    amount: "0.00"
  }

  let person: Person;
  let safe: GnosisSafeProxy;

  function init()
  {
    if (!web3)
      throw new Error("The 'web3' property has no value.");

    const hubAddress = "0x29b9a7fBb8995b2423a71cC17cf9810798F6C543";
    const circlesHub = new CirclesHub(web3, hubAddress);
    const safeAddress = localStorage.getItem("omo.safeAddress");
    const ownerAddress = localStorage.getItem("omo.address");

    safe = new GnosisSafeProxy(web3, ownerAddress, safeAddress);
    person = new Person(circlesHub, safeAddress);

    reload();
  }

  async function reload() {
    const balance = await person.getBalance();
    const balanceString = web3.utils.fromWei(balance, "ether");
    const dot = balanceString.indexOf(".");
    viewModel.circlesBalance = balanceString.slice(0, dot + 3);
  }

  async function send() {
    const account:Account = {
      address: safe.creatorAddress,
      privateKey: "0x" + localStorage.getItem("omo.privateKey")
    };

    const ownToken = await person.getOwnToken();
    const wei = web3.utils.toWei(viewModel.amount.toString(), "ether");
    const receipt = await ownToken.transfer(account, safe, viewModel.receiver, new BN(wei.toString()));
    console.log(receipt);
  }

  async function getUBI() {
    const account:Account = {
      address: safe.creatorAddress,
      privateKey: "0x" + localStorage.getItem("omo.privateKey")
    };
    const receipt = await person.getUBI(account, safe);
    console.log(receipt);
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
  <button on:click={() => getUBI()}>Get UBI</button>
  <div
    class="flex items-center justify-center mx-4 mt-4 mb-2 text-5xl font-bold text-center text-white border border-gray-200 rounded bg-primary">
    <p class="py-12 text-gray-100 uppercase font-title">{viewModel.circlesBalance} ø</p>
  </div>
  <main class="h-full overflow-y-scroll bg-gray-100">
    Receiver:<br/>
    <input type="text" placeholder="Recipient address" bind:value={viewModel.receiver} /><br/>
    Amount:<br/>
    <input type="number" placeholder="Amount" bind:value={viewModel.amount} /><br/>
    <button on:click={() => send()}>Send</button>
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
