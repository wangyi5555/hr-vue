import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.less'
import 'element-ui/lib/theme-chalk/base.css'
// eslint-disable-next-line no-unused-vars
import Axios from 'axios'

Axios.defaults.baseURL = '/api'
Axios.defaults.withCredentials = true

Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
