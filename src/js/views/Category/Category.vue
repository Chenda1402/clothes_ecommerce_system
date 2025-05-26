<template>
    <div class="home">
      <!-- Header Bar -->
      <div class="header-bar">
        <div class="frame-parent">
          <div class="mingcutemenu-fill-wrapper" @click="openMenu">
            <img class="mingcutemenu-fill-icon" src="mingcute:menu-fill.svg" alt="">
          </div>
          <div class="sn">SN</div>
          <div class="frame-group">
            <div class="material-symbols-lightsearch-parent">
              <img class="hugeiconstrade-up" src="material-symbols-light:search.svg" alt="">
              <div class="search">search</div>
            </div>
            <div class="frame-child"></div>
          </div>
          <div class="mingcutemenu-fill-wrapper">
            <img class="mingcutemenu-fill-icon" src="clarity:notification-line.svg" alt="">
          </div>
          <div class="bar-menu-parent">
            <div class="bar-menu"><div class="search">Register</div></div>
            <div class="bar-menu"><div class="search">Login</div></div>
          </div>
        </div>
        <div class="header-bar-child"></div>
      </div>
  
      <!-- Welcome Section -->
      <div class="welcome-title">
        <div class="welcome">WELCOME</div>
        <b class="sn-fashion">SN. FASHION</b>
        <div class="lorem-ipsum-dolor">
          Lorem ipsum, dolor sit amet consectetur...
        </div>
        <div class="shop-now-parent">
          <b class="shop-now">SHOP NOW</b>
          <img class="hugeiconstrade-up" src="hugeicons:trade-up.svg" alt="">
        </div>
        <div class="welcome-title-child"></div>
        <b class="freedom-style">FREEDOM & STYLE</b>
      </div>
  
      <!-- Poster -->
      <div class="poster">
        <img class="poster-child" src="Frame 1171276669.png" alt="">
        <div class="poster-item"></div>
        <img class="portrait-young-woman-wearing-2-icon" src="portrait-young-woman-wearing-2000-s-fashion-style (1).png" alt="">
        <img class="portrait-young-woman-wearing-2-icon1" src="portrait-young-woman-wearing-2000-s-fashion-style.png" alt="">
        <img class="poster-inner" src="Group 1171276595.png" alt="">
        <img class="group-icon" src="Group 1171276596.png" alt="">
      </div>
  
      <!-- Fashion Type Section -->
      <div class="vector-parent">
        <img class="group-child" src="Vector 4.svg" alt="">
        <div class="fashion-type-parent">
          <b class="fashion-type">FASHION TYPE</b>
          <div class="group-item"></div>
          <img class="group-inner" src="Frame 79.png" alt="">
          <img class="frame-icon" src="Frame 1171276670.png" alt="">
          <div class="women-collection-wrapper" @click="openMenu">
            <b class="women-collection">Women Collection</b>
          </div>
          <div class="men-collection-wrapper" @click="openMenu">
            <b class="women-collection">Men Collection</b>
          </div>
        </div>
      </div>
  
      <!-- Products -->
      <div class="line-group">
        <div class="group-child3"></div>
        <b class="top-products">TOP PRODUCTS</b>
        <div v-for="n in 8" :key="n" class="effects-items">
          <div class="effects-items-inner">
            <img class="frame-item" src="Rectangle 57.png" alt="">
          </div>
          <div class="parent">
            <b class="b">$13.50</b>
            <div class="in-stock">IN STOCK</div>
            <div class="knitting-button-short">
              Knitting Button Short Tops Tees Patchwork Y2k Shirt...
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <div class="footer">
        <!-- Follow Us -->
        <div class="follow-us-parent">
          <div class="follow-us">Follow Us</div>
          <div v-for="(platform, i) in socialPlatforms" :key="i" class="facebook">
            <img class="mingcutemenu-fill-icon" :src="platform.icon" :alt="platform.name">
            <div class="search">{{ platform.name }}</div>
          </div>
        </div>
  
        <!-- Customer Services -->
        <div class="customer-services-parent">
          <div class="follow-us">CUSTOMER SERVICES</div>
          <div class="privacy">
            <img class="mingcutemenu-fill-icon" src="ic:baseline-privacy-tip.svg" alt="">
            <div class="search">Privacy Policy</div>
          </div>
          <div class="online">
            <img class="mingcutemenu-fill-icon" src="ph:question-fill.svg" alt="">
            <div class="search">Online exchange policy</div>
          </div>
        </div>
  
        <!-- Contact -->
        <div class="contact-us-parent">
          <div class="follow-us">Contact Us</div>
          <div class="gmail">
            <img class="mingcutemenu-fill-icon" src="material-symbols:mail.svg" alt="">
            <div class="search">infome@gmail.com</div>
          </div>
          <div class="call1" v-for="i in 2" :key="i">
            <img class="mingcutemenu-fill-icon" src="material-symbols:call-sharp.svg" alt="">
            <div class="search">(+855) 016 356624</div>
          </div>
          <div class="telegram">
            <img class="mingcutemenu-fill-icon" src="ic:baseline-telegram.svg" alt="">
            <div class="search">@vann_norey</div>
          </div>
        </div>
  
        <!-- Payment -->
        <div class="we-accept-parent">
          <div class="we-accept">WE ACCEPT</div>
          <img class="rectangle-icon" src="Rectangle 71.png" alt="">
          <img class="group-child1" src="Rectangle 72.png" alt="">
          <img class="group-child2" src="Rectangle 73.png" alt="">
          <div class="mdicash-on-delivery-parent">
            <img class="mdicash-on-delivery-icon" src="mdi:cash-on-delivery.svg" alt="">
            <div class="search">Cash on delivery</div>
          </div>
        </div>
  
        <div class="line-parent">
          <div class="line-div"></div>
          <img class="teenyiconssend-up-outline" src="teenyicons:send-up-outline.svg" alt="">
        </div>
      </div>
  
      <!-- Footer Note -->
      <div class="powered-by-snfashion">Powered by SN.Fashion © 2024</div>
  
      <!-- Popup Menu -->
      <div v-if="showMenu" id="menuContainer" class="popup-overlay" @click.self="closeMenu">
        <div class="menu">
          <b class="women2">Women</b>
          <div class="menu1">Menu</div>
          <b class="men">Men</b>
          <b class="boys">Boys</b>
          <b class="girls">Girls</b>
          <div class="menu-child"></div>
          <img class="vector-icon" src="Vector.svg" alt="">
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
  </script>

  