const state = {
  ma: 1
}
const getters = {
  x: () => 3
}
const mutations = {
  xx(state, str) {
      console.log(3333)
    state.ma = str
  }
}
const actions = {}
export default {
  state,
  getters,
  actions,
  mutations
}
