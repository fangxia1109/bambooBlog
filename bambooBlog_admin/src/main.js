import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus'
import VueParticles from 'vue-particles'
import * as ElIcons from '@element-plus/icons'
import '@/assets/scss/reset.scss'
import 'element-plus/dist/index.css'
import api from '@/api/axios'
import './mock'

const Vue = createApp(App)
for (const name in ElIcons) {
  Vue.component(name, ElIcons[name])
}

Vue.config.devtools = true

Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.config.globalProperties.$api = api
console.log(Vue)

Vue.use(store).use(router).mount('#app')
