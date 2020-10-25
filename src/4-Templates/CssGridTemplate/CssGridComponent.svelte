<script lang="ts">
  import type { oRegistry } from "@omoearth/o-types";
  import Compositor from "../../Compositor/Compositor.svelte";
  import type { CssGridTemplate } from "./CssGridTemplate";
  export let componentStyle: string = "";
  export let component: any;
  export let registry: oRegistry;
</script>

<style>
  div {
    position: relative;
    height: 100%;
    display: grid;
    grid-template-areas: var(--areas);
    grid-template-columns: var(--columns);
    grid-template-rows: var(--rows);
    overflow: hidden;
  }
</style>

{#if component}
  <div style="{componentStyle} {component.gridStyle}">
    {#each component.children as { child, args }}
      <Compositor
        component={child}
        componentStyle={`grid-area: ${args.area};`}
        {registry} />
    {/each}
  </div>
{/if}
