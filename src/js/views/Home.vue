<template>
  <!-- Wrapper for Centering -->
  <div class="page-center-wrapper w-full overflow-x-hidden">
    <!-- Main Home Container -->
    <div
      class="home w-[1514px] mx-auto relative bg-white h-[3657px] overflow-hidden text-center text-[var(--web-h3-title-size)] font-kantumruy"
    >
      <!-- Welcome Title Section -->
      <div
        class="welcome-title absolute top-[225px] left-4 w-[609px] h-[515px]"
      >
        <div
          class="welcome absolute top-0 left-0 text-[64px] tracking-[0.4em] leading-[100px] uppercase font-black font-lexend-mega"
        >
          WELCOME
        </div>
        <b
          class="sn-fashion absolute top-[141px] left-0 text-[var(--web-h1-heading-size)] flex text-primary-dark items-end w-[499px] h-8"
          >SN. FASHION</b
        >
        <div
          class="lorem-ipsum-dolor absolute top-[260px] left-0 text-[var(--web-h4-subtitle-size)] text-web-black flex items-end w-[499px]"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolore
          quibusdam sed natus placeat? Soluta, sunt minus? Nam quae blanditiis
          dolore consequatur sequi possimus, deleniti, eum in aliquam ab error?
        </div>
        <div
          class="shop-now-parent absolute top-[440px] left-[110px] rounded-[32px] border-4 border-primary-dark box-border w-[249px] flex flex-row items-center justify-center p-[var(--padding-base)] gap-[10px] text-web-black"
        >
          <b class="shop-now relative underline shadow-text-sm">SHOP NOW</b>
          <!-- Assuming shadow-text-sm is a custom shadow: shadow-[0px_4px_4px_rgba(0,0,0,0.25)] -->
          <img
            class="hugeiconstrade-up w-8 relative h-8 overflow-hidden flex-shrink-0"
            alt=""
            src="/images/hugeicons-trade-up.svg"
          />
        </div>
        <div
          class="welcome-title-child absolute top-[171.5px] left-[-0.5px] border-t border-neutral-gray box-border w-[500px] h-px"
        ></div>
        <b class="freedom-style absolute top-[183px] left-0 underline"
          >FREEDOM & STYLE</b
        >
      </div>

      <!-- Poster Section -->
      <div
        class="poster absolute top-[53.63px] left-[414.1px] w-[1119.9px] h-[987.6px]"
      >
        <img
          class="poster-child absolute top-[210.37px] left-[250.9px] w-[46px] h-[42px] object-contain"
          alt=""
          src="/images/frame-79.png"
        />
        <div
          class="poster-item absolute top-[224.37px] left-[265.9px] shadow-lg rounded-sm bg-[#858484] border-2 border-[#d1d1d1] box-border w-[624px] h-[585px]"
        ></div>
        <!-- Note: Tailwind shadow-lg is an approximation -->
        <img
          class="portrait-young-woman-wearing-2-icon absolute top-[32.37px] left-[348.9px] rounded-sm w-[624px] h-[673px] object-cover"
          alt=""
          src="/images/portrait-young-woman-wearing-2000-s-fashion-style-1.png"
        />
        <img
          class="portrait-young-woman-wearing-2-icon1 absolute top-[485.37px] left-[208.9px] rounded-sm w-[374px] h-[443px] object-cover"
          alt=""
          src="/images/portrait-young-woman-wearing-2000-s-fashion-style.png"
        />
        <img
          class="poster-inner absolute top-[731.13px] left-0 w-[279.9px] h-[256.5px] object-contain"
          alt=""
          src="/images/group-1171276595.svg"
        />
        <img
          class="group-icon absolute top-0 left-[922.67px] w-[197.3px] h-[158.6px] object-contain"
          alt=""
          src="/images/group-1171276596.svg"
        />
      </div>

      <!-- Background Vector Section -->
      <div
        class="vector-parent absolute top-0 left-0 bottom-0 right-0 m-auto w-[1514px] max-w-full h-[2949.5px] text-neutral-white"
      >
        <img
          class="group-child absolute top-0 left-0 w-full h-[2400px]"
          alt=""
          src="/images/vector-41.png"
        />
        <!-- Fashion Type Content (Relative to vector-parent) -->
        <div
          class="fashion-type-parent absolute top-[777.5px] left-[calc(50%-506px)] w-[1014px] h-[789px] text-white"
        >
          <div class="fashion-type-parent container mx-auto text-center">
            <b class="fashion-type text-3xl md:text-4xl font-bold text-white"
              >FASHION TYPE</b
            >
            <div class="group-item h-1 w-24 bg-pink-500 mx-auto my-6"></div>
            <!-- group-inner and frame-icon are decorative images, style as needed -->
            <!-- <img class="group-inner w-12 h-12 mx-auto mb-4" src="some-decorative-icon.svg" alt=""> -->
            <div class="grid md:grid-cols-2 gap-8 mt-10">
              <div
                class="women-collection-wrapper bg-pink-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1"
              >
                <router-link
                  to="/category"
                  class="women-collection text-2xl font-semibold text-pink-700"
                  >Women Collection</router-link
                >
              </div>
              <div
                class="men-collection-wrapper bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1"
                @click="openMenu"
              >
                <b class="women-collection text-2xl font-semibold text-blue-700"
                  >Men Collection</b
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Header Bar -->
      <!-- Comment moved OUTSIDE the opening tag -->
      <!-- Adjusted width slightly from 1514px of .home, consider making consistent -->
      <div
        class="header-bar absolute top-0 left-0 shadow-md bg-web-white w-[1512px] h-20 overflow-hidden text-[var(--web-h4-subtitle-size)]"
      >
        <div
          class="frame-parent absolute top-[25px] left-0 w-full box-border flex flex-row items-center justify-between px-[var(--padding-base)]"
        >
          <!-- Left: Menu Icon -->
          <div
            @click="openMenu"
            class="mingcutemenu-fill-wrapper flex flex-row items-center justify-start cursor-pointer"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt="Open Menu"
              src="/images/mingcute-menu-fill.svg"
            />
          </div>

          <!-- Center: Brand Name -->
          <div
            class="sn w-auto relative text-3xl font-mervale-script text-center text-pink-800 inline-block flex-shrink-0 px-4"
          >
            Clothes Shop
          </div>

          <!-- Right Side Container (for search, icons, login) -->
          <div class="flex flex-row items-center gap-[var(--gap-base)]">
            <!-- Search Input Section - ADDED BACK -->
            <div
              class="frame-group rounded-sm flex flex-col items-start justify-start p-[var(--padding-xs)] gap-1 max-h-[50px]"
            >
              <div
                class="material-symbols-lightsearch-parent h-6 flex flex-row items-center justify-start gap-2"
              >
                <img
                  class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0 cursor-pointer"
                  alt="Search Icon"
                  src="/images/material-symbols-light-search.svg"
                />
                <!-- Actual Input -->
                <input
                  type="text"
                  placeholder="Search..."
                  class="search-input bg-transparent border-none focus:outline-none focus:ring-0 p-0 text-inherit placeholder:text-gray-500 text-sm"
                  style="width: 120px"
                />
              </div>
              <div
                class="frame-child w-full relative border-t border-gray-400 box-border h-px"
              ></div>
            </div>
            <!-- End of Search Input Section -->

            <!-- Notification Icon -->
            <div
              class="mingcutemenu-fill-wrapper flex flex-row items-center justify-start cursor-pointer"
            >
              <img
                class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
                alt="Notifications"
                src="/images/clarity-notification-line.svg"
              />
            </div>

            <!-- Register/Login Buttons -->
            <div
              class="bar-menu-parent flex flex-row items-center justify-start gap-2"
            >
              <div
                class="bar-menu rounded-sm flex flex-row items-center justify-center p-1 cursor-pointer hover:bg-gray-100"
              >
                <div class="search relative text-sm">Register</div>
              </div>
              <div
                class="bar-menu rounded-sm flex flex-row items-center justify-center p-1 cursor-pointer hover:bg-gray-100"
              >
                <div class="search relative text-sm">Login</div>
              </div>
            </div>
          </div>
          <!-- End of Right Side Container -->
        </div>
        <div
          class="header-bar-child absolute top-0 left-0 bg-primary-dark w-full h-[17px]"
        ></div>
      </div>

      <!-- Footer -->
      <div
        class="footer absolute top-[2756px] left-0 bg-[rgba(96,28,49,0.1)] w-[1512px] h-[289px] flex flex-row items-start justify-start flex-wrap content-start p-[44px_var(--padding-base)] box-border gap-[15px_162px] text-[var(--web-paragraph-size)]"
      >
        <div class="follow-us-parent w-[105px] relative h-[164px]">
          <div
            class="follow-us absolute top-0 left-0 text-[var(--web-h4-subtitle-size)]"
          >
            Follow Us
          </div>
          <div
            class="facebook absolute top-[39px] left-0 w-[105px] flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/ic-baseline-facebook.svg"
            />
            <div class="search relative">Facebook</div>
          </div>
          <div
            class="instagram absolute top-[71px] left-0 w-[105px] flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/ri-instagram-fill.svg"
            />
            <div class="search relative">Instagram</div>
          </div>
          <div
            class="tik-tok absolute top-[103px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/ic-round-tiktok.svg"
            />
            <div class="search relative">Tik Tok</div>
          </div>
          <div
            class="youtube absolute top-[135px] left-0 w-[105px] flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/mingcute-youtube-fill.svg"
            />
            <div class="search relative">Youtube</div>
          </div>
        </div>
        <div class="customer-services-parent w-[206px] relative h-[98px]">
          <div
            class="follow-us absolute top-0 left-0 text-[var(--web-h4-subtitle-size)]"
          >
            CUSTOMER SERVICES
          </div>
          <div
            class="privacy absolute top-[69px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/ic-baseline-privacy-tip.svg"
            />
            <div class="search relative">Privacy Policy</div>
          </div>
          <div
            class="online absolute top-[39px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/ph-question-fill.svg"
            />
            <div class="search relative">Online exchange policy</div>
          </div>
        </div>
        <div class="contact-us-parent w-[181px] relative h-[164px]">
          <div
            class="follow-us absolute top-0 left-0 text-[var(--web-h4-subtitle-size)]"
          >
            Contact Us
          </div>
          <div
            class="gmail absolute top-[39px] left-0 w-[181px] flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/material-symbols-mail.svg"
            />
            <div class="search relative">infome@gmail.com</div>
          </div>
          <div
            class="call1 absolute top-[71px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/material-symbols-call-sharp.svg"
            />
            <div class="search relative">(+855) 016 356624</div>
          </div>
          <div
            class="tik-tok absolute top-[103px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/material-symbols-call-sharp.svg"
            />
            <div class="search relative">(+855) 016 356624</div>
          </div>
          <div
            class="telegram absolute top-[135px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/images/ic-baseline-telegram.svg"
            />
            <div class="search relative">@vann_norey</div>
          </div>
        </div>
        <div
          class="we-accept-parent w-[359px] relative h-[143px] text-[var(--web-h4-subtitle-size)]"
        >
          <div class="we-accept absolute top-0 left-0">WE ACCEPT</div>
          <img
            class="rectangle-icon absolute top-[39px] left-0 rounded-xs w-[109px] h-[54px] object-cover"
            alt=""
            src="/images/rectangle-71.png"
          />
          <img
            class="group-child1 absolute top-[39px] left-[125px] rounded-xs w-[109px] h-[54px] object-cover"
            alt=""
            src="/images/rectangle-72.png"
          />
          <img
            class="group-child2 absolute top-[39px] left-[250px] rounded-xs w-[109px] h-[54px] object-cover"
            alt=""
            src="/images/rectangle-73.png"
          />
          <div
            class="mdicash-on-delivery-parent absolute top-[109px] left-0 flex flex-row items-center justify-start gap-[var(--gap-base)] text-[var(--web-paragraph-size)]"
          >
            <img
              class="mdicash-on-delivery-icon w-[34px] relative h-[34px] overflow-hidden flex-shrink-0"
              alt=""
              src="/images/mdi-cash-on-delivery.svg"
            />
            <div class="search relative">Cash on delivery</div>
          </div>
        </div>
        <div class="line-parent w-[1478px] relative h-[68px]">
          <div
            class="line-div absolute top-[67px] left-[-1px] border-t-2 border-primary-dark box-border w-[1480px] h-px"
          ></div>
          <img
            class="teenyiconssend-up-outline absolute h-1/2 w-[2.3%] top-0 right-[2.3%] bottom-1/2 left-[95.4%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/images/teenyicons-send-up-outline.svg"
          />
        </div>
      </div>

      <!-- Powered By Text -->
      <div
        class="powered-by-snfashion absolute top-[3626px] left-[calc(50%-89px)] text-[var(--web-link-size)] font-light"
      >
        Powered by SN.Fashion © 2024
      </div>

      <!-- Line Group / Top Products Section -->
      <div
        class="line-group absolute top-[1394px] left-[calc(50%-741px)] w-[1480px] h-[1288px] text-white"
      >
        <!-- Removed extra text-white class -->
        <b
          class="top-products absolute top-0 left-[calc(50%-89px)] underline text-neutral-white text-2xl"
          >TOP PRODUCTS</b
        >
        <!-- Repeat Product Items -->
        <div v-for="i in 8" :key="i" :class="getProductItemClasses(i - 1)">
          <div
            class="effects-items-inner absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-md bg-white"
          >
            <img
              class="frame-item absolute top-0 left-0 rounded-xs w-[358px] h-[461px] object-cover"
              alt=""
              src="/images/frame-79.png"
            />
          </div>
          <div
            class="parent absolute h-[19.15%] w-full top-[79.49%] right-0 bottom-[1.36%] left-0 flex flex-col items-start justify-end p-[var(--padding-5xs)_var(--padding-base)] box-border"
          >
            <b class="b self-stretch relative underline">$13.50</b>
            <div
              class="in-stock self-stretch relative text-[var(--web-paragraph-size)]"
            >
              IN STOCK
            </div>
            <div
              class="knitting-button-short self-stretch relative font-light text-black overflow-hidden text-ellipsis whitespace-nowrap"
            >
              Knitting Button Short Tops Tees Patchwork Y2k Shirt Clothing Women
              Pullovers Jumper Striped Sweater Fungus Blouse For Girls
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of .home -->
  </div>
  <!-- End of .page-center-wrapper -->

  <!-- Menu Popup -->
  <div
    v-if="isMenuOpen"
    @click="closeMenuOverlay"
    class="popup-overlay fixed top-0 left-0 w-full h-full bg-[rgba(113,113,113,0.3)] flex items-start justify-start z-[1000]"
  >
    <div
      @click.stop
      class="menu relative w-[233px] bg-white h-screen overflow-y-auto text-left text-black font-kantumruy p-5 box-border shadow-lg"
    >
      <ul
        class="flex flex-col p-4 md:p-0 mt-4 text-center font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <router-link
            to="/category"
            class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            active-class="md:text-blue-700 md:dark:text-blue-500"
            >Women Collection</router-link
          >
        </li>
      </ul>
      <div class="menu1 block mb-5 text-[var(--web-h4-subtitle-size)]">
        Menu
      </div>
      <b class="men block mb-4 underline">Men</b>
      <b class="boys block mb-4 underline">Boys</b>
      <b class="girls block mb-4 underline">Girls</b>
      <div
        class="menu-child border-t border-neutral-gray box-border w-full h-px my-5"
      ></div>
      <img
        @click="closeMenu"
        class="vector-icon absolute top-4 right-4 w-6 h-6 max-w-full overflow-hidden max-h-full cursor-pointer"
        alt="Close Menu"
        src="/images/mingcute-menu-fill.svg"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const openMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Close menu if clicking directly on the overlay, not the menu itself
const closeMenuOverlay = (event) => {
  if (event.target === event.currentTarget) {
    closeMenu();
  }
};

const handleCollectionClick = (collectionType) => {
  console.log(`${collectionType} Collection Clicked`);
  // Add navigation logic here if needed
};

// Helper function to calculate product item classes
const getProductItemClasses = (index) => {
  const base = 'absolute rounded-xs w-[358px] h-[590px]';
  const positions = [
    'top-[92px] left-0', // effects-items
    'top-[698px] left-0', // effects-items1
    'top-[92px] left-[374px]', // effects-items2
    'top-[698px] left-[374px]', // effects-items3
    'top-[92px] left-[748px]', // effects-items4
    'top-[698px] left-[748px]', // effects-items5
    'top-[92px] left-[1122px]', // effects-items6
    'top-[698px] left-[1122px]', // effects-items7
  ];
  return `${base} ${positions[index]}`;
};
</script>

<style>
/* Define CSS Variables if they are not globally available */
/* It's better to configure these in tailwind.config.js */
/*
:root {
  --primary-dark: #333;
  --neutral-gray: #ccc;
  --neutral-white: #fff;
  --web-black: #000;
  --web-white: #fff;
  --web-h1-heading-size: 3rem;
  --web-h4-subtitle-size: 1.25rem;
  --web-paragraph-size: 1rem;
  --web-link-size: 0.9rem;
  --web-description-size: 1rem;
  --web-h3-title-size: 1.5rem;
  --padding-base: 16px;
  --padding-xs: 8px;
  --padding-5xs: 4px;
  --gap-base: 16px;
  --gap-5xs: 4px;
  --br-9xs: 2px;
  --br-11xs: 1px;
  --br-3xs: 4px;

  --font-lexend-mega: "Lexend Mega", sans-serif;
  --font-kantumruy: "Kantumruy", sans-serif;
  --font-mervale-script: "Mervale Script", cursive;
}
*/

/* Basic body styles if not using Tailwind Preflight */
body {
  margin: 0;
  line-height: normal;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Add custom fonts if not configured in Tailwind */
.font-lexend-mega {
  font-family: 'Lexend Mega', sans-serif;
}
.font-kantumruy {
  font-family: 'Kantumruy', sans-serif;
}
.font-mervale-script {
  font-family: 'Mervale Script', cursive;
}
</style>
