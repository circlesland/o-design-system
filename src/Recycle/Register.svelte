<script lang="ts">
  import { o, Router } from "@omoearth/o-types";
  import Mail from "../Recycle/Mail.svelte";
  let signingUp = false;
  let username = "";
  let email = "";
  let errorMessage = "";

  async function signUp() {
    signingUp = true;
    var result = await window.o.session.signInOrSignUp(email, username);
    if (result.error) {
      errorMessage = result.error.message;
      signingUp = false;
    } else {
      Router.page.base(`/ipns/${o.DENTITY}`);
      Router.page(`dapps`);
    }
  }
</script>

{#if !signingUp}
  <style>
    .grid {
      display: grid;
      grid-template-rows: 1fr auto;
      position: relative;
    }
  </style>
  <div class="grid h-full">
    <main class="h-full p-8 overflow-y-scroll bg-gray-100">
      <h1 class="text-3xl text-center font-title text-primary">Signup</h1>
      <p class="py-4 text-sm text-center text-gray-700">
        signup and create your privately encrypted data, (d)app and file storage
        with textile
        <br />(up to 1GB free storage)
        <br /><br />
        <span class="text-xs text-gray-500">
          *decentralized DID signup without email coming soon</span>
      </p>
    </main>
    <footer class="p-4">
      <h3 class="text-sm font-medium text-primary">Please choose username</h3>
      <div class="flex flex-col mb-2 bg-white border rounded box">
        <input
          bind:value={username}
          placeholder="f.e. mamaomo"
          class="flex-1 p-2 m-1 bg-transparent text-grey-darkest" />
      </div>

      <h3 class="text-sm font-medium text-primary">Please enter your email</h3>
      <div class="flex flex-col mb-2 bg-white border rounded box">
        <input
          bind:value={email}
          placeholder="f.e. omo@sapien.org"
          class="flex-1 p-2 m-1 bg-transparent text-grey-darkest" />
        {#if errorMessage}
          <p style="color:red">{errorMessage}</p>
        {/if}
      </div>

      <div on:click={signUp} class="w-full mb-2">
        <div class="w-full text-center text-primary">
          <span
            class="px-4 py-2 bg-gray-100 border border-gray-400 rounded">Send
            register mail</span>
        </div>
      </div>
      <button class="w-full text-gray-500 bg-gray-300">Sign up with Metamask
        (coming soon)</button>
    </footer>
  </div>
{:else}
  <Mail />
{/if}

<!-- <h1 class="pb-2 text-3xl font-bold text-primary">Register</h1>
<div class="col sm:w-1/2">
  <p class="mb-4 text-lg text-primary">
    Your new GnosisSafe Address:
    <br />0xai7s6drtf8aubwl3diugasdo8fuga329
  </p>
  <div class="flex flex-col bg-white border rounded shadow box">
    <div class="px-3 py-2 border-b box__title bg-grey-lighter">
      <h3 class="text-sm font-medium text-primary">
        Please save your Seedphrase*
      </h3>
    </div>
    <textarea
      placeholder="word1 word2 word3 word4 .... word23 word24"
      class="flex-1 p-2 m-1 bg-transparent text-primary" />
  </div>
  <button class="mt-2" on:click={() => navigateTo('mail')}>Send login mail</button>
  <p class="mt-2 text-xs text-gray-500">
    *Your seedphrase is like you password, please write it down and store it
    somewhere save. When you lose your seedphrase you will never be able to
    login or recover your Circles Account
  </p>
</div> -->
