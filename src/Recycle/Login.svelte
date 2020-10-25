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
    var result = await window.o.session.signIn(email);
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
    <main class="overflow-y-scroll h-full bg-gray-100 p-8">
      <h1 class="text-primary text-3xl font-bold pb-2">Login</h1>
    </main>
    <footer class="p-4 ">
      <h3 class="text-sm text-primary font-medium">Please enter your email</h3>
      <div class="mb-4 box border rounded flex flex-col bg-white">
        <input
          bind:value={email}
          placeholder="f.e. omo@sapien.org"
          class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" />
        {#if errorMessage}
          <p style="color:red">{errorMessage}</p>
        {/if}
      </div>
      <div class="w-full" on:click={signIn}>Send login mail</div>

      {#if register}
        <Route dapp={o.DENTITY} route="intro">
          <button class="w-full">Register new Account</button>
        </Route>
      {/if}
    </footer>
  </div>
{:else}
  <Mail />
{/if}
