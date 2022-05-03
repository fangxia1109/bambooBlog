<template>
  <el-container style="height: 100%">
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <common-tab></common-tab>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonTab from '@/components/CommonTab.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'home',
  components: {
    CommonAside,
    CommonHeader,
    CommonTab,
  },
  setup() {
    let store = useStore()
    let isCollapse = computed(() => store.state.tabMenu.isCollapse)
    return {
      isCollapse,
    }
  },
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #504d4de2;
  height: 50px;
  color: #fff;
}
</style>
