<template>
    <div class="checkout">
      <!-- Header Bar (Consider making this a separate component later) -->
      <div class="header-bar">
        <div class="frame-parent8">
          <div class="bar-menu-parent">
            <div class="bar-menu" @click="navigate('women')">
              <div class="women">Women</div>
            </div>
            <div class="bar-menu1" @click="navigate('men')">
              <div class="women">Men</div>
            </div>
            <div class="bar-menu1" @click="navigate('boys')">
              <div class="women">Boys</div>
            </div>
            <div class="bar-menu1" @click="navigate('girls')">
              <div class="women">Girls</div>
            </div>
          </div>
          <div class="frame-wrapper">
            <div class="material-symbols-lightsearch-parent">
              <!-- Search SVG -->
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- ... (path omitted for brevity) ... -->
                 <path id="Vector" d="M26.6464 27.3721L18.2971 19.0227C17.6304 19.5907 16.8638 20.0303 15.9971 20.3414C15.1304 20.6525 14.2593 20.8081 13.3838 20.8081C11.2487 20.8081 9.44155 20.069 7.96244 18.5907C6.48333 17.1125 5.74377 15.3058 5.74377 13.1707C5.74377 11.0356 6.48244 9.22806 7.95977 7.74806C9.43711 6.26806 11.2433 5.52717 13.3784 5.52539C15.5136 5.52362 17.3216 6.26317 18.8024 7.74406C20.2833 9.22495 21.0238 11.0325 21.0238 13.1667C21.0238 14.0929 20.8598 14.9894 20.5318 15.8561C20.2038 16.7227 19.7727 17.4641 19.2384 18.0801L27.5878 26.4281L26.6464 27.3721ZM13.3851 19.4734C15.154 19.4734 16.6473 18.8645 17.8651 17.6467C19.0829 16.4289 19.6918 14.9352 19.6918 13.1654C19.6918 11.3956 19.0829 9.90228 17.8651 8.68539C16.6473 7.4685 15.154 6.85962 13.3851 6.85873C11.6162 6.85784 10.1224 7.46673 8.90377 8.68539C7.68511 9.90406 7.07622 11.3974 7.07711 13.1654C7.078 14.9334 7.68689 16.4267 8.90377 17.6454C10.1207 18.8641 11.614 19.473 13.3838 19.4721" fill="#0B090A"/>
              </svg>
              <div class="women">search</div>
            </div>
          </div>
          <div class="bar-menu-parent">
            <!-- Notification SVG -->
             <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- ... paths ... -->
                   <path id="Vector" d="M22.0066 19.0536C21.3637 18.4805 20.8009 17.8235 20.3332 17.1003C19.8222 16.1022 19.5162 15.0118 19.4332 13.8936V10.6003C19.4377 8.844 18.8006 7.14658 17.6417 5.82691C16.4829 4.50724 14.882 3.65617 13.1399 3.43359V2.57359C13.1399 2.33755 13.0461 2.11118 12.8792 1.94427C12.7123 1.77736 12.486 1.68359 12.2499 1.68359C12.0139 1.68359 11.7875 1.77736 11.6206 1.94427C11.4537 2.11118 11.3599 2.33755 11.3599 2.57359V3.44693C9.63342 3.68555 8.05189 4.54176 6.90826 5.857C5.76463 7.17223 5.1364 8.85736 5.13991 10.6003V13.8936C5.05695 15.0118 4.75093 16.1022 4.23991 17.1003C3.7805 17.8218 3.22671 18.4788 2.59324 19.0536C2.52213 19.1161 2.46514 19.193 2.42606 19.2792C2.38697 19.3654 2.3667 19.4589 2.36658 19.5536V20.4603C2.36658 20.6371 2.43682 20.8066 2.56184 20.9317C2.68686 21.0567 2.85643 21.1269 3.03324 21.1269H21.5666C21.7434 21.1269 21.913 21.0567 22.038 20.9317C22.163 20.8066 22.2332 20.6371 22.2332 20.4603V19.5536C22.2331 19.4589 22.2129 19.3654 22.1738 19.2792C22.1347 19.193 22.0777 19.1161 22.0066 19.0536ZM3.75324 19.7936C4.37337 19.1943 4.91949 18.5228 5.37991 17.7936C6.02377 16.5882 6.39903 15.2578 6.47991 13.8936V10.6003C6.45347 9.81895 6.58453 9.04031 6.86527 8.31071C7.14602 7.5811 7.57072 6.91545 8.11408 6.35339C8.65743 5.79134 9.30834 5.34437 10.028 5.03911C10.7477 4.73385 11.5215 4.57653 12.3032 4.57653C13.085 4.57653 13.8588 4.73385 14.5785 5.03911C15.2982 5.34437 15.9491 5.79134 16.4924 6.35339C17.0358 6.91545 17.4605 7.5811 17.7412 8.31071C18.022 9.04031 18.153 9.81895 18.1266 10.6003V13.8936C18.2075 15.2578 18.5827 16.5882 19.2266 17.7936C19.687 18.5228 20.2331 19.1943 20.8532 19.7936H3.75324Z" fill="black"/>
                  <path id="Vector_2" d="M12.3329 23.353C12.7529 23.3433 13.1559 23.1855 13.4707 22.9073C13.7854 22.6291 13.9917 22.2486 14.0529 21.833H10.5463C10.6092 22.2599 10.8251 22.6493 11.1538 22.9289C11.4825 23.2085 11.9015 23.3592 12.3329 23.353Z" fill="#0B090A"/>
             </svg>
             <!-- Heart SVG -->
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- ... path ... -->
                   <path id="Vector" d="M17.0209 4.25C15.0849 4.25 13.3899 5.0825 12.3334 6.48969C11.2768 5.0825 9.58181 4.25 7.64587 4.25C6.10484 4.25174 4.62741 4.86468 3.53773 5.95436C2.44806 7.04404 1.83511 8.52146 1.83337 10.0625C1.83337 16.625 11.5637 21.9369 11.9781 22.1562C12.0873 22.215 12.2094 22.2458 12.3334 22.2458C12.4574 22.2458 12.5795 22.215 12.6887 22.1562C13.1031 21.9369 22.8334 16.625 22.8334 10.0625C22.8316 8.52146 22.2187 7.04404 21.129 5.95436C20.0393 4.86468 18.5619 4.25174 17.0209 4.25ZM12.3334 20.6375C10.6215 19.64 3.33337 15.0959 3.33337 10.0625C3.33486 8.91921 3.78969 7.82317 4.59812 7.01475C5.40655 6.20632 6.50258 5.75149 7.64587 5.75C9.46931 5.75 11.0002 6.72125 11.6396 8.28125C11.6961 8.41881 11.7923 8.53646 11.9158 8.61926C12.0393 8.70207 12.1847 8.74627 12.3334 8.74627C12.4821 8.74627 12.6274 8.70207 12.751 8.61926C12.8745 8.53646 12.9706 8.41881 13.0271 8.28125C13.6665 6.71844 15.1974 5.75 17.0209 5.75C18.1642 5.75149 19.2602 6.20632 20.0686 7.01475C20.8771 7.82317 21.3319 8.91921 21.3334 10.0625C21.3334 15.0884 14.0434 19.6391 12.3334 20.6375Z" fill="black"/>
              </svg>
            <!-- Cart SVG -->
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- ... path ... -->
                   <path id="Vector" d="M19.3334 7.5H16.3334V6.5C16.3334 5.43913 15.9119 4.42172 15.1618 3.67157C14.4117 2.92143 13.3942 2.5 12.3334 2.5C11.2725 2.5 10.2551 2.92143 9.50495 3.67157C8.7548 4.42172 8.33337 5.43913 8.33337 6.5V7.5H5.33337C5.06816 7.5 4.8138 7.60536 4.62627 7.79289C4.43873 7.98043 4.33337 8.23478 4.33337 8.5V19.5C4.33337 20.2956 4.64944 21.0587 5.21205 21.6213C5.77466 22.1839 6.53772 22.5 7.33337 22.5H17.3334C18.129 22.5 18.8921 22.1839 19.4547 21.6213C20.0173 21.0587 20.3334 20.2956 20.3334 19.5V8.5C20.3334 8.23478 20.228 7.98043 20.0405 7.79289C19.8529 7.60536 19.5986 7.5 19.3334 7.5ZM10.3334 6.5C10.3334 5.96957 10.5441 5.46086 10.9192 5.08579C11.2942 4.71071 11.8029 4.5 12.3334 4.5C12.8638 4.5 13.3725 4.71071 13.7476 5.08579C14.1227 5.46086 14.3334 5.96957 14.3334 6.5V7.5H10.3334V6.5ZM18.3334 19.5C18.3334 19.7652 18.228 20.0196 18.0405 20.2071C17.8529 20.3946 17.5986 20.5 17.3334 20.5H7.33337C7.06816 20.5 6.8138 20.3946 6.62627 20.2071C6.43873 20.0196 6.33337 19.7652 6.33337 19.5V9.5H8.33337V10.5C8.33337 10.7652 8.43873 11.0196 8.62627 11.2071C8.8138 11.3946 9.06816 11.5 9.33337 11.5C9.59859 11.5 9.85294 11.3946 10.0405 11.2071C10.228 11.0196 10.3334 10.7652 10.3334 10.5V9.5H14.3334V10.5C14.3334 10.7652 14.4387 11.0196 14.6263 11.2071C14.8138 11.3946 15.0682 11.5 15.3334 11.5C15.5986 11.5 15.8529 11.3946 16.0405 11.2071C16.228 11.0196 16.3334 10.7652 16.3334 10.5V9.5H18.3334V19.5Z" fill="black"/>
              </svg>
          </div>
          <div class="bar-menu-parent">
            <div class="bar-menu1" @click="navigate('register')">
              <div class="women">Register</div>
            </div>
            <div class="bar-menu1" @click="navigate('login')">
              <div class="women">Login</div>
            </div>
          </div>
        </div>
        <div class="header-bar-child"></div>
      </div>
  
      <!-- Main Checkout Content -->
      <div class="a-checkout-is">a checkout is a peace where you pay for things you are buying</div>
      <div class="check-out">Check Out</div>
      <div class="checkout-child"></div>
  
      <!-- Contact Information -->
      <b class="contact-information">Contact Information</b>
      <div class="checkout-item"></div>
      <div class="receiver-name-wrapper">
        <label class="receiver-name" for="receiverNameInput">Receiver name*</label>
        <input id="receiverNameInput" type="text" v-model="contactInfo.receiverName" required />
      </div>
      <div class="cityprovince-parent input-like" @click="showCityPopup = true">
        <div class="receiver-name">
            {{ contactInfo.cityProvince || 'City/Province*' }}
        </div>
         <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- ... path (down arrow) ... -->
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.619 16.2108C13.4304 16.3972 13.1755 16.5011 12.9103 16.4996C12.6452 16.4981 12.3915 16.3913 12.205 16.2028L6.58002 10.514C6.39893 10.3243 6.29956 10.0712 6.30332 9.809C6.30708 9.54682 6.41366 9.29661 6.60011 9.11225C6.78657 8.92789 7.03797 8.82414 7.30017 8.82334C7.56238 8.82254 7.81441 8.92476 8.00198 9.10798L12.924 14.0858L17.9018 9.16387C18.0914 8.98278 18.3446 8.88342 18.6068 8.88717C18.869 8.89093 19.1192 8.99752 19.3035 9.18397C19.4879 9.37042 19.5917 9.62182 19.5925 9.88403C19.5933 10.1462 19.491 10.3983 19.3078 10.5858L13.619 16.2108Z" fill="#0B090A"/>
         </svg>
      </div>
      <div class="address-details-parent input-like" @click="showAddressPopup = true">
         <div class="receiver-name">
           {{ contactInfo.addressDetails || 'Address details*' }}
         </div>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
             <!-- ... path (location icon) ... -->
              <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M17.5533 16.606C17.7723 16.4964 18.0239 16.471 18.2604 16.5346C18.4969 16.5982 18.7018 16.7464 18.8363 16.951L18.8943 17.053L20.8943 21.053C20.9657 21.1956 21.0019 21.3533 20.9999 21.5128C20.9979 21.6723 20.9578 21.829 20.883 21.9698C20.8081 22.1106 20.7006 22.2315 20.5695 22.3224C20.4384 22.4132 20.2875 22.4714 20.1293 22.492L20.0003 22.5H4.00032C3.84079 22.5001 3.68356 22.4619 3.54177 22.3888C3.39997 22.3157 3.27772 22.2098 3.18523 22.0798C3.09274 21.9498 3.03268 21.7996 3.01009 21.6417C2.98749 21.4837 3.003 21.3227 3.05532 21.172L3.10532 21.052L5.10532 17.052C5.21742 16.8203 5.41455 16.6407 5.65568 16.5507C5.89681 16.4606 6.16338 16.467 6.39991 16.5686C6.63644 16.6701 6.82472 16.8589 6.92557 17.0957C7.02641 17.3325 7.03205 17.5991 6.94132 17.84L6.89432 17.947L5.61832 20.5H18.3823L17.1063 17.947C16.9879 17.7099 16.9685 17.4354 17.0523 17.184C17.1361 16.9325 17.3163 16.7246 17.5533 16.606ZM12.0003 2.5C13.8568 2.5 15.6373 3.2375 16.9501 4.55025C18.2628 5.86301 19.0003 7.64348 19.0003 9.5C19.0003 11.882 17.7113 13.817 16.3773 15.19C15.6405 15.9385 14.8305 16.6112 13.9593 17.198L13.5863 17.444L13.2543 17.653L13.1053 17.743L12.8483 17.891C12.3203 18.191 11.6803 18.191 11.1523 17.891L10.8953 17.742L10.5853 17.553L10.4143 17.444L10.0413 17.198C9.17018 16.6112 8.36013 15.9385 7.62332 15.19C6.28932 13.817 5.00032 11.882 5.00032 9.5C5.00032 7.64348 5.73782 5.86301 7.05057 4.55025C8.36333 3.2375 10.1438 2.5 12.0003 2.5ZM12.0003 7.5C11.4699 7.5 10.9612 7.71071 10.5861 8.08579C10.211 8.46086 10.0003 8.96957 10.0003 9.5C10.0003 10.0304 10.211 10.5391 10.5861 10.9142C10.9612 11.2893 11.4699 11.5 12.0003 11.5C12.5308 11.5 13.0395 11.2893 13.4145 10.9142C13.7896 10.5391 14.0003 10.0304 14.0003 9.5C14.0003 8.96957 13.7896 8.46086 13.4145 8.08579C13.0395 7.71071 12.5308 7.5 12.0003 7.5Z" fill="#601C31"/>
          </svg>
      </div>
       <div class="phone-wrapper">
         <label class="receiver-name" for="phoneInput">Phone*</label>
         <input id="phoneInput" type="tel" v-model="contactInfo.phone" required />
       </div>
       <div class="note-to-driver-optional-wrapper input-like" @click="showNotePopup = true">
         <div class="receiver-name">
           {{ contactInfo.note || 'Note to driver (optional)' }}
         </div>
         <!-- Optional: Add an icon like a pencil -->
       </div>
  
      <!-- Shopping Bag -->
      <div class="shopping-bag">
        <div class="shopping-bag-parent">
          <b class="women">Shopping bag</b>
          <div class="items">{{ cartItemCount }} items</div>
        </div>
        <div class="item-list">
          <div v-if="cartItems.length === 0" class="empty-cart">Your cart is empty.</div>
          <div class="product-item" v-for="item in cartItems" :key="item.id">
            <div class="rectangle-parent">
              <img class="group-child" :alt="item.name" :src="getImageUrl(item.image)">
              <div class="name-of-porducts-parent">
                <div class="name-of-porducts">{{ item.name }}</div>
                <div class="description-about-productdescr">{{ item.description }}</div>
                <b class="b">{{ formatCurrency(item.price) }}</b>
                <div class="l">{{ item.size }}</div>
                <div class="frame-child" :style="{ backgroundColor: item.color || 'transparent' }"></div>
              </div>
            </div>
            <div class="vector-parent">
              <button class="remove-item-btn" @click="removeItem(item.id)">
                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
              </button>
              <div class="frame-parent">
                <button class="quantity-btn" @click="decreaseQuantity(item.id)" :disabled="item.quantity <= 1">-</button>
                <div class="container">
                  <b class="women">{{ item.quantity }}</b>
                </div>
                <button class="quantity-btn" @click="increaseQuantity(item.id)">+</button>
              </div>
            </div>
            <div class="product-item-child"></div>
          </div>
        </div>
      </div>
  
      <!-- Payment Details -->
      <div class="checkout-inner"></div>
      <b class="payment-details">Payment Details</b>
      <div class="rectangle-div"></div>
      <div class="apply-a-coupon" @click="showCouponPopup = true">
        <div class="apply-a-coupon1">Apply a coupon</div>
         <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
           <!-- ... path (down arrow) ... -->
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.619 16.2108C13.4304 16.3972 13.1755 16.5011 12.9103 16.4996C12.6452 16.4981 12.3915 16.3913 12.205 16.2028L6.58002 10.514C6.39893 10.3243 6.29956 10.0712 6.30332 9.809C6.30708 9.54682 6.41366 9.29661 6.60011 9.11225C6.78657 8.92789 7.03797 8.82414 7.30017 8.82334C7.56238 8.82254 7.81441 8.92476 8.00198 9.10798L12.924 14.0858L17.9018 9.16387C18.0914 8.98278 18.3446 8.88342 18.6068 8.88717C18.869 8.89093 19.1192 8.99752 19.3035 9.18397C19.4879 9.37042 19.5917 9.62182 19.5925 9.88403C19.5933 10.1462 19.491 10.3983 19.3078 10.5858L13.619 16.2108Z" fill="#0B090A"/>
         </svg>
      </div>
      <div class="payment-parent">
        <div class="payment">Payment</div>
        <b class="cash-on-delivery">{{ paymentMethodText }}</b>
      </div>
      <div class="products-parent">
        <div class="payment">Products</div>
        <b class="cash-on-delivery">{{ cartItemCount }} items</b>
      </div>
      <div class="subtotal-parent">
        <div class="payment">Subtotal</div>
        <b class="cash-on-delivery">{{ formatCurrency(subtotal) }}</b>
      </div>
       <!-- Add Coupon Discount Row if applied -->
       <div v-if="couponDiscount > 0" class="coupon-discount-parent">
           <div class="payment">Coupon Discount</div>
           <b class="cash-on-delivery">- {{ formatCurrency(couponDiscount) }}</b>
       </div>
      <div class="shipping-fee-parent">
        <div class="payment">Shipping fee</div>
        <b class="cash-on-delivery">{{ formatCurrency(shippingFee) }}</b>
      </div>
      <div class="total-parent">
        <div class="payment">Total:</div>
        <b class="b42">{{ formatCurrency(total) }}</b>
      </div>
      <div class="checkout-child1"></div>
  
      <!-- Payment Method Selection -->
      <b class="payment-method">Payment Method</b>
      <div class="khqr-pay payment-option" :class="{ selected: selectedPaymentMethod === 'khqr' }" @click="selectPaymentMethod('khqr')">
         <div class="rectangle-parent7">
             <img class="group-child7" alt="KHQR" :src="getImageUrl('khqr-5.png')">
             <div class="khqr-parent">
                 <div class="l">KHQR</div>
                 <div class="scan-to-pay">Scan to pay with any banking app</div>
             </div>
         </div>
          <svg v-if="selectedPaymentMethod === 'khqr'" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M480-289.33q79.67 0 135.17-55.5 55.5-55.5 55.5-135.17 0-79.67-55.5-135.17-55.5-55.5-135.17-55.5-79.67 0-135.17 55.5-55.5 55.5-55.5 135.17 0 79.67 55.5 135.17 55.5 55.5 135.17 55.5ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/></svg>
           <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#AAAAAA"><path d="M480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/></svg>
       </div>
       <div class="cash-on-delivery1 payment-option" :class="{ selected: selectedPaymentMethod === 'cod' }" @click="selectPaymentMethod('cod')">
           <div class="rectangle-parent8">
               <img class="frame-child7" alt="Cash on Delivery" :src="getImageUrl('1_5c8KOrF2CKKQCcY67sJDWA.jpg')">
               <div class="khqr-group">
                   <div class="l">Cash on delivery</div>
                   <div class="scan-to-pay1">Pay via our delivery men</div>
               </div>
           </div>
            <svg v-if="selectedPaymentMethod === 'cod'" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M480-289.33q79.67 0 135.17-55.5 55.5-55.5 55.5-135.17 0-79.67-55.5-135.17-55.5-55.5-135.17-55.5-79.67 0-135.17 55.5-55.5 55.5-55.5 135.17 0 79.67 55.5 135.17 55.5 55.5 135.17 55.5ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#AAAAAA"><path d="M480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/></svg>
       </div>
  
      <!-- Footer / Place Order -->
      <div class="total-56760-parent">
        <div class="women">
          <span>Total:</span>
          <span class="span"> {{ formatCurrency(total) }}</span>
        </div>
        <div class="place-order-wrapper" @click="placeOrder">
          <div class="women">PLACE ORDER</div>
        </div>
      </div>
  
      <!-- Popups -->
      <PopupModal :show="showCityPopup" @close="showCityPopup = false">
         <div class="city-provinece">
           <div class="city-province-parent">
              <div class="phnom-penh">City / Province</div>
              <!-- Close button could go here -->
           </div>
           <div class="list-city">
             <div
                v-for="city in cambodiaProvinces" :key="city"
                class="component-33" @click="selectCity(city)" >
                 <div class="component-33-child"></div>
                 <div class="phnom-penh-wrapper">
                     <div class="phnom-penh">{{ city }}</div>
                 </div>
             </div>
           </div>
         </div>
      </PopupModal>
  
      <PopupModal :show="showAddressPopup" @close="showAddressPopup = false" title="Address Details">
           <div class="address-details1">
               <div class="group-parent">
                   <textarea
                      v-model="contactInfo.addressDetails"
                      placeholder="Enter address details..."
                      rows="4"
                   ></textarea>
                    <!-- Add save/close button if needed -->
                    <button @click="showAddressPopup = false" class="popup-close-btn">Done</button>
               </div>
           </div>
       </PopupModal>
  
      <PopupModal :show="showNotePopup" @close="showNotePopup = false" title="Note to Driver">
          <div class="note-to-driver1">
               <div class="parent1">
                  <textarea
                     v-model="contactInfo.note"
                     placeholder="Enter note for driver (optional)..."
                     rows="4"
                  ></textarea>
                  <button @click="showNotePopup = false" class="popup-close-btn">Done</button>
              </div>
          </div>
      </PopupModal>
  
      <PopupModal :show="showCouponPopup" @close="showCouponPopup = false">
          <div class="apply-coupon">
            <img class="vector-icon10 popup-close-icon" @click="showCouponPopup = false" alt="Close" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'%3E%3Cpath d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/%3E%3C/svg%3E" >
            <div class="apply-a-coupon2">Apply a coupon</div>
            <div class="group coupon-input-group">
               <label for="couponCodeInput" class="coupon-code">Coupon code</label>
               <input id="couponCodeInput" type="text" v-model="couponCodeInput" placeholder="Enter code"/>
            </div>
            <div class="apply-wrapper" @click="applyCouponCode">
               <div class="apply">APPLY</div>
            </div>
            <div v-if="couponMessage" class="coupon-message" :class="{ 'error': !isCouponValid }">
              {{ couponMessage }}
            </div>
          </div>
      </PopupModal>
  
      <PopupModal :show="showQrScanPopup" @close="showQrScanPopup = false" >
          <div class="qr-scan">
              <img class="qr-scan-inner popup-close-icon" @click="showQrScanPopup = false" alt="Close" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'%3E%3Cpath d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/%3E%3C/svg%3E">
              <div class="aba-payment">ABA' PAYMENT</div>
              <div class="scan-with-mobile">Scan with mobile banking app that supports KHQR</div>
              <div class="khqr2">
                   <!-- Display actual QR code here -->
                   <img class="photo-2024-08-14-20-23-58-1" alt="KHQR Code" :src="getImageUrl('photo_2025-02-12_13-52-39.jpg')">
                   <div class="khqr-item"></div>
                   <div class="sn-by-vannnorey">SN by vannnorey</div>
                   <div class="parent">
                       <div class="div">{{ formatCurrency(total, false) }}</div> <!-- Format without symbol maybe -->
                       <div class="usd">USD</div>
                   </div>
                   <div class="aba-khqr">ABA KHQR</div>
              </div>
          </div>
      </PopupModal>
  
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from 'vue';
  import PopupModal from './PopupModal.vue'; // Assuming PopupModal component exists
  
  // --- State ---
  
  const contactInfo = reactive({
    receiverName: '',
    cityProvince: '',
    addressDetails: '',
    phone: '',
    note: ''
  });
  
  const cartItems = ref([
    // Add more items as needed, matching the structure
    { id: 1, name: 'Product A', description: 'Description for product A goes here.', price: 16.50, size: 'L', quantity: 1, image: '1.jpg', color: '#FFC0CB' },
    { id: 2, name: 'Product B', description: 'Another description, longer maybe.', price: 25.00, size: 'M', quantity: 2, image: '2.jpg', color: '#ADD8E6' },
    { id: 3, name: 'Product C', description: 'Short desc.', price: 9.99, size: 'S', quantity: 1, image: '1.jpg', color: '#90EE90'},
    // ... add items corresponding to your original HTML structure (ids 1-10)
  ]);
  
  const selectedPaymentMethod = ref('cod'); // 'cod' or 'khqr'
  const couponCodeInput = ref('');
  const appliedCoupon = ref(null); // e.g., { code: 'DISCOUNT10', discount: 10, type: 'percentage' } or { code: 'SAVE5', discount: 5, type: 'fixed'}
  const couponMessage = ref('');
  const isCouponValid = ref(false);
  
  const shippingFee = ref(1.00);
  
  // Popup visibility state
  const showCityPopup = ref(false);
  const showAddressPopup = ref(false);
  const showNotePopup = ref(false);
  const showCouponPopup = ref(false);
  const showQrScanPopup = ref(false);
  
  const cambodiaProvinces = ref([
      'Phnom Penh', 'Banteay Meanchey', 'Battambang', 'Kampong Cham', 'Kampong Chhnang',
      'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Kep', 'Koh Kong', 'Kratie',
      'Mondulkiri', 'Oddar Meanchey', 'Pailin', 'Preah Sihanouk', 'Preah Vihear',
      'Prey Veng', 'Pursat', 'Ratanak Kiri', 'Siem Reap', 'Stung Treng',
      'Svay Rieng', 'Takeo', 'Tboung Khmum'
  ].sort()); // Sorted list
  
  
  // --- Computed Properties ---
  
  const cartItemCount = computed(() => {
      return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
  });
  
  const subtotal = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });
  
  const couponDiscount = computed(() => {
      if (!appliedCoupon.value) return 0;
  
      if (appliedCoupon.value.type === 'percentage') {
          // Ensure discount is capped at subtotal if needed
          return Math.min(subtotal.value, (subtotal.value * appliedCoupon.value.discount) / 100);
      } else if (appliedCoupon.value.type === 'fixed') {
           // Ensure discount is capped at subtotal
          return Math.min(subtotal.value, appliedCoupon.value.discount);
      }
      return 0;
  });
  
  
  const total = computed(() => {
    const calculatedTotal = subtotal.value + shippingFee.value - couponDiscount.value;
    return Math.max(0, calculatedTotal); // Ensure total doesn't go below zero
  });
  
  const paymentMethodText = computed(() => {
    return selectedPaymentMethod.value === 'cod' ? 'Cash on delivery' : 'KHQR Scan';
  });
  
  // --- Methods ---
  
  const formatCurrency = (value, includeSymbol = true) => {
    if (typeof value !== 'number') {
      return includeSymbol ? '$ 0.00' : '0.00';
    }
    return `${includeSymbol ? '$ ' : ''}${value.toFixed(2)}`;
  };
  
  const getImageUrl = (imageName) => {
    // This uses Vite's dynamic asset handling.
    // Ensure images are in 'src/assets/images'
    try {
        return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    } catch (e) {
        console.error(`Error loading image: ${imageName}`, e);
        return ''; // Return a placeholder or empty string
    }
  };
  
  
  const increaseQuantity = (itemId) => {
    const item = cartItems.value.find(i => i.id === itemId);
    if (item) {
      item.quantity++;
    }
  };
  
  const decreaseQuantity = (itemId) => {
    const item = cartItems.value.find(i => i.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
    // Optional: remove item if quantity becomes 0 (depends on UI)
    // else if (item && item.quantity === 1) {
    //   removeItem(itemId);
    // }
  };
  
  const removeItem = (itemId) => {
    cartItems.value = cartItems.value.filter(i => i.id !== itemId);
     // If the removed item resulted in the applied coupon becoming invalid, remove it
     if (appliedCoupon.value) {
        validateAndApplyCoupon(appliedCoupon.value.code, true); // Re-validate silently
     }
  };
  
  const selectPaymentMethod = (method) => {
    selectedPaymentMethod.value = method;
  };
  
  const navigate = (section) => {
    console.log(`Navigate to ${section}`);
    // Implement actual navigation logic here (e.g., using Vue Router)
    alert(`Navigation to ${section} page (implement routing)`);
  };
  
  const selectCity = (city) => {
      contactInfo.cityProvince = city;
      showCityPopup.value = false;
  };
  
  const validateAndApplyCoupon = (code, silent = false) => {
      // --- Mock Coupon Validation ---
      const validCoupons = {
          'SALE10': { code: 'SALE10', discount: 10, type: 'percentage', minSpend: 20 },
          'FREESHIP': { code: 'FREESHIP', discount: shippingFee.value, type: 'fixed', minSpend: 50 },
          'SAVE5': { code: 'SAVE5', discount: 5, type: 'fixed', minSpend: 0 }
      };
  
      const coupon = validCoupons[code.toUpperCase()];
      isCouponValid.value = false; // Reset validity
  
      if (coupon) {
           if (subtotal.value >= coupon.minSpend) {
              appliedCoupon.value = coupon;
              isCouponValid.value = true;
              if (!silent) {
                  couponMessage.value = `Coupon "${coupon.code}" applied successfully!`;
                  showCouponPopup.value = false; // Close popup on success
              }
           } else {
               appliedCoupon.value = null; // Remove if invalid due to min spend
               if (!silent) {
                   couponMessage.value = `Minimum spend of ${formatCurrency(coupon.minSpend)} required for coupon "${coupon.code}".`;
               } else {
                   couponMessage.value = ''; // Clear message if silent validation fails
               }
           }
      } else {
          appliedCoupon.value = null; // Remove if invalid code
          if (!silent) {
              couponMessage.value = 'Invalid coupon code.';
          } else {
              couponMessage.value = '';
          }
      }
  
      // If validation happened due to cart change and current coupon is now invalid, clear message
      if (silent && !isCouponValid.value) {
          couponMessage.value = '';
          appliedCoupon.value = null;
      }
  };
  
  
  const applyCouponCode = () => {
     couponMessage.value = ''; // Clear previous messages
     if (!couponCodeInput.value) {
         couponMessage.value = 'Please enter a coupon code.';
         isCouponValid.value = false;
         return;
     }
     validateAndApplyCoupon(couponCodeInput.value);
  };
  
  
  const placeOrder = () => {
    // 1. Validation
    if (!contactInfo.receiverName || !contactInfo.cityProvince || !contactInfo.addressDetails || !contactInfo.phone) {
        alert('Please fill in all required contact information fields (*).');
        return;
    }
    if (cartItems.value.length === 0) {
        alert('Your shopping bag is empty.');
        return;
    }
  
    // 2. Prepare Order Data
    const orderData = {
      contact: { ...contactInfo },
      items: cartItems.value.map(item => ({ id: item.id, quantity: item.quantity, price: item.price })),
      paymentMethod: selectedPaymentMethod.value,
      coupon: appliedCoupon.value ? appliedCoupon.value.code : null,
      subtotal: subtotal.value,
      shipping: shippingFee.value,
      discount: couponDiscount.value,
      total: total.value,
    };
  
    console.log('Placing Order:', JSON.stringify(orderData, null, 2));
  
    // 3. Handle Payment Method Specific Actions
    if (selectedPaymentMethod.value === 'khqr') {
      // Show the QR Scan Popup
      showQrScanPopup.value = true;
      // In a real app, you might generate a unique QR based on the order total/ID here
      // and wait for payment confirmation via webhook or polling before proceeding.
      console.log("Displaying QR Code Popup - Awaiting Payment Scan...");
    } else {
      // Assume COD means proceed directly
      alert(`Order Placed Successfully!\nTotal: ${formatCurrency(total.value)}\nPayment: Cash on Delivery`);
      // TODO: Clear cart, redirect to success page, send data to backend, etc.
      // clearCartAndForm();
    }
  };
  
  // Helper to clear state after order (example)
  // const clearCartAndForm = () => {
  //     cartItems.value = [];
  //     contactInfo.receiverName = '';
  //     contactInfo.cityProvince = '';
  //     // ... reset other fields
  //     appliedCoupon.value = null;
  //     couponCodeInput.value = '';
  //     couponMessage.value = '';
  // }
  
  </script>
  
  <style scoped>
  /* Import the component-specific styles */
  @import '@/assets/css/index.css';
  
  /* Add minor adjustments or overrides for Vue integration if needed */
  .input-like {
    border: 1px solid #ccc; /* Example border */
    padding: 10px 15px;
    margin-bottom: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 45px; /* Match input height */
    background-color: #fff;
    border-radius: 4px; /* Example */
    color: #555; /* Placeholder color */
  }
  .input-like .receiver-name {
      color: #0B090A; /* Color for actual text */
  }
  
  
  /* Style for input fields added */
  input[type="text"],
  input[type="tel"],
  textarea {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
     font-family: 'Kantumruy', sans-serif; /* Match font */
  }
  
  /* Add margin below labels */
  .receiver-name-wrapper label,
  .phone-wrapper label {
      display: block;
      margin-bottom: 5px;
      font-weight: normal;
      color: #555;
  }
  .receiver-name-wrapper,
  .phone-wrapper {
      margin-bottom: 15px; /* Spacing below input fields */
  }
  
  .remove-item-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
      position: absolute; /* Position relative to vector-parent */
      top: 5px;
      right: 5px;
      opacity: 0.7;
  }
  .remove-item-btn:hover {
      opacity: 1;
  }
  .remove-item-btn svg {
      display: block; /* Prevent extra space below SVG */
  }
  
  
  .quantity-btn {
      background-color: #eee;
      border: 1px solid #ccc;
      color: #333;
      cursor: pointer;
      font-weight: bold;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
  }
  .quantity-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
  }
  
  .empty-cart {
      text-align: center;
      padding: 40px 20px;
      color: #777;
      font-style: italic;
  }
  
  .payment-option {
      cursor: pointer;
      border: 2px solid transparent;
      transition: border-color 0.3s ease;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
      position: relative; /* For positioning the checkmark */
      display: flex;
      align-items: center;
      justify-content: space-between; /* Push checkmark to the right */
  }
  
  .payment-option.selected {
      border-color: #75FB4C; /* Highlight color */
  }
  
  .payment-option > svg { /* Style the checkmark SVG */
      width: 24px;
      height: 24px;
      margin-left: 15px; /* Space between content and checkmark */
  }
  
  /* Styles for popups */
  .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
  }
  
  .popup-content {
      background-color: white;
      padding: 20px 30px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      max-width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative; /* For close button positioning */
  }
  
  .popup-close-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      width: 24px;
      height: 24px;
      fill: #888;
  }
  .popup-close-icon:hover {
      fill: #000;
  }
  
  /* Specific popup content styles */
  .city-provinece .list-city .component-33 {
      cursor: pointer;
      padding: 8px 15px;
      border-bottom: 1px solid #eee;
      transition: background-color 0.2s ease;
  }
  .city-provinece .list-city .component-33:hover {
      background-color: #f0f0f0;
  }
  .city-provinece .list-city .component-33:last-child {
      border-bottom: none;
  }
  .city-provinece .city-province-parent {
      margin-bottom: 15px;
      font-weight: bold;
      font-size: 1.1em;
  }
  
  .address-details1 textarea,
  .note-to-driver1 textarea {
      width: 100%;
      min-height: 80px;
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  
  .popup-close-btn { /* Simple button style for popups */
      padding: 8px 15px;
      background-color: #601C31; /* Theme color */
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      float: right; /* Position button */
  }
  .popup-close-btn:hover {
      opacity: 0.9;
  }
  
  .apply-coupon .coupon-input-group {
      margin-bottom: 15px;
  }
  .apply-coupon .coupon-input-group label {
      display: block;
      margin-bottom: 5px;
  }
  .apply-coupon .coupon-input-group input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  .apply-coupon .apply-wrapper {
      margin-bottom: 10px; /* Space before message */
  }
  .coupon-message {
      margin-top: 10px;
      font-size: 0.9em;
      color: green;
  }
  .coupon-message.error {
      color: red;
  }
  
  .qr-scan {
      text-align: center;
  }
  .qr-scan .aba-payment {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 10px;
       font-family: 'Koh Santepheap', sans-serif; /* Match font */
  }
  .qr-scan .scan-with-mobile {
      margin-bottom: 20px;
      color: #555;
  }
  .qr-scan .khqr2 {
      border: 1px solid #eee;
      padding: 20px;
      display: inline-block; /* Center the block */
      background-color: #f9f9f9;
      border-radius: 8px;
      /* Add styles from original design for KHQR box elements */
  }
  .khqr2 .photo-2024-08-14-20-23-58-1 {
      max-width: 180px; /* Adjust QR size */
      display: block;
      margin: 0 auto 15px auto;
  }
  .khqr2 .sn-by-vannnorey, .khqr2 .aba-khqr {
      font-size: 0.9em;
      color: #333;
      margin-bottom: 5px;
  }
  .khqr2 .parent {
      display: flex;
      justify-content: center;
      align-items: baseline;
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 10px;
  }
  .khqr2 .parent .usd {
      font-size: 0.8em;
      margin-left: 5px;
      font-weight: normal;
  }
  
  .coupon-discount-parent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px; /* Consistent spacing */
      font-size: 1em;
      line-height: 1.5;
      color: #d9534f; /* Reddish color for discount */
  }
  .coupon-discount-parent .payment {
      color: #d9534f; /* Match text color */
  }
  
  </style>