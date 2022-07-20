<template>
  <div class="body" id="body">
    <!-- 顶部 -->
    <top></top>
    <!-- 中部显示 -->
    <router-view></router-view>
    <!-- 底部 -->
    <foot></foot>
  </div>
</template>

<script>
import top from '@/components/top/index'
import foot from '@/components/foot/index'
export default {
  components: {
    top,
    foot
  }
  
}
</script>
<style>
.body {
  height: 100%;
  width: 100%;
  overflow: auto;
  background-image: url('~@/assets/img/bg.jpg');
  background-size: 100% 100%;
}
</style>