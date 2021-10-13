import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: false,
    products: [
      require('../assets/images/image-product-1.jpg'),
      require('../assets/images/image-product-2.jpg'), 
      require('../assets/images/image-product-3.jpg'),
      require('../assets/images/image-product-4.jpg')
    ],
    productThumbnails: [
      require('../assets/images/image-product-1-thumbnail.jpg'),
      require('../assets/images/image-product-2-thumbnail.jpg'), 
      require('../assets/images/image-product-3-thumbnail.jpg'),
      require('../assets/images/image-product-4-thumbnail.jpg')
    ],
    cart: false,
    count: 0,
    ordered: 0,
    productCost: 250,
    cartProduct: false,
    lightbox: false
  },
  getters: {
    discountCost: state => {
      return state.productCost * 0.5
    }
  },
  mutations: {
    toggleSidebar: state => {
      state.sidebar = !state.sidebar;
    },
    toggleCart: state => {
      state.cart = !state.cart;
    },
    increaseCount: state => {
      state.count++
    },
    reduceCount: state => {
      state.count--
      if( state.count < 0 ) {
        state.count = 0
      }
    },
    showCartProduct: state => {
      state.ordered = state.ordered + state.count;
      if( state.count > 0) {
        state.cartProduct = true
        state.count = 0
      }
    },
    cartProductDelete: state => {
      state.cartProduct = false;
      state.ordered = 0
    },
    toggleLightbox: state => {
      state.lightbox = !state.lightbox;
    }
  },
  actions: {},
  modules: {},
});
