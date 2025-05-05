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
            src="/src/assets/images/hugeicons-trade-up.svg "
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
          src="/src/assets/frame-79 copy.png"
        />
        <div
          class="poster-item absolute top-[224.37px] left-[265.9px] shadow-lg rounded-sm bg-[#858484] border-2 border-[#d1d1d1] box-border w-[624px] h-[585px]"
        ></div>
        <!-- Note: Tailwind shadow-lg is an approximation -->
        <img
          class="portrait-young-woman-wearing-2-icon absolute top-[32.37px] left-[348.9px] rounded-sm w-[624px] h-[673px] object-cover"
          alt=""
          src="/src/assets/images/portrait-young-woman-wearing-2000-s-fashion-style-1.png"
        />
        <img
          class="portrait-young-woman-wearing-2-icon1 absolute top-[485.37px] left-[208.9px] rounded-sm w-[374px] h-[443px] object-cover"
          alt=""
          src="/src/assets/images/portrait-young-woman-wearing-2000-s-fashion-style.png"
        />
        <img
          class="poster-inner absolute top-[731.13px] left-0 w-[279.9px] h-[256.5px] object-contain"
          alt=""
          src="/src/assets/images/group-1171276595.svg"
        />
        <img
          class="group-icon absolute top-0 left-[922.67px] w-[197.3px] h-[158.6px] object-contain"
          alt=""
          src="/src/assets/images/group-1171276596.svg"
        />
      </div>

      <!-- Background Vector Section -->
      <div
        class="vector-parent absolute top-0 left-0 bottom-0 right-0 m-auto w-[1514px] max-w-full h-[2949.5px] text-neutral-white"
      >
        <img
          class="group-child absolute top-0 left-0 w-full h-full"
          alt=""
          src="/src/assets/images/vector-41.png"
        />
        <!-- Fashion Type Content (Relative to vector-parent) -->
        <div
          class="fashion-type-parent absolute top-[777.5px] left-[calc(50%-506px)] w-[1014px] h-[789px] text-white"
        >
          <b class="fashion-type absolute top-0 left-[calc(50%-87px)] underline"
            >FASHION TYPE</b
          >
          <!-- <div
            class="group-item absolute top-[46px] left-[calc(50%-67px)] border-t-2 border-neutral-white box-border w-[136px] h-px"
          ></div> -->
          <img
            class="group-inner absolute top-[110px] left-0 rounded-xs w-[483px] h-[576px] overflow-hidden object-cover"
            alt=""
            src="/src/assets/images/frame-79.png"
          />
          <img
            class="frame-icon absolute top-[110px] left-[531px] rounded-xs w-[483px] h-[576px] overflow-hidden object-cover"
            alt=""
            src="/src/assets/images/frame-1171276670.png"
          />
          <div
            @click="handleCollectionClick('Women')"
            class="women-collection-wrapper absolute top-[722px] left-0 rounded-sm border-3 border-neutral-white box-border w-[483px] flex flex-row items-center justify-center p-[var(--padding-xs)] cursor-pointer"
          >
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Women Collection
            </button>
            <!-- <button
              class="women-collection relative underline bg-transparent border-none text-inherit cursor-pointer"
            >
              
            </button> -->
          </div>
          <div
            @click="handleCollectionClick('Men')"
            class="men-collection-wrapper absolute top-[722px] left-[531px] rounded-sm border-3 border-neutral-white box-border w-[483px] flex flex-row items-center justify-center p-[var(--padding-xs)] cursor-pointer"
          >
            <button
              class="women-collection relative underline bg-transparent border-none text-inherit cursor-pointer"
            >
              Men Collection
            </button>
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
          <div
            @click="openMenu"
            class="mingcutemenu-fill-wrapper flex flex-row items-center justify-start cursor-pointer"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt="Open Menu"
              src="/src/assets/images/mingcute-menu-fill.svg"
            />
          </div>
          <div
            class="sn w-[1045px] relative text-3xl font-mervale-script text-center inline-block flex-shrink-0"
          >
            SN
          </div>
          <div
            class="frame-group rounded-sm flex flex-col items-start justify-start p-[var(--padding-xs)] gap-1 max-h-[50px]"
          >
            <div
              class="material-symbols-lightsearch-parent h-6 flex flex-row items-center justify-start gap-[19px]"
            >
              <!-- CORRECTED: Comment moved OUTSIDE the img tag -->
              <!-- Class name still seems wrong here, was likely search icon -->
              <img
                class="hugeiconstrade-up w-8 relative h-8 overflow-hidden flex-shrink-0"
                alt="Search Icon"
                src="/src/assets/images/material-symbols-light-search.svg"
              />
              <div class="search relative">search</div>
            </div>
            <div
              class="frame-child w-[153px] relative border-t border-black box-border h-px"
            ></div>
          </div>
          <div
            class="mingcutemenu-fill-wrapper flex flex-row items-center justify-start"
          >
            <!-- Notification Icon -->
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt="Notifications"
              src="/src/assets/images/clarity-notification-line.svg"
            />
          </div>
          <div
            class="bar-menu-parent flex flex-row items-center justify-start gap-[var(--gap-base)]"
          >
            <div
              class="bar-menu rounded-sm flex flex-row items-center justify-center p-1"
            >
              <div class="search relative">Register</div>
            </div>
            <div
              class="bar-menu rounded-sm flex flex-row items-center justify-center p-1"
            >
              <div class="search relative">Login</div>
            </div>
          </div>
        </div>
        <div
          class="header-bar-child absolute top-0 left-0 bg-primary-dark w-full h-[17px]"
        ></div>
      </div>

      <!-- Footer -->
      <div
        class="footer absolute top-[3326px] left-0 bg-[rgba(96,28,49,0.1)] w-[1512px] h-[289px] flex flex-row items-start justify-start flex-wrap content-start p-[44px_var(--padding-base)] box-border gap-[15px_162px] text-[var(--web-paragraph-size)]"
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
              src="/src/assets/images/ic-baseline-facebook.svg"
            />
            <div class="search relative">Facebook</div>
          </div>
          <div
            class="instagram absolute top-[71px] left-0 w-[105px] flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/src/assets/images/ri-instagram-fill.svg"
            />
            <div class="search relative">Instagram</div>
          </div>
          <div
            class="tik-tok absolute top-[103px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/src/assets/images/ic-round-tiktok.svg"
            />
            <div class="search relative">Tik Tok</div>
          </div>
          <div
            class="youtube absolute top-[135px] left-0 w-[105px] flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/src/assets/images/mingcute-youtube-fill.svg"
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
              src="/src/assets/images/ic-baseline-privacy-tip.svg"
            />
            <div class="search relative">Privacy Policy</div>
          </div>
          <div
            class="online absolute top-[39px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/src/assets/images/ph-question-fill.svg"
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
              src="/src/assets/images/material-symbols-mail.svg"
            />
            <div class="search relative">infome@gmail.com</div>
          </div>
          <div
            class="call1 absolute top-[71px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/src/assets/images/material-symbols-call-sharp.svg"
            />
            <div class="search relative">(+855) 016 356624</div>
          </div>
          <div
            class="tik-tok absolute top-[103px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <!-- Reused class? -->
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/src/assets/images/material-symbols-call-sharp.svg"
            />
            <div class="search relative">(+855) 016 356624</div>
          </div>
          <div
            class="telegram absolute top-[135px] left-0 flex flex-row items-center justify-start gap-[var(--gap-5xs)]"
          >
            <img
              class="mingcutemenu-fill-icon w-6 relative h-6 overflow-hidden flex-shrink-0"
              alt=""
              src="/src/assets/images/ic-baseline-telegram.svg"
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
            src="/src/assets/images/rectangle-71.png"
          />
          <img
            class="group-child1 absolute top-[39px] left-[125px] rounded-xs w-[109px] h-[54px] object-cover"
            alt=""
            src="/src/assets/images/rectangle-72.png"
          />
          <img
            class="group-child2 absolute top-[39px] left-[250px] rounded-xs w-[109px] h-[54px] object-cover"
            alt=""
            src="/src/assets/images/rectangle-73.png"
          />
          <div
            class="mdicash-on-delivery-parent absolute top-[109px] left-0 flex flex-row items-center justify-start gap-[var(--gap-base)] text-[var(--web-paragraph-size)]"
          >
            <img
              class="mdicash-on-delivery-icon w-[34px] relative h-[34px] overflow-hidden flex-shrink-0"
              alt=""
              src="/src/assets/images/mdi-cash-on-delivery.svg"
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
            src="/src/assets/images/teenyicons-send-up-outline.svg"
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
        class="line-group absolute top-[1994px] left-[calc(50%-741px)] w-[1480px] h-[1288px] text-primary-dark"
      >
        <b
          class="top-products absolute top-0 left-[calc(50%-89px)] underline text-neutral-white text-white"
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
              src="/src/assets/images/frame-79.png"
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
              class="knitting-button-short self-stretch relative text-[var(--web-description-size)] font-light overflow-hidden text-ellipsis whitespace-nowrap"
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
      class="menu relative w-[233px] bg-white h-screen overflow-y-auto text-left text-[var(--web-h3-title-size)] font-kantumruy p-5 box-border shadow-lg"
    >
      <b class="women2 block mb-4 underline">Women</b>
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
        src="/src/assets/images/mingcute-menu-fill.svg"
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
