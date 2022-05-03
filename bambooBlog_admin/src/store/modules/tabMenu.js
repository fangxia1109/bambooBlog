let tabMenu = {
  namespaced: true,
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    tagList: [
      {
        path: '/Home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'House',
        },
      },
    ],
  },
  getters: {},
  mutations: {
    // 选择菜单
    selectMenu(state, value) {
      state.currentMenu = value.meta.title !== '首页' ? value : null
    },
    // 切换标签
    changeTag(state, value) {
      let result = state.tagList.findIndex(
        (item) => item.meta.title === value.meta.title
      )
      value.meta.title !== '首页' && result === -1
        ? state.tagList.push(value)
        : ''
    },
    // 关闭标签
    closeTag(state, value) {
      state.tagList.splice(state.tagList.indexOf(value), 1)
    },
    // 收缩菜单
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
  },
  actions: {},
}

export default tabMenu
