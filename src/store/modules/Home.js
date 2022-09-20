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
    state.blogProductsList = params
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
    commit('setBlogProductList', params)
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
