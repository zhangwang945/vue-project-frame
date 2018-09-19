const state = {
  ma: 0
}
const getters = {
  maa: (state, getters, rootState, rootGetters) => {
    console.log(rootGetters);
    return 2
  }
}
const mutations = {
  xx(state, str) {
    console.log(222)
    state.ma = str
  }
}
const actions = {
  tt({
    commit
  }, str) {
    commit('xx', str, {
      root: true
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
