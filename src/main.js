import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.filter('money', (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${parts.join('.')}`;
});
new Vue({
  router,
  // eslint-disable-next-line arrow-parens
  render: (h) => h(App),
}).$mount('#app');
