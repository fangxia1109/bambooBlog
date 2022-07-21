// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui' // api: https://github.com/ElemeFE/element
import 'element-ui/lib/theme-chalk/index.css' // element css
import VueCookie from 'vue-cookie' // api: https://github.com/alfhen/vue-cookie
import store from '@/store' // api: https://github.com/vuejs/vuex
import router from './router'
import '@/assets/css/index.scss' // global css
import i18n from './assets/lang'

Vue.config.productionTip = false
Vue.use(VueCookie)
Vue.use(ElementUI)
console.log(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
