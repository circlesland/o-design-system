<script lang="ts">
  import { o, Router } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";
  import Mail from "./Mail.svelte";

  let email: string;
  let errorMessage = "";
  let register = false;
  let loggingIn = false;

  async function signIn() {
    loggingIn = true;
    var result = await window.o.session.signIn(email.toLowerCase());
    if (result.error) {
      errorMessage = result.error.message;
      if (result.error.code == 5) register = true;
      loggingIn = false;
    } else {
      Router.page.base(`/ipns/${o.DENTITY}`);
      Router.page(`dapps`);
    }
  }
</script>

{#if !loggingIn}
  <style>
    .grid {
      display: grid;
      grid-template-rows: 1fr auto;
      position: relative;
    }
  </style>
  <div class="grid h-full">
    <main class="h-full overflow-y-scroll text-center bg-gray-100">
      {#if errorMessage}
        <p class="omo-error">{errorMessage}</p>
      {/if}
      <div class="p-8">
        <h1 class="text-3xl text-center font-title text-primary">Login</h1>
        <p class="py-4 text-sm text-center text-gray-700">Lorem Ipsum</p>
      </div>
    </main>
    <footer class="p-4 border-t border-gray-300">
      <p class="mb-1 text-xs text-gray-700 uppercase">
        Please enter your email
      </p>
      <div class="flex flex-col mb-4 bg-white border rounded box">
        <input
          bind:value={email}
          placeholder="f.e. omo@sapien.org"
          class="flex-1 p-2 m-1 bg-transparent text-grey-darkest" />
      </div>
      <div class="flex">
        {#if register}
          <Route dapp={o.DENTITY} route="intro" cssClass="mr-4">
            <button class="w-full bg-gray-300 text-primary">Register New</button>
          </Route>
        {/if}
        <button class="w-full" on:click={signIn}>Send Login Mail</button>
      </div>
    </footer>
  </div>
{:else}
  <Mail />
{/if}
