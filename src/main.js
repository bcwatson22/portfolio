import Vue from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import { store } from './scripts/store';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
