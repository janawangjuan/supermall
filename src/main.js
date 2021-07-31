import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false
Vue.config.silent = false

// 事件总线
Vue.prototype.$bus = new Vue()
// 全局弱提示
import toastRegistry from "./utils/create.js";

// 引入router
import router from './router'
// 引入自定义router插件
// import router from './wrouter'

// 引入vuex
import store from './store'
// 引入自动以vuex
// import store from './wstore'

// 引入axios
import axios from './request/index'

Vue.prototype.$axios = axios




Vue.use(toastRegistry);

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
