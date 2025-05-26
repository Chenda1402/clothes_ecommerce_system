<template>
  <div class="filter1">
    <div class="filter-child"></div>

    <div class="filter-inner">
      <div class="component-54-parent">
        <div v-for="(label, index) in sizes" :key="index" :class="label.class">
          <div class="one-size">{{ label.text }}</div>
        </div>

        <b class="sort-by">Sort by</b>
        <b class="size">Size</b>
        <b class="price-range">Price Range</b>
        <b class="color">Color</b>
        <b class="fit">Fit</b>

        <div class="sort-by1">
          <div v-for="sort in sortOptions" :key="sort.text" class="component-85-parent">
            <img class="component-85-icon" :src="sort.icon" alt="" />
            <div class="one-size">{{ sort.text }}</div>
          </div>
        </div>

        <div v-for="(color, index) in colors" :key="index" :class="color.class">
          <div :class="color.circleClass"></div>
          <div class="one-size-wrapper">
            <div class="one-size">{{ color.name }}</div>
          </div>
        </div>

        <div class="price-range1">
          <img class="price-range-child" src="Group 1171276609.svg" alt="" />
          <div class="group-parent">
            <img class="group-icon" src="Group 1171276606.svg" alt="" />
            <div class="div2">$</div>
            <img class="mask-group-icon" src="Mask group.svg" alt="" />
          </div>
        </div>

        <div class="div3">$10</div>
        <div class="div4">$500</div>
      </div>
    </div>

    <b class="filter2">Filter</b>
    <div class="filter-item"></div>
    <img class="vector-icon" src="" @click="onPopupClick" />

    <div class="clear">
      <div class="one-size">CLEAR</div>
    </div>
    <div class="apply">
      <div class="one-size">APPLY</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const onPopupClick = () => {
  // your logic here
};

const sizes = ref([
  { text: 'One size', class: 'component-54' },
  { text: 'Regular', class: 'component-72' },
  { text: '44', class: 'component-62' },
  { text: '38', class: 'component-58' },
  { text: 'Relax', class: 'component-74' },
  { text: 'S', class: 'component-63' },
  { text: '2XL', class: 'component-70' },
  { text: '24', class: 'component-55' },
  { text: 'Loose', class: 'component-75' },
  { text: 'Free size', class: 'component-64' },
  { text: '40', class: 'component-59' },
  { text: 'Straight', class: 'component-77' },
  { text: 'M', class: 'component-65' },
  { text: 'XS-XL', class: 'component-71' },
  { text: '32', class: 'component-56' },
  { text: 'Oversize', class: 'component-78' },
  { text: 'XXS', class: 'component-66' },
  { text: '41', class: 'component-60' },
  { text: 'Wide', class: 'component-80' },
  { text: 'L', class: 'component-67' },
  { text: '36', class: 'component-57' },
  { text: 'Slim', class: 'component-81' },
  { text: 'XS', class: 'component-68' },
  { text: '42', class: 'component-61' },
  { text: 'Skinny', class: 'component-83' },
  { text: 'XL', class: 'component-69' },
]);

const sortOptions = ref([
  { text: 'New items', icon: 'Component 85.svg' },
  { text: 'Price (High First)', icon: 'Component 86.svg' },
  { text: 'Price (Low First)', icon: 'Component 86.svg' },
  { text: 'Discount', icon: 'Component 86.svg' },
]);

const colors = ref([
  { name: 'Black', class: 'color1', circleClass: 'color-child' },
  { name: 'Cream', class: 'color2', circleClass: 'color-item' },
  { name: 'Green', class: 'color3', circleClass: 'color-inner' },
  { name: 'White', class: 'color4', circleClass: 'rectangle-div' },
  { name: 'Blue', class: 'color5', circleClass: 'color-child1' },
  { name: 'Orange', class: 'color6', circleClass: 'color-child2' },
  { name: 'Purple', class: 'color7', circleClass: 'color-child3' },
  { name: 'Yellow', class: 'color8', circleClass: 'color-child4' },
  { name: 'Brown', class: 'color9', circleClass: 'color-child5' },
  { name: 'Gray', class: 'color10', circleClass: 'color-child6' },
  { name: 'Red', class: 'color11', circleClass: 'color-child7' },
]);
</script>

<style scoped>
@import './global.css';
@import './Filter.css';
</style>
