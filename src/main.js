/* jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';

import router from './router/index';
import store from './store/index';
import pinDirective from './shared/pin-directive';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
