<template>
  <div>首页数据</div>
</template>

<script>
import { getHomeData } from '@/api/apis/Home/home'
export default {
  setup() {
    let homeData = null
    function getData() {
      getHomeData().then((res) => {
        homeData = res.data
        console.log(homeData, 'homeData')
      })
    }
    getData()
    return {
      homeData,
    }
  },
}
</script>

<style lang="scss" scoped></style>
