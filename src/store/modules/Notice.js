const state = () => ({
  notice: {},
  noticeList: [],
})
const getters = {
  noticeList: (state) => state.noticeList,
}
const mutations = {
  setNoticeList(state, params) {
    state.noticeList = params
  },
  setNotice(state, params) {
    state.notice = params.notice
  },
}
const actions = {
  CALL_NOTICE_LIST: ({ commit }, params) => new Promise((resolve) => {
    commit('setNoticeList', params)
    resolve()
  }),
  CALL_NOTICE: ({ commit }, params) => new Promise((resolve) => {
    commit('setNotice', params)
    resolve()
  }),
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
