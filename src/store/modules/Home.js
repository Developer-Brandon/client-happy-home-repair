const state = () => ({
  blogProductsList: [],
  whetherCollectionOfPersonal: false,
  collectionOfPersonalInformation: '1.준비중입니다.<br />2.준비중입니다.<br />3.준비중입니다.<br />4.준비중입니다.<br />5.준비중입니다.<br />6.준비중입니다.<br />7.준비중입니다.<br />8.준비중입니다.<br />9.준비중입니다.<br />10.준비중입니다.',
})
const getters = {
  blogProductList: (state) => state.blogProductsList,
  whetherCollectionOfPersonal: (state) => state.whetherCollectionOfPersonal,
  collectionOfPersonalInformation: (state) => state.collectionOfPersonalInformation,
}
const mutations = {
  setBlogProductList(state, params) {
    state.blogProductsList = params.blogProductsList
  },
  privacyGuidanceAgreement(state, params) {
    state.whetherCollectionOfPersonal = params.whetherCollectionOfPersonal
  },
  setAnnouncePersonalInformationGuidance(state, params) {
    state.collectionOfPersonalInformation = params.collectionOfPersonalInformation
  },
}
const actions = {
  CALL_BLOG_PRODUCT_LIST: ({ commit }, params) => new Promise((resolve) => {
    // TODO: server 단 cron tab 관련 작업 후 연동
    // 이미지 제목, 이미지 주소, 이동 주소
    let blogProductsList = [{
      uid: 1,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 2,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 3,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 4,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 5,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 6,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 7,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 8,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 9,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 10,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 11,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 12,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 13,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 14,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }, {
      uid: 15,
      title: '현관의 삼연동 중문수리, 삼중문 처리작업',
      imageUrl: 'https://blogthumb.pstatic.net/MjAyMDA4MDdfMTY3/MDAxNTk2Nzg4NjIyMTM4.PJ9jgg05AmJh9PWIBAXPBm7smunuHkAq2Quj8AskKbYg.NjfpRIcmNRFivzuWENlpyFAa6wh5q33OSBKuhuoRT38g.JPEG.lain4444/20200806_154153.jpg?type=s2',
      targetUrl: 'https://blog.naver.com/PostView.nhn?blogId=lain4444&logNo=222054100175&redirect=Dlog',
    }]
    if (params.limit !== -1) blogProductsList = _.slice(blogProductsList, 0, params.limit)
    commit('setBlogProductList', { blogProductsList })
    resolve()
  }),
  SET_PRIVACY_GUIDANCE_AGREEMENT: ({ commit }, params) => new Promise((resolve) => {
    commit('privacyGuidanceAgreement', params)
    resolve()
  }),
  SET_PERSONAL_INFO_GUIDANCE: ({ commit }, params) => new Promise((resolve) => {
    commit('setAnnouncePersonalInformationGuidance', params)
    resolve()
  }),
  // eslint-disable-next-line
 SEND_FILE_TO_SERVER: ({commit}, params) => new Promise((resolve) => {
  // TODO: file 업로드 api가 만들어 진 후 연동
  // commit('', params)
    resolve()
  }),
  // eslint-disable-next-line
 SEND_ESTATE_VALUES: ({commit}, params) => new Promise((resolve) => {
  // TODO: estate 제출 api가 만들어 진 후 연동
  // commit('', params)
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
