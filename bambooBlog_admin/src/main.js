import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/reset.scss'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import VueParticles from 'vue-particles'
import * as ElIcons from '@element-plus/icons'

const Vue = createApp(App)
for (const name in ElIcons) {
  Vue.component(name, ElIcons[name])
}

Vue.config.devtools = true

Vue.use(ElementUI)
Vue.use(VueParticles)

Vue.use(store).use(router).mount('#app')
