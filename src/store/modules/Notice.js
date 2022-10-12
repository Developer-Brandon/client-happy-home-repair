import HhrNetwork from '@/assets/js/network/HhrNetwork'

const state = () => ({
  noticeDetail: {},
  noticeList: [],
  noticeCurrentPage: 1,
  noticeWholeCount: 1,
})
const getters = {
  noticeDetailNo: (state) => state.noticeDetail.noticeNo,
  noticeDetailTitle: (state) => state.noticeDetail.title,
  noticeDetailContent: (state) => state.noticeDetail.content,
  noticeDetailRegDt: (state) => state.noticeDetail.regDt,
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
    state.noticeDetail = params.data
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
  CALL_NOTICE: ({ commit }, params) => new Promise((resolve, reject) => {
    HhrNetwork.getNotice(params.noticeNo)
      .then((response) => {
        commit('setNotice', response)
        resolve()
      }).catch((error) => {
        reject(error)
      })
  }),
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
