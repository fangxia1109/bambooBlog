<template>
  <div>
    <el-row class="home" :gutter="20">
      <el-col class="left" :span="8">
        <el-card shadow="hover" class="left-top">
          <div class="user">
            <img :src="userImg" alt="" class="userImg" />
            <div class="user-info">
              <p class="name">曦若</p>
              <p class="access">Admin</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登陆时间：<span>2022-07-18</span></p>
            <p>上次登录地点：<span>苏州</span></p>
          </div>
        </el-card>
        <el-card shadow="hover" class="left-bottom">
          <el-table :data="homeData.tableData">
            <el-table-column
              v-for="(item, index) in homeLabel"
              :key="index"
              :prop="item.prop"
              :label="item.label"
            ></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col class="right" :span="16">
        <div class="numTags">
          <el-card
            shadow="hover"
            v-for="(item, index) in tagsData"
            :key="index"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i class="icon" :style="{ backgroundColor: item.color }">
              <component :is="item.icon" />
            </i>
            <div class="detail">
              <p class="num">￥ {{ item.value }}</p>
              <p class="txt">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card shadow="hover" class="right-middle">
          <div style="height: 280px"></div>
        </el-card>
        <div class="right-bottom">
          <el-card shadow="hover">
            <div style="height: 260px"></div>
          </el-card>
          <el-card shadow="hover">
            <div style="height: 260px"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Echart from '@/components/Echart'
import { getHomeData } from '@/api/apis/Home/home'
import { onMounted, reactive } from '@vue/runtime-core'
export default {
  components: {
    Echart,
  },
  setup() {
    let userImg = require('@/assets/images/2.jpeg') //require会将路径识别成一个模块
    let tagsData = [
      {
        name: '今日支付订单',
        value: 1234,
        icon: 'SuccessFilled',
        color: '#2ec7c9',
      },
      {
        name: '今日收藏订单',
        value: 123,
        icon: 'StarFilled',
        color: '#ffb980',
      },
      {
        name: '今日未支付订单',
        value: 1234,
        icon: 'GoodsFilled',
        color: '#5ab1ef',
      },
      {
        name: '本月支付订单',
        value: 1234,
        icon: 'SuccessFilled',
        color: '#2ec7c9',
      },
      {
        name: '本月收藏订单',
        value: 123,
        icon: 'StarFilled',
        color: '#ffb980',
      },
      {
        name: '本月未支付订单',
        value: 1234,
        icon: 'GoodsFilled',
        color: '#5ab1ef',
      },
    ]
    let homeData = reactive({
      tableData: [],
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    })
    onMounted(() => {
      getData()
    })
    function getData() {
      getHomeData().then((res) => {
        homeData.tableData = res.data.data.tagDataList
        console.log(homeData, 'homeData')
      })
    }
    return {
      homeData,
      homeLabel: [
        {
          prop: 'type',
          label: '类型',
        },
        {
          prop: 'Number',
          label: '数量',
        },
      ],
      userImg,
      tagsData,
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss';
</style>
