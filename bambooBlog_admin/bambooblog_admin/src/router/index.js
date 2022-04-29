import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 配置路由
  {
    // '/': 'Home',
    name: 'home',
    path: '/',
    component: () => import('@/views/Home/Home.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
