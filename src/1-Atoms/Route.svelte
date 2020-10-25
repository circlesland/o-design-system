<script lang="ts">
  import { o, Router } from "@omoearth/o-types";

  export let dapp: o = o.DENTITY;
  export let route: string = "index";
  export let cssClass: string = "";

  function navigateTo() {
    // Router.page.base(`${window.location.origin}/ipns/${dapp}`);
    Router.page.base(`/ipns/${dapp}`);
    Router.page.show(`${route}`);
  }
</script>

<style>
  div {
    cursor: pointer;
    width: 100%;
  }
</style>

<div on:click={navigateTo} class={cssClass}>
  <slot />
</div>
