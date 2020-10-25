<script lang="ts">
  import { o, Router } from "@omoearth/o-types";

  export let dapp: o = o.DENTITY;
  export let route: string = "index";

  function navigateTo() {
    Router.page.base(`${window.location.origin}/ipns/${dapp}`);
    Router.page(`${route}`);
  }
</script>

<style>
  div{
    cursor: pointer;
  }
</style>

<div on:click={navigateTo}>
  <slot />
</div>
