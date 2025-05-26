<template>
    <transition name="modal-fade">
      <div class="popup-overlay" v-if="show" @click.self="closeModal">
        <div class="popup-content" role="dialog" aria-modal="true" :aria-labelledby="title ? 'modal-title' : null">
           <h2 v-if="title" id="modal-title" class="popup-title">{{ title }}</h2>
           <button aria-label="Close" class="popup-close-icon" @click="closeModal">
               <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
           </button>
          <slot></slot> <!-- Where the popup content goes -->
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, watch, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: null
    }
  });
  
  const emit = defineEmits(['close']);
  
  const closeModal = () => {
    emit('close');
  };
  
  // Close modal on 'Escape' key press
  const handleEscapeKey = (event) => {
    if (event.key === 'Escape' && props.show) {
      closeModal();
    }
  };
  
  onMounted(() => {
    document.addEventListener('keydown', handleEscapeKey);
  });
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscapeKey);
  });
  
  // Optional: Prevent body scroll when modal is open
  watch(() => props.show, (newValue) => {
    if (typeof document !== 'undefined') {
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  });
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Darker overlay */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px; /* Add padding for smaller screens */
    box-sizing: border-box;
  }
  
  .popup-content {
    background-color: white;
    padding: 25px 35px; /* More padding */
    border-radius: 10px; /* Slightly more rounded */
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
    max-width: 600px; /* Max width */
    width: 100%; /* Responsive width */
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-sizing: border-box;
  }
  
  .popup-title {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 1.4em;
       font-family: 'Koh Santepheap', sans-serif; /* Match font */
      color: #333;
      text-align: center;
  }
  
  .popup-close-icon {
    position: absolute;
    top: 15px; /* Adjust position */
    right: 15px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    color: #aaa; /* Lighter color */
    transition: color 0.2s ease;
  }
  .popup-close-icon svg {
      width: 28px; /* Larger icon */
      height: 28px;
      display: block;
  }
  .popup-close-icon:hover {
    color: #333; /* Darken on hover */
  }
  
  /* Fade animation for the modal */
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }
  
  /* Optional: Animation for the content appearance */
  .modal-fade-enter-active .popup-content,
  .modal-fade-leave-active .popup-content {
    transition: all 0.3s ease;
  }
  
  .modal-fade-enter-from .popup-content,
  .modal-fade-leave-to .popup-content {
    transform: translateY(-20px); /* Slide down effect */
  }
  
  </style>