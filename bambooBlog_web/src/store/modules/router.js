import { router } from '@/router'

const state = {
  routerList: []
}

const mutations = {
  SET_ROUTERLIST: (state, routerList) => {
    state.routerList = routerList
  }
}

const actions = {
  // 登录
  getRouterList ({ commit }, data) {
    const path = data
    return new Promise(resolve => {
      console.log(router)
      let list = router.filter(item => item.path === '/')[0].children // 一级路由
      let currentRouterList = list.filter(item1 => item1.path === path)[0].children // 当前一级路由下的子路由
      commit('SET_ROUTERLIST', currentRouterList)
      resolve(list)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
