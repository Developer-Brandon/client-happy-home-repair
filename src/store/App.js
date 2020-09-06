const state = () => ({
  modalHasOpened: false,
})
const getters = {
  getModalState: (state) => state.modalHasOpened,
}
const mutations = {
  setModalState(state) {
    state.modalHasOpened = state
  },
}
const actions = {
  SET_MODAL_STATE: ({ commit }, params) => {
    commit('setModalState', params)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
