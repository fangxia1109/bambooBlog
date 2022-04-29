import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/reset.scss'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'

const Vue = createApp(App)

Vue.use(ElementUI)

Vue.use(store).use(router).mount('#app')
