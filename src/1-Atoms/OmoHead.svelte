<script lang="ts">
  let local = true; /*
    window.location.hostname == "localhost" ||
    window.location.hostname == "127.0.0.1";*/
  let development = window.location.hostname == "omo.local";
  let css =
    local || development
      ? "/bundle.css"
      : "https://hub.textile.io/ipns/bafzbeigrqxbkog345dvrbl7puqjw4aggbbqrgtkq6cx6hvtpy326oifycq/build/bundle.css";
  export let title = "omo.earth";
</script>

<style global>
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  @tailwind base;
  @tailwind utilities;
  @tailwind components;

  html,
  body {
    height: 100%;
    overflow: hidden;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @apply font-sans;
  }

  button {
    @apply py-3 px-4 text-center bg-primary rounded text-white;
  }

  .omo-error {
    @apply w-full h-16 p-4 text-xl text-center text-white bg-red-400 rounded-t;
  }
</style>

<svelte:options tag="o-head" />
<svelte:head>
  <link
    rel="shortcut icon"
    href="https://hub.textile.io/ipfs/bafkreidoxzlkolgcx6ua4wtequwbc33qdjqipvimi3kyf4forxle3gkfwa" />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="https://hub.textile.io/ipfs/bafkreidoxzlkolgcx6ua4wtequwbc33qdjqipvimi3kyf4forxle3gkfwa" />
  <link
    rel="mask-icon"
    href="https://hub.textile.io/ipfs/bafkreifxtz7qjutcjx43lg2ylux7qyvhtypz4dl637ld2h7d74oei4mjsq"
    color="#5bbad5" />
  <meta name="msapplication-TileColor" content="#2b5797" />
  <meta name="theme-color" content="#ffffff" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="https://hub.textile.io/ipfs/bafkreicljavvfnspea7yl5wd55pf7adiswrxorsopdgy3plamigye3dc7a" />
  <link
    rel="manifest"
    href="https://hub.textile.io/ipfs/bafkreiglahzlptfirdqahg7bf6iwln3pluoecmkl6cnxofw6tkuvjllluq" />
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous" />
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>{title}</title>
  <link rel="stylesheet" href={css} />
</svelte:head>
