import Mock from 'mockjs'
import homeapi from './home'

// 设置200-2000延时请求时间
Mock.setup({
  timeout: '200-2000',
})

// 首页相关:路径是/home/getHomeData
Mock.mock(/\/home\/getHomeData/, 'get', homeapi.getHomeData)
