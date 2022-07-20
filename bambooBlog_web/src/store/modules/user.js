const state = {
  token: null
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  REMOVE_TOKEN: (state) => {
    state.token = null
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
