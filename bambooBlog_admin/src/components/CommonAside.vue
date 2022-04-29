<template>
  <div style="width: 200px; height: 100%">
    <!-- <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#79bbff"
      text-color="#fff"
      active-text-color="#0ff"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项一</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
export default {
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
  },
  setup() {
    let isCollapse = ref(false)
    return {
      isCollapse,
    }
  },
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
