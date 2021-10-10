<template>
  <div id="app">
    <sidebar />
    <div class="max-w-screen-xl md:m-auto">
      <top-header />
      <div class="md:flex md:mt-20 md:mx-auto">
        <product class="md:flex md:justify-center md:w-5/12" />
        <product-details class="md:w-5/12 md:ml-24"/>
      </div>
    </div>
  </div>
</template>

<script>
import header from './components/header.vue';
import product from './components/product.vue';
import details from './components/product-details.vue';
import sidebar from './components/sidebar.vue';
export default {
  components: {
    'top-header': header,
    product,
    'product-details': details,
    sidebar
  }

};
</script>