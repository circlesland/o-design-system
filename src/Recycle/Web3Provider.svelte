<script lang="ts">
  import Web3 from "web3";
  import {createEventDispatcher, onMount} from "svelte";

  const provider = new Web3.providers.WebsocketProvider(
    "wss://xdai.poanetwork.dev/wss",
    {
      timeout: 30000,
      reconnect: {
        auto: true,
        delay: 5000,
        maxAttempts: 5,
        onTimeout: false
      },
      clientConfig: {
        keepalive: true,
        keepaliveInterval: 60000
      }
    }
  );

  const w3 = new Web3();
  w3.setProvider(provider);

  const dispatch = createEventDispatcher();

  onMount(() =>
  {
    dispatch('initialized', {
      web3: w3
    });
  });

  export let web3 = w3;
</script>