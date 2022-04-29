<template>
  <el-container>
    <el-aside width="200px"><common-aside>aside</common-aside></el-aside>
    <el-container>
      <el-header><common-header>header</common-header></el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
export default {
  name: 'home',
  components: {
    CommonAside,
    CommonHeader,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
</style>
