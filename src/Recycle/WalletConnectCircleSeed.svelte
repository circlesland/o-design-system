<script lang="ts">
import Web3 from "web3";
import {o, Router} from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";
  import {mnemonicToEntropy} from "bip39";
  import Web3Provider from "./Web3Provider.svelte";

  let seedphrase: string;
  let safeAddress: string;
  let web3: Web3;

  function storeInputAndContinue()
  {
    if (!web3)
      throw new Error("The 'web3' property has no value.");

    const privateKey = mnemonicToEntropy(seedphrase);
    const ownerAddress = web3.eth.accounts.privateKeyToAccount(privateKey);
    localStorage.setItem("omo.privateKey", privateKey);
    localStorage.setItem("omo.address", ownerAddress.address);
    localStorage.setItem("omo.safeAddress", safeAddress);

    Router.navigateTo(o.WALLET, "transactions");
  }

  // TODO: Lock controls until the dependency is available
  function onWeb3(event:{detail:{web3:Web3}}) {
    web3 = event.detail.web3;
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-rows: 1fr auto;
    position: relative;
  }
</style>
<Web3Provider on:initialized={onWeb3}/>
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
      <input
        placeholder="Your safe address"
        class="text-primary border rounded border-gray-300 w-full h-24 p-2 mb-2 bg-transparent"
        bind:value={safeAddress}/>
    </div>
    <div>
      <p class="text-gray-700 text-xs uppercase mb-1">
        Enter seedphrase to recover
      </p>
      <textarea
        placeholder="word1 word2 word3 word4 .... word23 word24"
        class="text-primary border rounded border-gray-300 w-full h-24 p-2 mb-2 bg-transparent"
        bind:value={seedphrase}/>
    </div>
    <div class="flex">
      <!-- TODO: HOW TO GET THE SAFE? -->
      <button class="w-full bg-gray-300 text-primary" on:click={() => storeInputAndContinue("SAFEADDRESS")}>Store Local</button>
      <!--<Route dapp={o.WALLET} route="transactions" cssClass="mr-4">
        <button class="w-full bg-gray-300 text-primary" onclick="storeLocal()">Store Local</button>
      </Route>-->
      <!-- TODO: SAFE WITHIN TEXTILE? -->
      <Route dapp={o.WALLET} route="transactions">
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
