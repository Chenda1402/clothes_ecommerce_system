<template>
    <div>
      <!-- Other checkout content -->
  
      <button @click="showCouponPopup = true">Apply Coupon</button>
  
      <!-- The Modal Wrapper (using the PopupModal from the previous example) -->
      <PopupModal :show="showCouponPopup" @close="showCouponPopup = false" title="Apply Coupon">
         <!-- Embed the ApplyCouponContent component here -->
         <ApplyCouponContent @close="handleCouponClose" @apply="handleCouponApply" />
         <!-- Display feedback from parent -->
         <div v-if="couponFeedback" class="parent-feedback">{{ couponFeedback }}</div>
      </PopupModal>
  
      <!-- Display Applied Coupon Info -->
      <div v-if="appliedCouponCode">
        Applied Coupon: {{ appliedCouponCode }} (-{{ formatCurrency(couponDiscount) }})
        <button @click="removeCoupon">Remove</button>
      </div>
  
      <!-- Rest of checkout summary -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PopupModal from './PopupModal.vue'; // Your modal component
  import ApplyCouponContent from './ApplyCouponContent.vue'; // The component we just created
  
  const showCouponPopup = ref(false);
  const appliedCouponCode = ref('');
  const couponDiscount = ref(0); // Example state for discount amount
  const couponFeedback = ref(''); // Feedback message shown in parent
  
  const handleCouponClose = () => {
    showCouponPopup.value = false;
    couponFeedback.value = ''; // Clear feedback when closing
  };
  
  const handleCouponApply = (code) => {
    console.log('Parent received coupon code:', code);
    couponFeedback.value = ''; // Clear previous parent feedback
  
    // --- Add your coupon validation logic here ---
    if (code.toUpperCase() === 'SALE10') {
      appliedCouponCode.value = code;
      couponDiscount.value = 5.50; // Example discount
      couponFeedback.value = `Coupon "${code}" applied successfully!`;
      showCouponPopup.value = false; // Close popup on success
    } else if (code.toUpperCase() === 'INVALID') {
       appliedCouponCode.value = ''; // Ensure no coupon applied
       couponDiscount.value = 0;
       // Keep popup open and show error message *within the popup* maybe?
       // Or display error in the parent:
       couponFeedback.value = `Coupon code "${code}" is not valid.`;
    }
     else {
      appliedCouponCode.value = '';
      couponDiscount.value = 0;
      couponFeedback.value = 'Invalid coupon code entered.';
    }
    // -------------------------------------------
  };
  
  const removeCoupon = () => {
      appliedCouponCode.value = '';
      couponDiscount.value = 0;
      couponFeedback.value = '';
  };
  
  // Dummy formatCurrency function for example
  const formatCurrency = (value) => `$${value.toFixed(2)}`;
  
  </script>
  
  <style scoped>
  .parent-feedback {
      text-align: center;
      margin-top: 10px;
      color: #d9534f; /* Example error color */
  }
  /* Add other parent styles */
  </style>