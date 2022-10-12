import HhrNetwork from '@/assets/js/network/HhrNetwork'

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
  setEstimateValue(state, params) {
    console.log('setEstimateValue', params)
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
 SEND_ESTATE_VALUES: ({commit}, params) => new Promise((resolve, reject) => {

    if (params.estimateLocate === 'seoul') {
      params.estimateLocate = 1
    } else if (params.estimateLocate === 'incheon') {
      params.estimateLocate = 2
    } else if (params.estimateLocate === 'gyeonggido') {
      params.estimateLocate = 3
    }

    if (params.estimateType === 'paint') {
      params.estimateType = 1
    } else if (params.estimateType === 'fix_window') {
      params.estimateType = 2
    } else if (params.estimateType === 'door') {
      params.estimateType = 3
    } else if (params.estimateType === 'middle_door') {
      params.estimateType = 4
    } else if (params.estimateType === 'etc') {
      params.estimateType = 5
    }

    const innerParamsForForm = {
      repairStateNo: 1,
      repairLocationNo: params.estimateLocate,
      repairTypeNo: params.estimateType,
      phoneNumber: params.phoneNumber,
      explanation: params.estimateDetail,
      userTypeEnum: 'CLIENT',
      agreeOrNotEnum: 'Y',
    }

    HhrNetwork.postEstimateValues(innerParamsForForm)
      .then((response) => {
        commit('setEstimateValue', response)
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
