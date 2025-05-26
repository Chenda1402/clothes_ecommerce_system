<template>
  <div class="women-collection-page font-kantumruy bg-white text-gray-800 min-h-screen">
    <!-- Header Bar -->
    <header class="header-bar sticky top-0 left-0 w-full bg-white shadow-md z-40">
      <div class="bg-pink-700 h-4"></div>
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <nav class="bar-menu-parent flex items-center space-x-2 md:space-x-4">
          <a href="#" class="bar-menu px-3 py-2 rounded-md text-pink-700 hover:bg-pink-50 font-semibold">Women</a>
          <a href="#" class="bar-menu1 px-3 py-2 rounded-md hover:bg-gray-100">Men</a>
          <a href="#" class="bar-menu1 px-3 py-2 rounded-md hover:bg-gray-100">Boys</a>
          <a href="#" class="bar-menu1 px-3 py-2 rounded-md hover:bg-gray-100">Girls</a>
        </nav>

        <div class="frame-wrapper flex-grow max-w-xl mx-4">
          <div class="material-symbols-lightsearch-parent relative flex items-center border border-gray-400 rounded-md px-3 py-1.5 h-10">
            <svg class="w-6 h-6 text-gray-500 mr-2" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6466 27.3721L18.2972 19.0227C17.6306 19.5907 16.8639 20.0303 15.9972 20.3414C15.1306 20.6525 14.2595 20.8081 13.3839 20.8081C11.2488 20.8081 9.44167 20.069 7.96256 18.5907C6.48345 17.1125 5.7439 15.3058 5.7439 13.1707C5.7439 11.0356 6.48256 9.22806 7.9599 7.74806C9.43723 6.26806 11.2435 5.52717 13.3786 5.52539C15.5137 5.52362 17.3217 6.26317 18.8026 7.74406C20.2835 9.22495 21.0239 11.0325 21.0239 13.1667C21.0239 14.0929 20.8599 14.9894 20.5319 15.8561C20.2039 16.7227 19.7728 17.4641 19.2386 18.0801L27.5879 26.4281L26.6466 27.3721ZM13.3852 19.4734C15.1541 19.4734 16.6475 18.8645 17.8652 17.6467C19.083 16.4289 19.6919 14.9352 19.6919 13.1654C19.6919 11.3956 19.083 9.90228 17.8652 8.68539C16.6475 7.4685 15.1541 6.85962 13.3852 6.85873C11.6163 6.85784 10.1226 7.46673 8.9039 8.68539C7.68523 9.90406 7.07634 11.3974 7.07723 13.1654C7.07812 14.9334 7.68701 16.4267 8.9039 17.6454C10.1208 18.8641 11.6141 19.473 13.3839 19.4721" fill="currentColor"/></svg>
            <input type="text" class="women w-full outline-none bg-transparent text-sm" placeholder="Search">
          </div>
        </div>

        <div class="bar-menu-parent flex items-center space-x-3 md:space-x-4">
          <button class="p-1.5 hover:bg-gray-100 rounded-full">
            <svg class="w-6 h-6 text-gray-700" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1046)"><path d="M22.0067 19.0531C21.3638 18.48 20.801 17.823 20.3334 17.0998C19.8223 16.1017 19.5163 15.0114 19.4334 13.8931V10.5998C19.4378 8.84351 18.8007 7.14609 17.6419 5.82642C16.483 4.50675 14.8821 3.65568 13.14 3.43311V2.57311C13.14 2.33706 13.0463 2.11069 12.8794 1.94378C12.7124 1.77687 12.4861 1.68311 12.25 1.68311C12.014 1.68311 11.7876 1.77687 11.6207 1.94378C11.4538 2.11069 11.36 2.33706 11.36 2.57311V3.44644C9.63354 3.68506 8.05201 4.54128 6.90839 5.85651C5.76476 7.17174 5.13652 8.85687 5.14003 10.5998V13.8931C5.05707 15.0114 4.75106 16.1017 4.24003 17.0998C3.78062 17.8213 3.22683 18.4783 2.59337 19.0531C2.52225 19.1156 2.46526 19.1925 2.42618 19.2787C2.38709 19.3649 2.36682 19.4584 2.3667 19.5531V20.4598C2.3667 20.6366 2.43694 20.8062 2.56196 20.9312C2.68699 21.0562 2.85656 21.1264 3.03337 21.1264H21.5667C21.7435 21.1264 21.9131 21.0562 22.0381 20.9312C22.1631 20.8062 22.2334 20.6366 22.2334 20.4598V19.5531C22.2332 19.4584 22.213 19.3649 22.1739 19.2787C22.1348 19.1925 22.0778 19.1156 22.0067 19.0531ZM3.75337 19.7931C4.3735 19.1938 4.91961 18.5223 5.38003 17.7931C6.02389 16.5877 6.39915 15.2573 6.48003 13.8931V10.5998C6.45359 9.81846 6.58465 9.03982 6.8654 8.31022C7.14614 7.58061 7.57084 6.91496 8.1142 6.35291C8.65755 5.79085 9.30846 5.34388 10.0282 5.03862C10.7478 4.73336 11.5216 4.57604 12.3034 4.57604C13.0851 4.57604 13.8589 4.73336 14.5786 5.03862C15.2983 5.34388 15.9492 5.79085 16.4925 6.35291C17.0359 6.91496 17.4606 7.58061 17.7413 8.31022C18.0221 9.03982 18.1531 9.81846 18.1267 10.5998V13.8931C18.2076 15.2573 18.5828 16.5877 19.2267 17.7931C19.6871 18.5223 20.2332 19.1938 20.8534 19.7931H3.75337Z" fill="currentColor"/><path d="M12.3329 23.353C12.7529 23.3433 13.1559 23.1855 13.4707 22.9073C13.7854 22.6291 13.9917 22.2486 14.0529 21.833H10.5463C10.6092 22.2599 10.8251 22.6493 11.1538 22.9289C11.4825 23.2085 11.9015 23.3592 12.3329 23.353Z" fill="currentColor"/></g><defs><clipPath id="clip0_1_1046"><rect width="24" height="24" fill="white" transform="translate(0.333374 0.5)"/></clipPath></defs></svg>
          </button>
          <button class="p-1.5 hover:bg-gray-100 rounded-full">
            <svg class="w-6 h-6 text-gray-700" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0209 4.25C15.0849 4.25 13.3899 5.0825 12.3334 6.48969C11.2768 5.0825 9.58181 4.25 7.64587 4.25C6.10484 4.25174 4.62741 4.86468 3.53773 5.95436C2.44806 7.04404 1.83511 8.52146 1.83337 10.0625C1.83337 16.625 11.5637 21.9369 11.9781 22.1562C12.0873 22.215 12.2094 22.2458 12.3334 22.2458C12.4574 22.2458 12.5795 22.215 12.6887 22.1562C13.1031 21.9369 22.8334 16.625 22.8334 10.0625C22.8316 8.52146 22.2187 7.04404 21.129 5.95436C20.0393 4.86468 18.5619 4.25174 17.0209 4.25ZM12.3334 20.6375C10.6215 19.64 3.33337 15.0959 3.33337 10.0625C3.33486 8.91921 3.78969 7.82317 4.59812 7.01475C5.40655 6.20632 6.50258 5.75149 7.64587 5.75C9.46931 5.75 11.0002 6.72125 11.6396 8.28125C11.6961 8.41881 11.7923 8.53646 11.9158 8.61926C12.0393 8.70207 12.1847 8.74627 12.3334 8.74627C12.4821 8.74627 12.6274 8.70207 12.751 8.61926C12.8745 8.53646 12.9706 8.41881 13.0271 8.28125C13.6665 6.71844 15.1974 5.75 17.0209 5.75C18.1642 5.75149 19.2602 6.20632 20.0686 7.01475C20.8771 7.82317 21.3319 8.91921 21.3334 10.0625C21.3334 15.0884 14.0434 19.6391 12.3334 20.6375Z" fill="currentColor"/></svg>
          </button>
          <button class="p-1.5 hover:bg-gray-100 rounded-full">
            <svg class="w-6 h-6 text-gray-700" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3334 7.5H16.3334V6.5C16.3334 5.43913 15.9119 4.42172 15.1618 3.67157C14.4117 2.92143 13.3942 2.5 12.3334 2.5C11.2725 2.5 10.2551 2.92143 9.50495 3.67157C8.7548 4.42172 8.33337 5.43913 8.33337 6.5V7.5H5.33337C5.06816 7.5 4.8138 7.60536 4.62627 7.79289C4.43873 7.98043 4.33337 8.23478 4.33337 8.5V19.5C4.33337 20.2956 4.64944 21.0587 5.21205 21.6213C5.77466 22.1839 6.53772 22.5 7.33337 22.5H17.3334C18.129 22.5 18.8921 22.1839 19.4547 21.6213C20.0173 21.0587 20.3334 20.2956 20.3334 19.5V8.5C20.3334 8.23478 20.228 7.98043 20.0405 7.79289C19.8529 7.60536 19.5986 7.5 19.3334 7.5ZM10.3334 6.5C10.3334 5.96957 10.5441 5.46086 10.9192 5.08579C11.2942 4.71071 11.8029 4.5 12.3334 4.5C12.8638 4.5 13.3725 4.71071 13.7476 5.08579C14.1227 5.46086 14.3334 5.96957 14.3334 6.5V7.5H10.3334V6.5ZM18.3334 19.5C18.3334 19.7652 18.228 20.0196 18.0405 20.2071C17.8529 20.3946 17.5986 20.5 17.3334 20.5H7.33337C7.06816 20.5 6.8138 20.3946 6.62627 20.2071C6.43873 20.0196 6.33337 19.7652 6.33337 19.5V9.5H8.33337V10.5C8.33337 10.7652 8.43873 11.0196 8.62627 11.2071C8.8138 11.3946 9.06816 11.5 9.33337 11.5C9.59859 11.5 9.85294 11.3946 10.0405 11.2071C10.228 11.0196 10.3334 10.7652 10.3334 10.5V9.5H14.3334V10.5C14.3334 10.7652 14.4387 11.0196 14.6263 11.2071C14.8138 11.3946 15.0682 11.5 15.3334 11.5C15.5986 11.5 15.8529 11.3946 16.0405 11.2071C16.228 11.0196 16.3334 10.7652 16.3334 10.5V9.5H18.3334V19.5Z" fill="currentColor"/></svg>
          </button>
          <a href="#" class="bar-menu1 px-3 py-2 rounded-md hover:bg-gray-100 text-sm">Register</a>
          <a href="#" class="bar-menu1 px-3 py-2 rounded-md hover:bg-gray-100 text-sm">Login</a>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <section class="text-center mb-12">
        <h1 class="women-collection text-3xl md:text-4xl font-bold mb-3">WOMEN COLLECTION</h1>
        <p class="find-everything-you text-gray-600 opacity-80 max-w-2xl mx-auto text-sm md:text-base">
          Find everything you need to look and feel your best, and shop the latest women’s fashion and lifestyle products.
        </p>
      </section>

      <section class="category mb-12">
        <div class="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto pb-2">
          <button class="sub-category px-4 py-1.5 rounded-full bg-pink-700 text-white text-sm whitespace-nowrap">New In</button>
          <button class="sub-category1 px-4 py-1.5 rounded-full border border-gray-300 hover:border-pink-600 hover:text-pink-600 text-sm whitespace-nowrap">Clothing</button>
          <button class="sub-category1 px-4 py-1.5 rounded-full border border-gray-300 hover:border-pink-600 hover:text-pink-600 text-sm whitespace-nowrap">Collection</button>
          <button class="sub-category1 px-4 py-1.5 rounded-full border border-gray-300 hover:border-pink-600 hover:text-pink-600 text-sm whitespace-nowrap">Shoes</button>
          <button @click="openFilterPopup" class="ml-4 p-2 rounded-full hover:bg-gray-100">
            <svg class="w-6 h-6 text-orange-500" viewBox="0 -960 960 960" fill="currentColor"><path d="M710-143.33q-63 0-106.5-43.5T560-293.33q0-63 43.5-106.5t106.5-43.5q63 0 106.5 43.5t43.5 106.5q0 63-43.5 106.5T710-143.33Zm0-66.67q35 0 59.17-24.17 24.16-24.16 24.16-59.16t-24.16-59.17Q745-376.67 710-376.67t-59.17 24.17q-24.16 24.17-24.16 59.17t24.16 59.16Q675-210 710-210Zm-576.67-50v-66.67H480V-260H133.33ZM250-516.67q-63 0-106.5-43.5T100-666.67q0-63 43.5-106.5t106.5-43.5q63 0 106.5 43.5t43.5 106.5q0 63-43.5 106.5T250-516.67Zm0-66.66q35 0 59.17-24.17 24.16-24.17 24.16-59.17t-24.16-59.16Q285-750 250-750t-59.17 24.17q-24.16 24.16-24.16 59.16t24.16 59.17Q215-583.33 250-583.33Zm230-50V-700h346.67v66.67H480Zm230 340ZM250-666.67Z"/></svg>
          </button>
        </div>
      </section>
      
      <section class="new-in mb-12">
        <div class="flex justify-between items-center mb-6">
            <h2 class="new-in-20 text-xl font-semibold text-gray-800">New IN ({{ products.length }} Items)</h2>
            <button @click="openFilterPopup" class="octiconfilter-24-parent flex items-center space-x-2 text-sm px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg class="w-5 h-5" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 6.5C2.55109 6.5 2.36032 6.57902 2.21967 6.71967C2.07902 6.86032 2 7.05109 2 7.25C2 7.44891 2.07902 7.63968 2.21967 7.78033C2.36032 7.92098 2.55109 8 2.75 8H21.25C21.4489 8 21.6397 7.92098 21.7803 7.78033C21.921 7.63968 22 7.44891 22 7.25C22 7.05109 21.921 6.86032 21.7803 6.71967C21.6397 6.57902 21.4489 6.5 21.25 6.5H2.75ZM6 12.25C6 12.0511 6.07902 11.8603 6.21967 11.7197C6.36032 11.579 6.55109 11.5 6.75 11.5H17.25C17.4489 11.5 17.6397 11.579 17.7803 11.7197C17.921 11.8603 18 12.0511 18 12.25C18 12.4489 17.921 12.6397 17.7803 12.7803C17.6397 12.921 17.4489 13 17.25 13H6.75C6.55109 13 6.36032 12.921 6.21967 12.7803C6.07902 12.6397 6 12.4489 6 12.25ZM10 17.188C10 16.9891 10.079 16.7983 10.2197 16.6577C10.3603 16.517 10.5511 16.438 10.75 16.438H13.25C13.4489 16.438 13.6397 16.517 13.7803 16.6577C13.921 16.7983 14 16.9891 14 17.188C14 17.3869 13.921 17.5777 13.7803 17.7183C13.6397 17.859 13.4489 17.938 13.25 17.938H10.75C10.5511 17.938 10.3603 17.859 10.2197 17.7183C10.079 17.5777 10 17.3869 10 17.188Z" fill="currentColor"/></svg>
                <span class="women">Filter</span>
            </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="product in products" :key="product.id" class="effects-items group bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div class="effects-items-inner relative h-72 overflow-hidden">
              <img :src="product.image" :alt="product.name" class="frame-child w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
            </div>
            <div class="parent p-4 flex flex-col flex-grow">
              <b class="b text-lg font-semibold text-pink-700">{{ product.price }}</b>
              <div class="in-stock text-xs text-green-600 font-medium my-1">IN STOCK</div>
              <p class="knitting-button-short text-sm text-gray-600 leading-relaxed flex-grow mb-2 overflow-hidden text-ellipsis whitespace-nowrap group-hover:whitespace-normal group-hover:overflow-visible">
                {{ product.name }}
              </p>
              <button class="mt-auto w-full bg-slate-800 text-white py-2 rounded-md hover:bg-slate-700 transition-colors text-sm font-medium">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer bg-pink-50 py-10 md:py-16 px-4 text-gray-700">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="follow-us-parent">
                <h3 class="follow-us text-lg font-semibold text-pink-800 mb-4">Follow Us</h3>
                <ul class="space-y-2">
                    <li v-for="social in socialPlatforms" :key="social.name" class="flex items-center space-x-2 hover:text-pink-600 cursor-pointer">
                        <component :is="social.iconComponent" class="w-5 h-5 fill-current" />
                        <span class="text-sm">{{ social.name }}</span>
                    </li>
                </ul>
            </div>

            <div class="customer-services-parent">
                <h3 class="follow-us text-lg font-semibold text-pink-800 mb-4">CUSTOMER SERVICES</h3>
                 <ul class="space-y-2">
                    <li class="flex items-center space-x-2 hover:text-pink-600 cursor-pointer">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 25"><path d="M12 1.5L3 5.5V11.5C3 17.05 6.84 22.24 12 23.5C17.16 22.24 21 17.05 21 11.5V5.5L12 1.5ZM11 7.5H13V9.5H11V7.5ZM11 11.5H13V17.5H11V11.5Z" /></svg>
                        <span class="text-sm">Privacy Policy</span>
                    </li>
                    <li class="flex items-center space-x-2 hover:text-pink-600 cursor-pointer">
                         <svg class="w-5 h-5 fill-current" viewBox="0 0 24 25" ><path d="M12 2.75C10.0716 2.75 8.18657 3.32183 6.58319 4.39317C4.97982 5.46452 3.73013 6.98726 2.99218 8.76884C2.25422 10.5504 2.06114 12.5108 2.43735 14.4021C2.81355 16.2934 3.74215 18.0307 5.10571 19.3943C6.46928 20.7579 8.20656 21.6865 10.0979 22.0627C11.9892 22.4389 13.9496 22.2458 15.7312 21.5078C17.5127 20.7699 19.0355 19.5202 20.1068 17.9168C21.1782 16.3134 21.75 14.4284 21.75 12.5C21.7473 9.91498 20.7192 7.43661 18.8913 5.60872C17.0634 3.78084 14.585 2.75273 12 2.75ZM12 18.5C11.7775 18.5 11.56 18.434 11.375 18.3104C11.19 18.1868 11.0458 18.0111 10.9606 17.8055C10.8755 17.6 10.8532 17.3738 10.8966 17.1555C10.94 16.9373 11.0472 16.7368 11.2045 16.5795C11.3618 16.4222 11.5623 16.315 11.7805 16.2716C11.9988 16.2282 12.225 16.2505 12.4305 16.3356C12.6361 16.4208 12.8118 16.565 12.9354 16.75C13.059 16.935 13.125 17.1525 13.125 17.375C13.125 17.6734 13.0065 17.9595 12.7955 18.1705C12.5845 18.3815 12.2984 18.5 12 18.5ZM12.75 13.9325V14C12.75 14.1989 12.671 14.3897 12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303C11.329 14.3897 11.25 14.1989 11.25 14V13.25C11.25 13.0511 11.329 12.8603 11.4697 12.7197C11.6103 12.579 11.8011 12.5 12 12.5C13.2403 12.5 14.25 11.6562 14.25 10.625C14.25 9.59375 13.2403 8.75 12 8.75C10.7597 8.75 9.75 9.59375 9.75 10.625V11C9.75 11.1989 9.67099 11.3897 9.53033 11.5303C9.38968 11.671 9.19892 11.75 9 11.75C8.80109 11.75 8.61033 11.671 8.46967 11.5303C8.32902 11.3897 8.25 11.1989 8.25 11V10.625C8.25 8.76406 9.93188 7.25 12 7.25C14.0681 7.25 15.75 8.76406 15.75 10.625C15.75 12.2544 14.46 13.6184 12.75 13.9325Z" /></svg>
                        <span class="text-sm">Online exchange policy</span>
                    </li>
                </ul>
            </div>

            <div class="contact-us-parent">
                <h3 class="follow-us text-lg font-semibold text-pink-800 mb-4">Contact Us</h3>
                <ul class="space-y-2">
                    <li class="flex items-center space-x-2 hover:text-pink-600 cursor-pointer">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 25"><path d="M4 20.5C3.45 20.5 2.97933 20.3043 2.588 19.913C2.19667 19.5217 2.00067 19.0507 2 18.5V6.5C2 5.95 2.196 5.47933 2.588 5.088C2.98 4.69667 3.45067 4.50067 4 4.5H20C20.55 4.5 21.021 4.696 21.413 5.088C21.805 5.48 22.0007 5.95067 22 6.5V18.5C22 19.05 21.8043 19.521 21.413 19.913C21.0217 20.305 20.5507 20.5007 20 20.5H4ZM12 13.5L20 8.5V6.5L12 11.5L4 6.5V8.5L12 13.5Z" /></svg>
                        <span class="text-sm">infome@gmail.com</span>
                    </li>
                    <li class="flex items-center space-x-2 hover:text-pink-600 cursor-pointer">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 25"><path d="M19.95 21.5C17.8667 21.5 15.8043 21.05 13.763 20.15C11.7217 19.25 9.86733 17.9667 8.2 16.3C6.53267 14.6333 5.24933 12.7833 4.35 10.75C3.45067 8.71667 3.00067 6.65 3 4.55V3.5H8.9L9.825 8.525L6.975 11.4C7.34167 12.05 7.75 12.6667 8.2 13.25C8.65 13.8333 9.13333 14.375 9.65 14.875C10.1333 15.3583 10.6627 15.821 11.238 16.263C11.8133 16.705 12.434 17.1173 13.1 17.5L16 14.6L21 15.625V21.5H19.95Z" /></svg>
                        <span class="text-sm">(+855) 016 356624</span>
                    </li>
                     <li class="flex items-center space-x-2 hover:text-pink-600 cursor-pointer">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 25"><path d="M12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM16.64 9.3C16.49 10.88 15.84 14.72 15.51 16.49C15.37 17.24 15.09 17.49 14.83 17.52C14.25 17.57 13.81 17.14 13.25 16.77C12.37 16.19 11.87 15.83 11.02 15.27C10.03 14.62 10.67 14.26 11.24 13.68C11.39 13.53 13.95 11.2 14 10.99C14.0069 10.9582 14.006 10.9252 13.9973 10.8938C13.9886 10.8624 13.9724 10.8337 13.95 10.81C13.89 10.76 13.81 10.78 13.74 10.79C13.65 10.81 12.25 11.74 9.52 13.58C9.12 13.85 8.76 13.99 8.44 13.98C8.08 13.97 7.4 13.78 6.89 13.61C6.26 13.41 5.77 13.3 5.81 12.95C5.83 12.77 6.08 12.59 6.55 12.4C9.47 11.13 11.41 10.29 12.38 9.89C15.16 8.73 15.73 8.53 16.11 8.53C16.19 8.53 16.38 8.55 16.5 8.65C16.6 8.73 16.63 8.84 16.64 8.92C16.63 8.98 16.65 9.16 16.64 9.3Z"/></svg>
                        <span class="text-sm">@vann_norey</span>
                    </li>
                </ul>
            </div>

            <div class="we-accept-parent">
                <h3 class="we-accept text-lg font-semibold text-pink-800 mb-4">WE ACCEPT</h3>
                <div class="flex space-x-2 mb-4">
                    <img class="group-child h-10 w-auto object-contain rounded" alt="Visa" src="https://via.placeholder.com/109x54/CCCCCC/000000?Text=Visa">
                    <img class="group-item h-10 w-auto object-contain rounded" alt="Mastercard" src="https://via.placeholder.com/109x54/DDDDDD/000000?Text=Mastercard">
                    <img class="group-inner h-10 w-auto object-contain rounded" alt="ABA" src="https://via.placeholder.com/109x54/EEEEEE/000000?Text=Payment">
                </div>
                <div class="flex items-center space-x-2 hover:text-pink-600 cursor-pointer">
                    <svg class="w-7 h-7 fill-current" viewBox="0 0 34 34"><path d="M26.2083 23.8C25.2167 23.8 24.5083 22.95 24.5083 22.1C24.5083 21.1083 25.3583 20.4 26.2083 20.4C27.0583 20.4 27.9083 21.25 27.9083 22.1C28.05 22.95 27.2 23.8 26.2083 23.8ZM26.2083 17C23.5167 17 21.25 19.2667 21.25 21.9583C21.25 25.6417 26.2083 31.1667 26.2083 31.1667C26.2083 31.1667 31.1667 25.6417 31.1667 21.9583C31.1667 19.2667 28.9 17 26.2083 17ZM21.1083 16.0083C20.6833 14.1667 18.9833 12.75 17 12.75C14.5917 12.75 12.75 14.5917 12.75 17C12.75 19.4083 14.5917 21.25 17 21.25C17.5667 21.25 17.9917 21.1083 18.4167 20.9667C18.7 18.9833 19.6917 17.2833 21.1083 16.0083ZM18.4167 22.6667H9.91667C9.91667 21.9152 9.61816 21.1946 9.0868 20.6632C8.55545 20.1318 7.83478 19.8333 7.08333 19.8333V14.1667C7.83478 14.1667 8.55545 13.8682 9.0868 13.3368C9.61816 12.8054 9.91667 12.0848 9.91667 11.3333H24.0833C24.0833 12.0848 24.3818 12.8054 24.9132 13.3368C25.4446 13.8682 26.1652 14.1667 26.9167 14.1667C26.9167 14.1667 28.3333 14.1667 29.75 15.0167V8.5H4.25V25.5H19.125C18.8417 24.5083 18.5583 23.6583 18.4167 22.6667Z" /></svg>
                    <span class="text-sm">Cash on delivery</span>
                </div>
            </div>
        </div>
        <div class="line-parent mt-10 pt-6 border-t-2 border-pink-700 flex justify-between items-center">
            <p class="text-xs text-gray-500">© SN.Fashion 2024. All Rights Reserved.</p>
            <button @click="scrollToTop" class="hover:text-pink-600">
                <svg class="w-7 h-7 stroke-current text-gray-600" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9999 3.3999L26.0666 12.4666M16.9999 3.3999L7.93327 12.4666M16.9999 3.3999V27.1999M2.2666 30.5999H31.7333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
        </div>
    </footer>
    <div class="powered-by-snfashion text-center text-xs text-gray-500 py-4 bg-gray-50">
      Powered by SN.Fashion © 2024
    </div>


    <!-- Filter Popup -->
    <div v-if="showFilterPopup" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end" @click.self="closeFilterPopup">
        <div class="filter1 bg-white w-[516px] max-w-[90vw] h-full shadow-xl flex flex-col relative overflow-y-auto">
            <div class="p-6 flex justify-between items-center border-b">
                <b class="filter2 text-2xl font-semibold text-gray-800">Filter</b>
                <button @click="closeFilterPopup" class="text-gray-500 hover:text-gray-800">
                    <svg class="vector-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <div class="filter-inner flex-grow p-6 space-y-6">
                <div>
                    <h3 class="sort-by text-lg font-semibold mb-3">Sort by</h3>
                    <div class="sort-by1 space-y-2 text-sm">
                        <label v-for="sort in sortByOptions" :key="sort.id" class="component-85-parent flex items-center space-x-3 cursor-pointer">
                            <input type="radio" name="sort" :value="sort.id" class="form-radio text-pink-600 focus:ring-pink-500">
                            <span class="one-size">{{ sort.label }}</span>
                        </label>
                    </div>
                </div>

                <div>
                    <h3 class="size text-lg font-semibold mb-3">Size</h3>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 text-sm">
                        <button v-for="s in sizes" :key="s" class="component-54 border border-gray-300 rounded py-1.5 px-2 hover:border-pink-500 hover:text-pink-500 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600">
                            {{ s }}
                        </button>
                    </div>
                </div>
                
                <div>
                    <h3 class="price-range text-lg font-semibold mb-3">Price Range</h3>
                    <div class="price-range1 relative pt-1">
                        <input type="range" min="10" max="500" value="150" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-600">
                        <div class="flex justify-between text-xs text-gray-500 mt-1">
                            <span>$10</span>
                            <span>$500</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="color text-lg font-semibold mb-3">Color</h3>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 text-sm">
                        <button v-for="c in colors" :key="c.name" class="color1 flex items-center space-x-2 border border-gray-300 rounded py-1.5 px-3 hover:border-pink-500 group">
                            <span class="color-child w-4 h-4 rounded-sm border border-gray-300" :style="{ backgroundColor: c.hex }"></span>
                            <span class="one-size group-hover:text-pink-500">{{ c.name }}</span>
                        </button>
                    </div>
                </div>

                <div>
                    <h3 class="fit text-lg font-semibold mb-3">Fit</h3>
                     <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 text-sm">
                        <button v-for="f in fits" :key="f" class="component-72 border border-gray-300 rounded py-1.5 px-2 hover:border-pink-500 hover:text-pink-500 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600">
                            {{ f }}
                        </button>
                    </div>
                </div>
            </div>

            <div class="p-6 border-t mt-auto flex space-x-3">
                <button class="clear flex-1 py-2.5 px-4 border border-pink-700 text-pink-700 rounded-md hover:bg-pink-50 text-sm font-medium">
                    CLEAR
                </button>
                <button class="apply flex-1 py-2.5 px-4 bg-pink-700 text-white rounded-md hover:bg-pink-800 text-sm font-medium" @click="applyFilters">
                    APPLY
                </button>
            </div>
        </div>
    </div>

  </div>
</template>

<script setup>
import { ref, markRaw, defineAsyncComponent } from 'vue';

// Social Media Icon Components (placeholders, you'd import actual SVGs or an icon library)
// For simplicity, I'll use inline SVGs in the template or just text for now.
// In a real app, you might do:
// const IconFacebook = defineAsyncComponent(() => import('./icons/FacebookIcon.vue'));

// Data for Products
const products = ref([
  { id: 1, name: 'Knitting Button Short Tops Tees Patchwork Y2k Shirt', price: '$13.50', image: '/public/images/home.jpg' },
  { id: 2, name: 'Elegant Summer Dress Floral Pattern Light Fabric', price: '$22.00', image: '/public/images/frame-79.png' },
  { id: 3, name: 'Casual Denim Jacket with Vintage Wash Details', price: '$35.90', image: '/public/images/frame-1171276670.png' },
  { id: 4, name: 'High-Waisted Skinny Jeans Stretch Fabric', price: '$29.99', image: '/public/images/frame-1171276670.png' },
  { id: 5, name: 'Cozy Knit Sweater Soft Wool Blend Oversized', price: '$45.00', image: 'https://via.placeholder.com/358x461/F5F5DC/000000?Text=Product+5' },
  { id: 6, name: 'Striped Long Sleeve T-Shirt Cotton Comfortable', price: '$18.75', image: 'https://via.placeholder.com/358x461/FAFAD2/000000?Text=Product+6' },
  { id: 7, name: 'Sporty Athleisure Hoodie with Drawstring', price: '$33.20', image: 'https://via.placeholder.com/358x461/DCDCDC/000000?Text=Product+7' },
  { id: 8, name: 'Bohemian Style Maxi Skirt Flowy and Light', price: '$27.50', image: 'https://via.placeholder.com/358x461/FFFACD/000000?Text=Product+8' },
]);


// Footer Social Platforms (Using defineAsyncComponent for icons would be better for performance)
// These are just placeholders for where you'd put SVG components or img tags
const IconFacebook = (props) => ({ template: `<svg class="${props.class}" viewBox="0 0 24 25"><path d="M22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 17.34 5.44 21.37 10 22.3V15.5H8V12.5H10V10C10 8.07 11.57 6.5 13.5 6.5H16V9.5H14C13.45 9.5 13 9.95 13 10.5V12.5H16V15.5H13V22.45C18.05 21.95 22 17.69 22 12.5Z"/></svg>` });
const IconInstagram = (props) => ({ template: `<svg class="${props.class}" viewBox="0 0 24 25"><path d="M13.0276 2.5C14.1526 2.503 14.7236 2.509 15.2166 2.523L15.4106 2.53C15.6346 2.538 15.8556 2.548 16.1226 2.56C17.1866 2.61 17.9126 2.778 18.5496 3.025C19.2096 3.279 19.7656 3.623 20.3216 4.178C20.8303 4.67773 21.2238 5.28247 21.4746 5.95C21.7216 6.587 21.8896 7.313 21.9396 8.378C21.9516 8.644 21.9616 8.865 21.9696 9.09L21.9756 9.284C21.9906 9.776 21.9966 10.347 21.9986 11.472L21.9996 12.218V13.528C22.002 14.2574 21.9944 14.9868 21.9766 15.716L21.9706 15.91C21.9626 16.135 21.9526 16.356 21.9406 16.622C21.8906 17.687 21.7206 18.412 21.4746 19.05C21.2238 19.7175 20.8303 20.3223 20.3216 20.822C19.8219 21.3307 19.2171 21.7242 18.5496 21.975C17.9126 22.222 17.1866 22.39 16.1226 22.44L15.4106 22.47L15.2166 22.476C14.7236 22.49 14.1526 22.497 13.0276 22.499L12.2816 22.5H10.9726C10.2429 22.5026 9.51312 22.4949 8.78359 22.477L8.58959 22.471C8.3522 22.462 8.11487 22.4517 7.87759 22.44C6.81359 22.39 6.08759 22.222 5.44959 21.975C4.78242 21.7241 4.17803 21.3306 3.67859 20.822C3.16954 20.3224 2.7757 19.7176 2.52459 19.05C2.27759 18.413 2.10959 17.687 2.05959 16.622L2.02959 15.91L2.02459 15.716C2.00616 14.9868 1.99782 14.2574 1.99959 13.528V11.472C1.99682 10.7426 2.00416 10.0132 2.02159 9.284L2.02859 9.09C2.03659 8.865 2.04659 8.644 2.05859 8.378C2.10859 7.313 2.27659 6.588 2.52359 5.95C2.77529 5.2822 3.16982 4.67744 3.67959 4.178C4.17875 3.66955 4.78278 3.27607 5.44959 3.025C6.08759 2.778 6.81259 2.61 7.87759 2.56C8.14359 2.548 8.36559 2.538 8.58959 2.53L8.78359 2.524C9.51278 2.50623 10.2422 2.49857 10.9716 2.501L13.0276 2.5ZM11.9996 7.5C10.6735 7.5 9.40174 8.02678 8.46406 8.96447C7.52638 9.90215 6.99959 11.1739 6.99959 12.5C6.99959 13.8261 7.52638 15.0979 8.46406 16.0355C9.40174 16.9732 10.6735 17.5 11.9996 17.5C13.3257 17.5 14.5974 16.9732 15.5351 16.0355C16.4728 15.0979 16.9996 13.8261 16.9996 12.5C16.9996 11.1739 16.4728 9.90215 15.5351 8.96447C14.5974 8.02678 13.3257 7.5 11.9996 7.5ZM11.9996 9.5C12.3936 9.49993 12.7837 9.57747 13.1477 9.72817C13.5117 9.87887 13.8424 10.0998 14.1211 10.3783C14.3997 10.6569 14.6207 10.9875 14.7715 11.3515C14.9224 11.7154 15 12.1055 15.0001 12.4995C15.0002 12.8935 14.9226 13.2836 14.7719 13.6476C14.6212 14.0116 14.4003 14.3423 14.1218 14.621C13.8432 14.8996 13.5126 15.1206 13.1486 15.2714C12.7847 15.4223 12.3946 15.4999 12.0006 15.5C11.2049 15.5 10.4419 15.1839 9.87927 14.6213C9.31666 14.0587 9.00059 13.2956 9.00059 12.5C9.00059 11.7044 9.31666 10.9413 9.87927 10.3787C10.4419 9.81607 11.2049 9.5 12.0006 9.5M17.2506 6C16.9191 6 16.6011 6.1317 16.3667 6.36612C16.1323 6.60054 16.0006 6.91848 16.0006 7.25C16.0006 7.58152 16.1323 7.89946 16.3667 8.13388C16.6011 8.3683 16.9191 8.5 17.2506 8.5C17.5821 8.5 17.9001 8.3683 18.1345 8.13388C18.3689 7.89946 18.5006 7.58152 18.5006 7.25C18.5006 6.91848 18.3689 6.60054 18.1345 6.36612C17.9001 6.1317 17.5821 6 17.2506 6Z"/></svg>` });
const IconTikTok = (props) => ({ template: `<svg class="${props.class}" viewBox="0 0 24 25"><path d="M16.5999 6.32C15.9163 5.53962 15.5396 4.53743 15.5399 3.5H12.4499V15.9C12.4261 16.571 12.1428 17.2066 11.6597 17.6729C11.1766 18.1393 10.5314 18.3999 9.85991 18.4C8.43991 18.4 7.25991 17.24 7.25991 15.8C7.25991 14.08 8.91991 12.79 10.6299 13.32V10.16C7.17991 9.7 4.15991 12.38 4.15991 15.8C4.15991 19.13 6.91991 21.5 9.84991 21.5C12.9899 21.5 15.5399 18.95 15.5399 15.8V9.51C16.7929 10.4099 18.2973 10.8926 19.8399 10.89V7.8C19.8399 7.8 17.9599 7.89 16.5999 6.32Z"/></svg>` });
const IconYoutube = (props) => ({ template: `<svg class="${props.class}" viewBox="0 0 24 25" clip-path="url(#clip0_1_1077)"><g id="Group"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12.855 4.5 13.732 4.522 14.582 4.558L15.586 4.606L16.547 4.663L17.447 4.724L18.269 4.788C19.1612 4.85589 20.0008 5.23643 20.64 5.8626C21.2791 6.48877 21.6768 7.3204 21.763 8.211L21.803 8.636L21.878 9.546C21.948 10.489 22 11.517 22 12.5C22 13.483 21.948 14.511 21.878 15.454L21.803 16.364L21.763 16.789C21.6768 17.6798 21.2789 18.5115 20.6396 19.1377C20.0002 19.7639 19.1604 20.1443 18.268 20.212L17.448 20.275L16.548 20.337L15.586 20.394L14.582 20.442C13.7218 20.4793 12.861 20.4986 12 20.5C11.139 20.4986 10.2782 20.4793 9.418 20.442L8.414 20.394L7.453 20.337L6.553 20.275L5.731 20.212C4.83881 20.1441 3.9992 19.7636 3.36004 19.1374C2.72089 18.5112 2.32319 17.6796 2.237 16.789L2.197 16.364L2.122 15.454C2.04583 14.4711 2.00514 13.4858 2 12.5C2 11.517 2.052 10.489 2.122 9.546L2.197 8.636L2.237 8.211C2.32316 7.32055 2.72071 6.48905 3.35966 5.86291C3.99861 5.23676 4.83799 4.85612 5.73 4.788L6.551 4.724L7.451 4.663L8.413 4.606L9.417 4.558C10.2775 4.52073 11.1387 4.50139 12 4.5ZM10 10.075V14.925C10 15.387 10.5 15.675 10.9 15.445L15.1 13.02C15.1914 12.9674 15.2673 12.8916 15.3201 12.8003C15.3729 12.709 15.4007 12.6055 15.4007 12.5C15.4007 12.3945 15.3729 12.291 15.3201 12.1997C15.2673 12.1084 15.1914 12.0326 15.1 11.98L10.9 9.556C10.8088 9.50332 10.7053 9.4756 10.5999 9.47562C10.4945 9.47563 10.3911 9.50339 10.2998 9.5561C10.2086 9.6088 10.1329 9.6846 10.0802 9.77587C10.0276 9.86713 9.99993 9.97065 10 10.076V10.075Z" /></g></svg>`})

const socialPlatforms = ref([
  { name: 'Facebook', iconComponent: markRaw(IconFacebook) },
  { name: 'Instagram', iconComponent: markRaw(IconInstagram) },
  { name: 'Tik Tok', iconComponent: markRaw(IconTikTok) },
  { name: 'Youtube', iconComponent: markRaw(IconYoutube) },
]);

// Filter Popup State & Logic
const showFilterPopup = ref(false);

const openFilterPopup = () => {
  showFilterPopup.value = true;
  document.body.style.overflow = 'hidden'; // Prevent background scroll
};

const closeFilterPopup = () => {
  showFilterPopup.value = false;
  document.body.style.overflow = '';
};

const applyFilters = () => {
    // Add filter application logic here
    console.log("Applying filters...");
    closeFilterPopup();
}

// Filter Data
const sortByOptions = ref([
  { id: 'new', label: 'New items' },
  { id: 'priceHigh', label: 'Price (High First)' },
  { id: 'priceLow', label: 'Price (Low First)' },
  { id: 'discount', label: 'Discount' },
]);

const sizes = ref(['One size', '24', '32', '36', '38', '40', '41', '42', '44', 'S', 'M', 'L', 'XS', 'XXS', 'XL', '2XL', 'Free size', 'XS-XL']);
const colors = ref([
  { name: 'Black', hex: '#000000' }, { name: 'Blue', hex: '#1f43ff' }, { name: 'Brown', hex: '#6f4c37' },
  { name: 'Cream', hex: '#f8ebe0' }, { name: 'Orange', hex: '#ff730e' }, { name: 'Gray', hex: '#d9d9d9' },
  { name: 'Green', hex: '#7dd27c' }, { name: 'Purple', hex: '#9747ff' }, { name: 'Red', hex: '#ff0404' },
  { name: 'White', hex: '#ffffff' }, { name: 'Yellow', hex: '#ffe925' },
]);
const fits = ref(['Regular', 'Relax', 'Loose', 'Straight', 'Oversize', 'Wide', 'Slim', 'Skinny']);

// Scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

</script>

<style scoped>
/* Add any specific styles here that are hard to achieve with Tailwind or for overrides */
/* For example, custom scrollbar for the filter popup if needed */
.filter1::-webkit-scrollbar {
  width: 6px;
}
.filter1::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filter1::-webkit-scrollbar-thumb {
  background: #fda4af; /* A pinkish color, adjust to your theme */
  border-radius: 3px;
}
.filter1::-webkit-scrollbar-thumb:hover {
  background: #f472b6; /* Darker pink on hover */
}

/* Ensure Kantumruy font is applied if not globally set via tailwind.config.js */
.font-kantumruy {
  font-family: 'Kantumruy', sans-serif;
}
</style>