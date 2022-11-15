import Vue from 'vue'
import Vuex from 'vuex'
// import products from '../components/mock/products.json'
import products from '../mock/products.json'
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        products: [],
      },
      mutations: {
        setProduct() {},
      },
      getters: {
        getProduct() {},
      },
      actions: {
        FETCH_PRODUCTS() {}
      },

})