<template>
  <header>
    <div class="l-content">
      <el-button plain :icon="Menu" size="small" @click="collapseMenu" />
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: stateObj.path }" v-if="stateObj">
          {{ stateObj.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      曦若
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-image :src="userImage" lazy />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="User">个人中心</el-dropdown-item>
            <el-dropdown-item :icon="SwitchButton">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {
  ArrowRight,
  Menu,
  User,
  Edit,
  SwitchButton,
} from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    let userImage = require('../assets/images/2.jpeg')
    let store = useStore()
    let stateObj = computed(() => {
      return store.state.tabMenu.currentMenu
    })
    function collapseMenu() {
      store.commit('tabMenu/collapseMenu')
    }
    return {
      ArrowRight,
      Menu,
      User,
      Edit,
      SwitchButton,
      userImage,
      stateObj,
      collapseMenu,
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.l-content {
  display: flex;
  align-items: center;
}

.r-content {
  display: flex;
  align-items: center;
}

.r-content .el-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>

<style lang="scss">
.el-breadcrumb {
  margin-left: 10px;
}
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #a79f9f;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #ffffff;
    }
  }
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: #ffffff;
}
.el-breadcrumb__inner a:hover,
.el-breadcrumb__inner.is-link:hover {
  color: #ffffff;
}
</style>
