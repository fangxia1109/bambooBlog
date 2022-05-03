import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 配置路由
  {
    path: '/Login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/Layout',
    name: 'layout',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home.vue'),
      },
      {
        path: '/Blog',
        name: 'blog',
        component: () => import('@/views/Blog/BlogList.vue'),
      },
      {
        path: '/User',
        name: 'user',
        component: () => import('@/views/User/UserList.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
