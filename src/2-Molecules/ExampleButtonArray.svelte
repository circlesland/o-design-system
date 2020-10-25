<script lang="ts">
import { o } from "@omoearth/o-types";

    import ExampleButton from "../1-Atoms/ExampleButton.svelte";
import Route from "../1-Atoms/Route.svelte";
    function demo(event) {
        alert(JSON.stringify(event));
    }
</script>

<style>
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>

<div>
    <ExampleButton
        text="Klick mich"
        on:clicked={demo}
        args={{ text: 'danke fürs klicken' }} />
    <ExampleButton
        text="Klick mich nicht"
        on:clicked={demo}
        args={{ text: 'du homo' }} />
    <ExampleButton text="mir doch egal was du machst" />
    <Route dapp={o.DENTITY} route="index">Zum Index</Route>
    <Route dapp={o.DENTITY} route="wallet">Zum wallet</Route>
    <Route dapp={o.DENTITY} route="index"><img src="https://pbs.twimg.com/profile_images/1316005608592637953/-i44hhwC_400x400.jpg" alt="omo"></Route>
    
</div>
