<template>
  <div style="height: 100%">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
    >
      <el-menu-item
        v-for="(route, index) in asideNoChildMenu"
        :key="index"
        :index="route.path"
        @click="changeMenu(route)"
      >
        <el-icon>
          <component :is="route.meta.icon" />
        </el-icon>
        <span>{{ route.meta.title }}</span>
      </el-menu-item>
      <el-sub-menu
        v-for="(route, index) in asideHasChildMenu"
        :key="index"
        :index="route.path"
      >
        <template #title>
          <el-icon><component :is="route.meta.icon" /></el-icon>
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item-group
          v-for="(subRoute, subIndex) in route.children"
          :key="subIndex"
        >
          <el-menu-item :index="subRoute.path" @click="changeMenu(subRoute)">
            <el-icon><component :is="subRoute.meta.icon" /></el-icon>
            <span>{{ subRoute.meta.title }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {},
  setup() {
    let store = useStore()
    let isCollapse = computed(() => store.state.tabMenu.isCollapse)
    let asideMenu = [
      {
        path: '/',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'House',
        },
      },
      {
        path: '/User',
        meta: {
          title: '用户管理',
          icon: 'User',
        },
        children: [
          {
            path: '/User',
            name: 'user',
            meta: {
              title: '用户列表',
              icon: 'List',
            },
          },
        ],
      },
      {
        path: '/Blog',
        meta: {
          title: '博客列表管理',
          icon: 'Notebook',
        },
        children: [
          {
            path: '/Blog',
            name: 'blog',
            meta: {
              title: '博客列表',
              icon: 'List',
            },
          },
        ],
      },
    ]
    let asideNoChildMenu = asideMenu.filter((item) => !item.children)
    let asideHasChildMenu = asideMenu.filter((item) => item.children)
    let route = useRoute()
    let activeMenu = computed(() => {
      let { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })
    let router = useRouter()
    function changeMenu(item) {
      router.push({ name: item.name })
      store.commit('tabMenu/selectMenu', item)
      store.commit('tabMenu/changeTag', item)
    }
    return {
      isCollapse,
      activeMenu,
      changeMenu,
      asideNoChildMenu,
      asideHasChildMenu,
    }
  },
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
</style>
<style lang="scss">
// .el-menu--collapse .el-menu-item span,
// .el-menu--collapse .el-sub-menu__title span {
//   height: 0;
//   width: 0;
//   overflow: hidden;
//   visibility: hidden;
//   display: inline-block;
// }
// .el-menu--collapse .el-sub-menu__icon-arrow {
//   display: none;
// }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
