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
  <main class="overflow-y-scroll h-full bg-gray-100 p-8 text-center">
    <h1 class="text-center text-3xl font-title text-primary">
      Send Login Mail
    </h1>
    <p class="text-sm py-4 text-center text-gray-700">
      Your new house is being build, please check your email to open your new
      home.
      <br /><br />
      <span class="text-xs text-gray-500">*to login, click on the link in your
        email. The link will open a new browser tab, which will authenticate
        your email by your hosting provider textile. Then close the textile
        browser tab again and you will be logged in here.</span>
    </p>
  </main>
</div>
