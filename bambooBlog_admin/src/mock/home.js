import Mock from 'mockjs'

const getHomeData = () => {
  return {
    code: 2000,
    data: {
      tagDataList: [
        {
          type: '音乐',
          Number: Mock.Random.float(1000, 10000, 0, 3),
        },
        {
          type: '动漫',
          Number: Mock.Random.float(1000, 10000, 0, 3),
        },
        {
          type: '技术',
          Number: Mock.Random.float(1000, 10000, 0, 3),
        },
        {
          type: '摄影',
          Number: Mock.Random.float(1000, 10000, 0, 3),
        },
        {
          type: '工作',
          Number: Mock.Random.float(1000, 10000, 0, 3),
        },
      ],
    },
  }
}

export default {
  getHomeData,
}
