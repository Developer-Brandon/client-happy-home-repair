const state = () => ({
  // 상태값 관리에 대한 깊은 고민이 필요합니다
  presentEstimateInquiryState: 11, // 추후 jsCookie 로 바뀔 로직입니다.
  presentEstimateInquiry: {},
  estimateInquiryList: [
    {
      index: 1,
      state: 11,
      title: '어느 지역에서 <br class="mobile-visible-block-only"/>문의하고 계신가요?',
      subTitle: '수리하고 싶으신<br class="mobile-visible-block-only"/> 시/구/도를 입력해주세요.',
      announcement: '<span class="desktop-visible-inline-only">* </span>입력을 원하지 않으시면, 시와 구까지만 입력해주세요.',
    },
    {
      index: 2,
      state: 12,
      title: '시공 유형이<br class="mobile-visible-block-only"/> 어떻게 되시나요?',
      subTitle: '수리하고 싶으신<br class="mobile-visible-block-only"/>시공 유형을 선택해주세요.',
      announcement: '<span class="desktop-visible-inline-only">* </span>필수 입력 사항입니다.',
    },
    {
      index: 3,
      state: 13,
      title: '그 외 문의사항이<br class="mobile-visible-block-only"/> 있으신가요?',
      subTitle: '간단하게 적어주시면<br class="mobile-visible-block-only"/> 상담에 도움이 되요.',
      announcement: '',
    },
    {
      index: 4,
      state: 14,
      title: '이메일을<br class="mobile-visible-block-only"/> 입력해주세요.',
      subTitle: '준비중인 기능입니다',
      announcement: '',
    },
    {
      index: 5,
      state: 15,
      title: '연락처를<br class="mobile-visible-block-only"/> 입력해주세요.',
      subTitle: '준비중인 기능입니다.',
      announcement: '',
    },
    {
      index: 6,
      state: 16,
      title: '시공을<br class="mobile-visible-block-only"/> 원하시는 곳의<br class="mobile-visible-block-only"/> 사진을 첨부해주세요.',
      subTitle: '준비중인 기능입니다.',
      announcement: '',
    },
  ],
  addressSi: '',
  addressKu: '',
  addressDo: '',
  detailInquiry: '',
  email: '',
})
const getters = {
  presentEstimateInquiryState: (state) => state.presentEstimateInquiryState,
  presentEstimateInquiry: (state) => state.presentEstimateInquiry,
  estimateInquiryList: (state) => state.estimateInquiryList,
  addressSi: (state) => state.addressSi,
  addressKu: (state) => state.addressKu,
  addressDo: (state) => state.addressDo,
  detailInquiry: (state) => state.detailInquiry,
  email: (state) => state.email,
}
const mutations = {
  judgePresentState(state) {
    _.mapValues(state.estimateInquiryList, (presentEstimateInquiryObj) => {
      if (state.presentEstimateInquiryState === presentEstimateInquiryObj.state) {
        state.presentEstimateInquiry = presentEstimateInquiryObj
      }
    })
  },
  setAddressSi(state, params) {
    state.addressSi = params.si
  },
  setAddressKu(state, params) {
    state.addressKu = params.ku
  },
  setAddressDo(state, params) {
    state.addressDo = params.aDo
  },
  setDetailInquiry(state, params) {
    state.detailInquiry = params.detailInquiry
  },
  setEmail(state, params) {
    state.email = params.email
  },
  minusPresentState(state) {
    if (state.presentEstimateInquiryState >= 11 && state.presentEstimateInquiryState <= 16) { // 사이값을 정확하게 지정해야할 듯
      state.presentEstimateInquiryState -= 1
    }
  },
  plusPresentState(state) {
    if (state.presentEstimateInquiryState >= 11 && state.presentEstimateInquiryState <= 16) { // 사이값을 정확하게 지정해야할 듯
      state.presentEstimateInquiryState += 1
    }
  },
}
const actions = {
  JUDGE_PRESENT_STATE: ({ commit }) => new Promise((resolve) => {
    commit('judgePresentState')
    resolve()
  }),
  SET_ADDRESS_SI: ({ commit }, params) => new Promise((resolve) => {
    commit('setAddressSi', params)
    resolve()
  }),
  SET_ADDRESS_KU: ({ commit }, params) => new Promise((resolve) => {
    commit('setAddressKu', params)
    resolve()
  }),
  SET_ADDRESS_DO: ({ commit }, params) => new Promise((resolve) => {
    commit('setAddressDo', params)
    resolve()
  }),
  SET_DETAIL_INQUIRY: ({ commit }, params) => new Promise((resolve) => {
    commit('setDetailInquiry', params)
    resolve()
  }),
  SET_EMAIL: ({ commit }, params) => new Promise((resolve) => {
    commit('setEmail', params)
    resolve()
  }),
  PRESS_PREVIOUS_BUTTON: ({ commit }) => new Promise((resolve) => {
    commit('minusPresentState')
    commit('judgePresentState')
    resolve()
  }),
  PRESS_NEXT_BUTTON: ({ commit }) => new Promise((resolve) => {
    commit('plusPresentState')
    commit('judgePresentState')
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

// State 값 하나로 부분적으로 html의 렌더링이 다 바뀌게끔 개발
