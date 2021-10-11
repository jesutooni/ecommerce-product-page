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
    productCost: 250.00,
    cartProduct: false
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
      if( state.count < 1 ) {
        state.cartProduct = false
      }
    },
    showCartProduct: state => {
      if( state.count > 0) {
        state.cartProduct = true
      }
    },
    cartProductDelete: state => {
      state.cartProduct = false
    }
  },
  actions: {},
  modules: {},
});
