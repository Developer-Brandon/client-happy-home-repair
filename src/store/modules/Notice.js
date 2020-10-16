const state = () => ({
  notice: {},
  noticeList: [],
})
const getters = {
  noticeList: (state) => state.noticeList,
}
const mutations = {
  setNoticeList(state, params) {
    // state.noticeList = params.noticeList
    console.log(params)
    state.noticeList = [{
      index: 0,
      title: '첫번째 공지사항입니다',
      contents: '첫번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 1,
      title: '두번째 공지사항입니다',
      contents: '두번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 2,
      title: '세번째 공지사항입니다',
      contents: '세번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 3,
      title: '네번째 공지사항입니다',
      contents: '네번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 4,
      title: '다섯번째 공지사항입니다',
      contents: '다섯번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 5,
      title: '여섯번째 공지사항입니다',
      contents: '여섯번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 6,
      title: '일곱번째 공지사항입니다',
      contents: '일곱번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    }]
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
