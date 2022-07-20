import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/layout.vue'
import VueRouter from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export const constantRoutes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      { 
        path: '/', 
        name: 'home',
        component: () => import('@/views/home/home'),
        meta: {
          title: 'home',
        }
      },//首页
      { 
        path: '/about', 
        name: 'about',
        component: () => import('@/views/about/about'),
        meta: {
          title: 'about'
        }
      },//关于我
      { 
        path: '/filemodel', 
        name: 'filemodel',
        component: () => import('@/views/filemodel/filemodel'),
        meta: {
          title: 'filemodel'
        }
      },//归档
      { 
        path: '/classification', 
        name: 'classification',
        component: () => import('@/views/classification/classification'),
        meta: {
          title: 'classification'
        }
      },//分类
      { 
        path: '/tags', 
        name: 'tags',
        component: () => import('@/views/tags/tags'),
        meta: {
          title: 'tags'
        }
      },//标签
      { 
        path: '/special', 
        name: 'special',
        component: () => import('@/views/special/special'),
        meta: {
          title: 'special'
        }
      },//专业
      { 
        path: '/messageboard',
        name: 'messageboard',
        component: () => import('@/views/messageboard/messageboard'),
        meta: {
          title: 'messageboard'
        }
      },//留言板
    ]
  },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/500', component: () => import('@/views/500'), hidden: true },
  { path: '/502', component: () => import('@/views/502'), hidden: true },
  { path: '/*', redirect: '/', hidden: true }
]
const router = new Router({
  // mode: 'history', // require service support
  routes: constantRoutes
})
console.log(router, 'router')
export default router