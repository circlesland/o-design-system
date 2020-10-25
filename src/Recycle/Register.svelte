<script lang="ts">
  import { o, Router } from "@omoearth/o-types";
  import Mail from "../Recycle/Mail.svelte";
  let signingUp = false;
  let username = "";
  let email = "";
  let errorMessage = "";

  async function signUp() {
    signingUp = true;
    var result = await window.o.session.signInOrSignUp(email,username);
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
    <main class="overflow-y-scroll h-full bg-gray-100 p-8">
      <h1 class="text-center text-3xl font-title text-primary">Signup</h1>
      <p class="text-sm py-4 text-center text-gray-700">
        signup and create your privately encrypted data, (d)app and file storage
        with textile
        <br />(up to 1GB free storage)
        <br /><br />
        <span class="text-xs text-gray-500">
          *decentralized DID signup without email coming soon</span>
      </p>
    </main>
    <footer class="p-4">
   
      <h3 class="text-sm text-primary font-medium">Please choose username</h3>
      <div class="box border rounded flex flex-col bg-white mb-2">
     
        <input
      bind:value={username}
      placeholder="f.e. mamaomo"
      class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" />
      </div>

      <h3 class="text-sm text-primary font-medium">Please enter your email</h3>
      <div class="box border rounded flex flex-col bg-white mb-2">
     
        <input
          bind:value={email}
          placeholder="f.e. omo@sapien.org"
          class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" />
        {#if errorMessage}
          <p style="color:red">{errorMessage}</p>
        {/if}
      </div>

      <div on:click={signUp} class="w-full mb-2">
        <div class="w-full text-center text-primary">
          <span
            class="bg-gray-100 border border-gray-400 px-4 py-2 rounded">Send
            register mail</span>
        </div>
      </div>
      <button class="w-full bg-gray-300 text-gray-500">Sign up with Metamask
        (coming soon)</button>
    </footer>
  </div>
{:else}
  <Mail />
{/if}

<!-- <h1 class="text-primary text-3xl font-bold pb-2">Register</h1>
<div class="col sm:w-1/2">
  <p class="text-lg text-primary mb-4">
    Your new GnosisSafe Address:
    <br />0xai7s6drtf8aubwl3diugasdo8fuga329
  </p>
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
    somewhere save. When you lose your seedphrase you will never be able to
    login or recover your Circles Account
  </p>
</div> -->
