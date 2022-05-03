import Mock from 'mockjs'

const getHomeData = () => {
  return {
    code: 2000,
    data: {
      tagDataList: [
        {
          name: '音乐',
          value: Mock.Random.float(1000, 10000, 0, 3),
        },
        {
          name: '动漫',
          value: Mock.Random.float(1000, 10000, 0, 3),
        },
        {
          name: '技术',
          value: Mock.Random.float(1000, 10000, 0, 3),
        },
        {
          name: '摄影',
          value: Mock.Random.float(1000, 10000, 0, 3),
        },
        {
          name: '工作',
          value: Mock.Random.float(1000, 10000, 0, 3),
        },
      ],
    },
  }
}

export default {
  getHomeData,
}
