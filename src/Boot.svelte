<script lang="ts">
  import {
    CssGridTemplate,
    Molecule,
  } from "./4-Templates/CssGridTemplate/CssGridTemplate";
  import OmoHead from "./1-Atoms/OmoHead.svelte";

  import * as page from "page";
  import Compositor from "./Compositor/Compositor.svelte";
  import ExampleButtonArray from "./2-Molecules/ExampleButtonArray.svelte";
  import { oRegistry, Router } from "@omoearth/o-types";
  import { Page } from "./Page";

  export let registry: oRegistry;
  let currentPage: Page = null;
  let error = null;
  let title = "";
  $: title = currentPage ? currentPage.title : error ? error : "°os loading";

  Router.page = page;
  if (Router.checkRoute()) {
    page("*", loadContent);
    page({ hashbang: true });
    window.onbeforeunload = function () {
      return false;
    };
  }

  async function loadContent(ctx) {
    console.log("CONTEXT", ctx);
    try {
      let manifest = await Router.getManifestFromRoute(ctx);
      var newPage = Page.deserialize(manifest, registry);
      console.log("NEW PAGE", newPage);
      if (newPage.ui == null || newPage.ui == undefined) {
        console.log("LOAD CONTENT UI undefined");

        error = "Page has no defined UI";
        currentPage = null;
        return;
      }
      error = null;
      currentPage = null;
      setTimeout(() => {
        currentPage = newPage;
      }, 1);
    } catch (e) {
      console.log("LOAD CONTENT ERROR", e);
      error = e.message;
      currentPage = null;
    }
  }
  registry.registerClass(CssGridTemplate);
  registry.registerClass(ExampleButtonArray);
  registry.registerClass(Molecule);
  registry.registerClass(Page);
</script>

<style>
  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .error {
    color: red;
  }
  .loading {
    font-size: 120px;
  }
</style>

<OmoHead {title} />
<div
  class=" bg-white h-screen flex flex-col items-center justify-center bg-grey-lighter bg-cover bg-center"
  style="background-image: url(/images/background.webp)">
  <div
    class="wrap shadow-2xl border border-gray-300 bg-white rounded-lg md:m-12 w-full h-full max-w-md justify-center"
    style="height:700px;position:relative;">
    {#if currentPage}
      <Compositor component={currentPage.ui} {registry} />
    {:else if error}
      <div class="error">
        <p>ERROR: {error}</p>
      </div>
    {:else}
      <p class="loading">°os loading</p>
    {/if}
  </div>
</div>
