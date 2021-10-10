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
    ]
  },
  mutations: {
    toggleSidebar: state => {
      state.sidebar = !state.sidebar;
    }
  },
  actions: {},
  modules: {},
});
