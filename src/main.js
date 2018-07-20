import Vue from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import { store } from './scripts/store';
import router from './scripts/router';
import VueCookie from 'vue-cookie';
import vueVimeoPlayer from 'vue-vimeo-player';

Vue.use(VueCookie);
Vue.use(vueVimeoPlayer);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
