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
  import {
    AddArguments,
    Component,
    ViewComponent,
  } from "./4-Templates/abstract/abstract";

  export let registry: oRegistry;
  let pageComponent = null;
  let title = "°os loading";
  let error = null;
  Router.page = page;
  if (Router.checkRoute()) {
    page("*", loadContent);
    page({ hashbang: true });
    window.onbeforeunload = function () {return false;}
  }

  async function loadContent(ctx) {
    console.log("CONTEXT", ctx);
    try {
      let manifest = await Router.getManifestFromRoute(ctx);
      pageComponent = ViewComponent.fromString(manifest, registry);
      error = null;
    } catch (e) {
      error = "Error while loading manifest";
      pageComponent = null;
    }
  }
  registry.registerClass(CssGridTemplate);
  registry.registerClass(ExampleButtonArray);
  registry.registerClass(Molecule);

  var grid: CssGridTemplate = CssGridTemplate.create({
    templateAreas: "'hleft hright' 'main main' 'bottom bottom'",
    templateColumns: "1fr 1fr",
    templateRows: "60px 1fr 60px",
  });
  grid.add(Molecule.create(ExampleButtonArray.name), { area: "hleft" });
  grid.add(Molecule.create(ExampleButtonArray.name), { area: "hright" });
  grid.add(Molecule.create(ExampleButtonArray.name), { area: "bottom" });

  let subgrid = CssGridTemplate.create({
    templateAreas: "'content'",
    templateColumns: "1fr",
    templateRows: "1fr",
  });
  subgrid.add(Molecule.create(ExampleButtonArray.name), { area: "content" });
  subgrid.add(Molecule.create(ExampleButtonArray.name), { area: "content" });
  subgrid.add(Molecule.create(ExampleButtonArray.name), { area: "content" });
  subgrid.add(Molecule.create(ExampleButtonArray.name), { area: "content" });

  grid.add(subgrid, { area: "main" });
// alert(grid.toString())
  console.log(grid.toString());

  function route(r) {
    page.base(`${window.location.origin}/${r}`);
    page(`${r}`);
  }
</script>

<style>
  div {
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
<a on:click={() => route('index')}>index</a>
<a on:click={() => route('hello')}>hello</a>
<a on:click={() => route('wallet')}>wallet</a>
<a on:click={() => route('test')}>test</a>
<a on:click={() => route('foo')}>foo</a>
<div
  class=" bg-white h-screen flex flex-col items-center justify-center bg-grey-lighter bg-cover bg-center"
  style="background-image: url(https://source.unsplash.com/7awMZWDS4rg)">
  <div
    class="wrap shadow-2xl border border-gray-300 bg-white rounded-lg md:m-12 w-full h-full max-w-md justify-center">
    {#if pageComponent}
      <Compositor component={pageComponent} {registry} />
    {:else if error}
      <p class="error">ERROR: {error}</p>
    {:else}
      <p class="loading">°os loading</p>
    {/if}
  </div>
</div>
