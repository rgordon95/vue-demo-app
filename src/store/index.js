/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [], // always initialize stuff here so vue can watch for it
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts');
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
  },
});
