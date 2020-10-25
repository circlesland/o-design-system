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
  <main class="overflow-y-scroll h-full bg-gray-100 p-8">
    <h1 class="text-primary text-3xl font-bold pb-2">Login</h1>
  </main>
  <footer class="p-4 ">
    <h3 class="text-sm text-primary font-medium">Please enter your email</h3>
    <div class="mb-4 box border rounded flex flex-col bg-white">
      <input
        placeholder="f.e. omo@sapien.org"
        class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" />
    </div>
    <Route dapp={o.DENTITY} route="dapps" cssClass="w-full">
      Send login mail
    </Route>
  </footer>
</div>
