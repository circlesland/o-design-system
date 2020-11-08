<script lang="ts">
  import { o } from "@omoearth/o-types";
  import Route from "../1-Atoms/Route.svelte";
</script>

<div class="h-full overflow-y-scroll">
  <!--Nav-->
  <nav>
    <div class="container flex items-center justify-between px-6 py-2 mx-auto">
      <a class="text-2xl font-bold lg:text-4xl" href="#"> Omo Earth</a>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 text-gray-500 border border-gray-600 rounded appearance-none hover:text-gray-800 hover:border-teal-500 focus:outline-none">
          <svg
            class="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:block">
        <ul class="inline-flex">
          <li>
            <Route dapp={o.DENTITY}><button class="">Login</button></Route>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--Hero-->
  <div
    class="py-20"
    style="background: linear-gradient(45deg, #071D69 0%, #235AAC 100%)">
    <div class="container px-6 mx-auto">
      <h2 class="mb-2 text-4xl font-bold text-white">Enjoy your life</h2>
      <h3 class="mb-8 text-2xl text-gray-200">
        with passion and ø, your personal time currency
      </h3>
      <Route dapp={o.DENTITY}>
        <button
          class="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg text-primary">Login</button>
      </Route>
    </div>
  </div>
  <!-- Features -->
  <section class="container p-10 px-6 mx-auto">
    <h2 class="mb-8 text-4xl font-bold text-center text-gray-800">Explain</h2>
    <div class="flex flex-wrap items-center mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="mb-3 text-3xl font-bold text-gray-800">Step 1</h4>
        <p class="mb-8 text-gray-600">explain text</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="assets/health.svg" alt="Monitoring" />
      </div>
    </div>
    <div class="flex flex-wrap items-center mb-20">
      <div class="w-full md:w-1/2">
        <img
          src="https://hub.textile.io/ipns/bafzbeihcehyawlhvltossqfhblyqeuer34yak24ctesgwnnf7aeyk33lce/images/test.png"
          alt="Test" />
      </div>
      <div class="w-full pl-10 md:w-1/2">
        <h4 class="mb-3 text-3xl font-bold text-gray-800">Step 2</h4>
        <p class="mb-8 text-gray-600">explain text</p>
      </div>
    </div>
    <div class="flex flex-wrap items-center mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="mb-3 text-3xl font-bold text-gray-800">Step 3</h4>
        <p class="mb-8 text-gray-600">explain text</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="assets/sync.svg" alt="Syncing" />
      </div>
    </div>
  </section>
  <!-- Testimonials -->
  <section class="bg-gray-100">
    <div class="container px-6 py-20 mx-auto">
      <h2 class="mb-8 text-4xl font-bold text-center text-gray-800">
        Testimonials
      </h2>
      <div class="flex flex-wrap">
        <div class="w-full px-2 mb-4 md:w-1/3">
          <div class="py-2 bg-white rounded shadow">
            <p class="px-6 mb-5 text-base text-gray-800">
              Monitoring and tracking my health vitals anywhere I go and on any
              platform I use has never been easier.
            </p>
            <p class="px-6 text-xs text-gray-500 md:text-sm">John Doe</p>
          </div>
        </div>
        <div class="w-full px-2 mb-4 md:w-1/3">
          <div class="py-2 bg-white rounded shadow">
            <p class="px-6 mb-5 text-base text-gray-800">
              As an Athlete, this is the perfect product for me. I wear my Smart
              Health Monitoring Wristwatch everywhere i go, even in the bathroom
              since it's waterproof.
            </p>
            <p class="px-6 text-xs text-gray-500 md:text-sm">Jane Doe</p>
          </div>
        </div>
        <div class="w-full px-2 mb-4 md:w-1/3">
          <div class="py-2 bg-white rounded shadow">
            <p class="px-6 mb-5 text-base text-gray-800">
              I don't regret buying this wearble gadget. One of the best gadgets
              I own!.
            </p>
            <p class="px-6 text-xs text-gray-500 md:text-sm">James Doe</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Call to Action-->
  <!-- <section style="background-color: #667eea">
    <div class="container px-6 py-20 mx-auto text-center">
      <h2 class="mb-6 text-4xl font-bold text-center text-white">
        Limited in Stock
      </h2>
      <h3 class="my-4 text-2xl text-white">
        Get yourself the Smart Health Monitoring Wristwatch!
      </h3>
      <button
        class="px-8 py-4 mt-6 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg">
        Pre Order
      </button>
    </div>
  </section> -->
  <!--Footer-->
  <footer class="bg-gray-100">
    <div class="container px-6 pt-10 pb-6 mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full text-center md:w-1/4 md:text-left ">
          <h5 class="mb-6 font-bold uppercase">Links</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">FAQ</a>
            </li>
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">Help</a>
            </li>
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">Support</a>
            </li>
          </ul>
        </div>
        <div class="w-full text-center md:w-1/4 md:text-left ">
          <h5 class="mb-6 font-bold uppercase">Legal</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">Terms</a>
            </li>
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">Privacy</a>
            </li>
          </ul>
        </div>
        <div class="w-full text-center md:w-1/4 md:text-left ">
          <h5 class="mb-6 font-bold uppercase">Social</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">Facebook</a>
            </li>
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">Linkedin</a>
            </li>
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">Twitter</a>
            </li>
          </ul>
        </div>
        <div class="w-full text-center md:w-1/4 md:text-left ">
          <h5 class="mb-6 font-bold uppercase">Company</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">Official
                Blog</a>
            </li>
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">About
                Us</a>
            </li>
            <li class="mt-2">
              <a
                href="#"
                class="text-gray-600 hover:underline hover:text-orange-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
