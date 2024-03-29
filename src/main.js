import Vue from 'vue'
import App from './App.vue'
import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import {i18n} from '@/i18n'
import router from '@/router'


Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
