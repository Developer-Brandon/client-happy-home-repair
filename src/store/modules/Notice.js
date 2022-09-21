const state = () => ({
  notice: {},
  noticeList: [],
  noticeCurrentPage: 1,
  noticeWholeCount: 1,
})
const getters = {
  noticeList: (state) => state.noticeList,
  noticeWholeCount: (state) => state.noticeWholeCount,
}
const mutations = {
  setNoticeList(state, params) {
    state.noticeList = params
  },
  setNoticeWholeCount(state, params) {
    state.noticeWholeCount = params
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
  CALL_NOTICE_WHOLE_CNT: ({ commit }, params) => new Promise((resolve) => {
    commit('setNoticeWholeCount', params)
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
