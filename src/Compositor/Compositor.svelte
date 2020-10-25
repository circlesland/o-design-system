<script lang="ts">
  import type { oRegistry } from "o-types/src";

  import type {
    ViewComponent,
    ViewComposite,
    ViewLeaf,
  } from "../4-Templates/CssGridTemplate/CssGridTemplate";

  // export let manifest: string;
  // export let title = "";
  // export let error = "";

  // let svelteComponent = null;
  export let component: ViewComponent<any> = null;
  export let componentStyle;
  export let registry :oRegistry;
  // let registry = window.o.registry;
  let composite: ViewComposite<any>;
  let leaf: ViewLeaf<any>;

  if (component) {
    console.log(component);

    if (component.isComposite()) {
      composite = component as ViewComposite<any>;
    } else {
      leaf = component as ViewLeaf<any>;
    }

    // if (manifest) {
    //   if (manifest == "") {
    //     error = "Manifest empty";
    //     manifest = null;
    //   } else {
    //     try {
    //       component = Component.fromString(manifest, window.o.registry);
    //       if (!component.isComposite()) {
    //         var leaf: any = component;
    //         svelteComponent = window.o.registry.getClass(leaf.getSvelteView());
    //       }
    //     } catch (e) {
    //       error = "error on loading manifest: " + e.message;
    //       manifest = null;
    //     }
    //   }
    // }
  }
</script>

<style>
  div{
    position:relative;
    height:100%;
  }
</style>
<!-- <svelte:options tag="o-compositor"/> -->

<!--<style>
  .compositor {
    height: 100%;
    display: grid;
    grid-template-areas: var(--areas);
    grid-template-columns: var(--columns);
    grid-template-rows: var(--rows);
    overflow: hidden;
    position: relative;
  }
</style>-->
{#if component}
  {#if composite}
    <svelte:component
      this={composite.getComponent()}
      {component} 
      {componentStyle}
      {registry}>
      {#each composite.children as { child, args }}
        <svelte:self component={child} {registry} />
      {/each}
    </svelte:component>
  {:else}
  <div style="{componentStyle}">
    <svelte:component
    this={leaf.getComponent(registry)}
     />
  </div>
    
  {/if}
{/if}
