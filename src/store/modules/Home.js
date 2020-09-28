const state = () => ({
  blogListViewState: false,
  blogProductsList: [],
  whetherCollectionOfPersonal: false,
})
const getters = {
  blogListViewState: (state) => state.blogListViewState,
  blogProdctList: (state) => state.blogProductsList,
  whetherCollectionOfPersonal: (state) => state.whetherCollectionOfPersonal,
}
const mutations = {
  setBlogListViewState(state, params) {
    state.blogListViewState = params.blogListViewState
  },
  setBlogProductList(state, params) {
    state.blogProductsList = params.blogProductsList
  },
  privacyGuidanceAgreement(state, params) {
    state.whetherCollectionOfPersonal = params.whetherCollectionOfPersonal
  },
}
const actions = {
  SET_BLOG_LIST_VIEW_STATE: ({ commit }, params) => new Promise((resolve) => {
    commit('setBlogListViewState', params)
    resolve()
  }),
  CALL_BLOG_PRODUCT_LIST: ({ commit }) => new Promise((resolve) => {
    const productList = [{
      uid: 1,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      date: '2020.8.7',
      target: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 2,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      date: '2020.8.7',
      target: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 3,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      date: '2020.8.7',
      target: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 4,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      date: '2020.8.7',
      target: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 5,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      date: '2020.8.7',
      target: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }]
    commit('setBlogProductList', productList)
    resolve()
  }),
  SET_PRIVACY_GUIDANCE_AGREEMENT: ({ commit }, params) => new Promise((resolve) => {
    commit('privacyGuidanceAgreement', params)
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
