<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let text: string;
    export let args: object;

    function clicked() {
		dispatch('clicked', args);
	}
</script>

<style>
    button {
        border: solid 1px black;
    }
</style>

<button on:click={clicked}>{text}</button>
