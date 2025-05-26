<template>
  <div class="home min-h-screen bg-gray-100 text-gray-800">
    <!-- Header Bar -->
    <div class="header-bar bg-white shadow-md sticky top-0 z-40">
      <div class="frame-parent container mx-auto px-4 py-3 flex items-center justify-between">
        <div class="mingcutemenu-fill-wrapper md:hidden cursor-pointer" @click="openMenu">
          <img class="mingcutemenu-fill-icon w-6 h-6" src="mingcute:menu-fill.svg" alt="Menu">
        </div>
        <div class="sn text-2xl font-bold text-pink-600">SN</div>
        <div class="frame-group hidden md:flex items-center space-x-4">
          <div class="material-symbols-lightsearch-parent flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-1.5 hover:border-gray-400">
            <img class="hugeiconstrade-up w-5 h-5 text-gray-500" src="material-symbols-light:search.svg" alt="Search Icon">
            <input type="text" class="search text-sm outline-none bg-transparent" placeholder="search">
          </div>
          <!-- Removed frame-child, assuming search bar styling is enough -->
        </div>
        <div class="mingcutemenu-fill-wrapper md:hidden">
          <!-- Assuming this was a placeholder or cart icon on mobile -->
          <img class="mingcutemenu-fill-icon w-6 h-6" src="ph:shopping-cart-bold.svg" alt="Cart">
        </div>
        <div class="bar-menu-parent hidden md:flex items-center space-x-4">
          <div class="bar-menu"><div class="search text-sm font-medium hover:text-pink-600 cursor-pointer">Register</div></div>
          <div class="bar-menu"><div class="search text-sm font-medium hover:text-pink-600 cursor-pointer">Login</div></div>
        </div>
      </div>
      <!-- Removed header-bar-child, assuming shadow-md on header-bar is sufficient -->
    </div>

    <!-- Welcome Section -->
    <div class="welcome-title bg-gradient-to-br from-pink-50 to-purple-50 py-16 md:py-24 text-center px-4">
      <div class="welcome text-sm uppercase tracking-widest text-pink-500 font-semibold">WELCOME</div>
      <b class="sn-fashion block text-4xl md:text-6xl font-bold text-gray-800 my-3">SN. FASHION</b>
      <div class="lorem-ipsum-dolor text-gray-600 max-w-xl mx-auto text-sm md:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae officia.
      </div>
      <div class="shop-now-parent mt-8 inline-flex items-center">
        <button class="shop-now bg-gray-900 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-700 transition duration-300 flex items-center space-x-2">
          <span>SHOP NOW</span>
          <img class="hugeiconstrade-up w-5 h-5" src="material-symbols:arrow-right-alt-rounded.svg" alt="Arrow"> <!-- Placeholder icon -->
        </button>
      </div>
      <!-- welcome-title-child might be a decorative element, e.g., a line -->
      <div class="welcome-title-child h-0.5 w-20 bg-pink-400 mx-auto my-8"></div>
      <b class="freedom-style block text-2xl md:text-3xl font-semibold text-purple-600">FREEDOM & STYLE</b>
    </div>

    <!-- Poster Section -->
    <div class="poster relative w-full h-[300px] md:h-[500px] bg-gray-300 overflow-hidden my-8 md:my-12">
      <!-- You'll need to position these images using absolute positioning and Tailwind utilities (top-*, left-*, etc.) -->
      <img class="poster-child absolute inset-0 w-full h-full object-cover" src="https://via.placeholder.com/1200x500/DDEFE7/333333?text=Main+Poster+Image" alt="Main Fashion Poster">
      <!-- Example of other images, adjust positioning and size as needed -->
      <img class="portrait-young-woman-wearing-2-icon absolute top-10 left-10 w-32 h-48 md:w-48 md:h-72 object-cover rounded-lg shadow-lg opacity-90 transform hover:scale-105 transition-transform" src="https://via.placeholder.com/300x450/FBCFE8/333333?text=Model+1" alt="Model 1">
      <img class="portrait-young-woman-wearing-2-icon1 absolute bottom-10 right-10 w-32 h-48 md:w-48 md:h-72 object-cover rounded-lg shadow-lg opacity-90 transform hover:scale-105 transition-transform" src="https://via.placeholder.com/300x450/C7D2FE/333333?text=Model+2" alt="Model 2">
      <!-- <div class="poster-item absolute inset-0 bg-black bg-opacity-20"></div> -->
      <!-- Other images (poster-inner, group-icon) would be similar with absolute positioning -->
    </div>

    <!-- Fashion Type Section -->
    <div class="vector-parent py-12 md:py-16 px-4 bg-white relative">
      <!-- <img class="group-child absolute inset-0 w-full h-full object-cover opacity-5" src="your-background-pattern.svg" alt="Background pattern"> -->
      <div class="fashion-type-parent container mx-auto text-center">
        <b class="fashion-type text-3xl md:text-4xl font-bold text-gray-800">FASHION TYPE</b>
        <div class="group-item h-1 w-24 bg-pink-500 mx-auto my-6"></div>
        <!-- group-inner and frame-icon are decorative images, style as needed -->
        <!-- <img class="group-inner w-12 h-12 mx-auto mb-4" src="some-decorative-icon.svg" alt=""> -->
        <div class="grid md:grid-cols-2 gap-8 mt-10">
          <div class="women-collection-wrapper bg-pink-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1" @click="openMenu">
            <b class="women-collection text-2xl font-semibold text-pink-700">Women Collection</b>
          </div>
          <div class="men-collection-wrapper bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1" @click="openMenu">
            <b class="women-collection text-2xl font-semibold text-blue-700">Men Collection</b>
          </div>
        </div>
      </div>
    </div>

    <!-- Products -->
    <div class="line-group py-12 md:py-16 px-4 bg-gray-50">
      <div class="container mx-auto">
        <b class="top-products block text-3xl md:text-4xl font-bold text-gray-800 text-center">TOP PRODUCTS</b>
        <div class="group-child3 h-1 w-24 bg-pink-500 mx-auto my-6 mb-10"></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="n in 8" :key="n" class="effects-items bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
            <div class="effects-items-inner h-64 w-full overflow-hidden">
              <img class="frame-item w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://via.placeholder.com/300x400/E0E7FF/333333?text=Product+Image" alt="Product Image">
            </div>
            <div class="parent p-4 flex flex-col flex-grow">
              <b class="b text-xl font-bold text-gray-900">$13.50</b>
              <div class="in-stock text-xs font-semibold text-green-600 my-1 uppercase">IN STOCK</div>
              <div class="knitting-button-short text-gray-700 text-sm leading-relaxed mt-1 flex-grow">
                Knitting Button Short Tops Tees Patchwork Y2k Shirt...
              </div>
              <button class="mt-3 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors text-sm font-medium">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer bg-gray-900 text-gray-300 py-10 md:py-16 px-4">
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Follow Us -->
        <div class="follow-us-parent">
          <div class="follow-us text-lg font-semibold text-white mb-4">Follow Us</div>
          <div v-for="(platform, i) in socialPlatforms" :key="i" class="facebook flex items-center space-x-3 mb-3 group cursor-pointer">
            <img class="mingcutemenu-fill-icon w-5 h-5 text-gray-400 group-hover:text-white transition-colors" :src="platform.icon" :alt="platform.name">
            <div class="search text-sm group-hover:text-white transition-colors">{{ platform.name }}</div>
          </div>
        </div>

        <!-- Customer Services -->
        <div class="customer-services-parent">
          <div class="follow-us text-lg font-semibold text-white mb-4">CUSTOMER SERVICES</div>
          <div class="privacy flex items-center space-x-3 mb-3 group cursor-pointer">
            <img class="mingcutemenu-fill-icon w-5 h-5 text-gray-400 group-hover:text-white transition-colors" src="ic:baseline-privacy-tip.svg" alt="Privacy">
            <div class="search text-sm group-hover:text-white transition-colors">Privacy Policy</div>
          </div>
          <div class="online flex items-center space-x-3 mb-3 group cursor-pointer">
            <img class="mingcutemenu-fill-icon w-5 h-5 text-gray-400 group-hover:text-white transition-colors" src="ph:question-fill.svg" alt="FAQ">
            <div class="search text-sm group-hover:text-white transition-colors">Online exchange policy</div>
          </div>
        </div>

        <!-- Contact -->
        <div class="contact-us-parent">
          <div class="follow-us text-lg font-semibold text-white mb-4">Contact Us</div>
          <div class="gmail flex items-center space-x-3 mb-3 group cursor-pointer">
            <img class="mingcutemenu-fill-icon w-5 h-5 text-gray-400 group-hover:text-white transition-colors" src="material-symbols:mail.svg" alt="Email">
            <div class="search text-sm group-hover:text-white transition-colors">infome@gmail.com</div>
          </div>
          <div class="call1 flex items-center space-x-3 mb-3 group cursor-pointer" v-for="i in 2" :key="'call-'+i">
            <img class="mingcutemenu-fill-icon w-5 h-5 text-gray-400 group-hover:text-white transition-colors" src="material-symbols:call-sharp.svg" alt="Call">
            <div class="search text-sm group-hover:text-white transition-colors">(+855) 016 356624</div>
          </div>
          <div class="telegram flex items-center space-x-3 mb-3 group cursor-pointer">
            <img class="mingcutemenu-fill-icon w-5 h-5 text-gray-400 group-hover:text-white transition-colors" src="ic:baseline-telegram.svg" alt="Telegram">
            <div class="search text-sm group-hover:text-white transition-colors">@vann_norey</div>
          </div>
        </div>

        <!-- Payment -->
        <div class="we-accept-parent">
          <div class="we-accept text-lg font-semibold text-white mb-4">WE ACCEPT</div>
          <div class="flex items-center space-x-2 mb-3">
            <img class="rectangle-icon h-8 w-auto bg-gray-400 rounded" src="https://via.placeholder.com/50x32/FFFFFF/000000?text=Visa" alt="Visa">
            <img class="group-child1 h-8 w-auto bg-gray-400 rounded" src="https://via.placeholder.com/50x32/FFFFFF/000000?text=MC" alt="Mastercard">
            <img class="group-child2 h-8 w-auto bg-gray-400 rounded" src="https://via.placeholder.com/50x32/FFFFFF/000000?text=ABA" alt="ABA">
          </div>
          <div class="mdicash-on-delivery-parent flex items-center space-x-3 group cursor-pointer">
            <img class="mdicash-on-delivery-icon w-5 h-5 text-gray-400 group-hover:text-white transition-colors" src="mdi:cash-on-delivery.svg" alt="Cash on Delivery">
            <div class="search text-sm group-hover:text-white transition-colors">Cash on delivery</div>
          </div>
        </div>
      </div>

      <div class="line-parent container mx-auto mt-10 pt-6 border-t border-gray-700 flex justify-between items-center">
        <span class="text-xs text-gray-500">© 2024 SN.Fashion. All rights reserved.</span>
        <img class="teenyiconssend-up-outline w-6 h-6 text-gray-400 hover:text-white cursor-pointer" src="teenyicons:send-up-outline.svg" alt="Scroll to top" @click="scrollToTop">
      </div>
    </div>

    <!-- Footer Note (already part of the footer above, but if it's separate) -->
    <div class="powered-by-snfashion text-center text-xs text-gray-500 py-4 bg-black">
      Powered by SN.Fashion © 2024
    </div>

    <!-- Popup Menu -->
    <div v-if="showMenu" id="menuContainer" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" @click.self="closeMenu">
      <div class="menu bg-white p-6 sm:p-8 rounded-lg shadow-xl w-11/12 max-w-sm relative text-gray-800">
        <button @click="closeMenu" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
            <img class="vector-icon w-6 h-6" src="material-symbols:close-rounded.svg" alt="Close menu">
        </button>
        <div class="menu1 text-2xl font-bold mb-6 text-center text-pink-600">Menu</div>
        <nav class="space-y-3">
            <b class="women2 block text-lg font-semibold hover:text-pink-500 cursor-pointer py-2 border-b border-gray-200">Women</b>
            <b class="men block text-lg font-semibold hover:text-pink-500 cursor-pointer py-2 border-b border-gray-200">Men</b>
            <b class="boys block text-lg font-semibold hover:text-pink-500 cursor-pointer py-2 border-b border-gray-200">Boys</b>
            <b class="girls block text-lg font-semibold hover:text-pink-500 cursor-pointer py-2">Girls</b>
        </nav>
        <!-- <div class="menu-child h-px bg-gray-200 my-4"></div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showMenu = ref(false);

const openMenu = () => {
  showMenu.value = true;
};

const closeMenu = () => {
  showMenu.value = false;
};

const socialPlatforms = [
  { name: 'Facebook', icon: 'ic:baseline-facebook.svg' },
  { name: 'Instagram', icon: 'ri:instagram-fill.svg' },
  { name: 'Tik Tok', icon: 'ic:round-tiktok.svg' },
  { name: 'Youtube', icon: 'mingcute:youtube-fill.svg' },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style>
/* If you are using Iconify, make sure it's configured.
   Tailwind doesn't style external SVGs via `text-color` by default if they are in `<img>` tags.
   If your icons are inline SVGs, you can use `fill-current` or `stroke-current`
   and then Tailwind's text color utilities will work.
   Example for an inline SVG:
   <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">...</svg>
*/
/* For a cleaner look, you might want to add global styles for focus rings etc. */
body {
  font-family: 'Inter', sans-serif; /* Example font */
}
</style>