const state = () => ({
  whenNextButtonClicked: false,
  presentEstimateInquiryState: 11, // TODO: Have to translate ENUM and Have to restore in JS COOKIE
  presentEstimateInquiry: {},
  estimateInquiryList: [
    {
      index: 1,
      state: 11,
      title: '어느 지역에서 <br class="mobile-visible-block-only"/>문의하고 계신가요?',
      subTitle: '수리하고 싶으신<br class="mobile-visible-block-only"/> 시/구/도를 입력해주세요.',
      announcement: '<span class="desktop-visible-inline-only">* </span>입력을 원하지 않으시면, \'구\'까지만 입력해주세요.',
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
  estimateInquiryErrorMsgObject: {
    locationValidationErrorMsg: '시와 구까지 입력해주셔야합니다.',
    inquiryValidationErrorMsg: '문의 유형은 꼭 선택해주셔야합니다.',
    phoneNumberErrorMsg: '연락처는 필수 입력사항입니다.',
  },
  addressSi: '',
  addressKu: '',
  addressDo: '',
  addressValidation: false,
  inquiryType: '', // TODO: Have to translate ENUM
  inquiryTypeValidation: false,
  detailInquiry: '',
  email: '',
  emailValidation: false,
  phoneNumber: '01084302253',
  phoneNumberValidation: false,
  uploadFilePath: '',
  uploadFileValidation: false,
})
const getters = {
  whenNextButtonClicked: (state) => state.whenNextButtonClicked,
  presentEstimateInquiryState: (state) => state.presentEstimateInquiryState,
  presentEstimateInquiry: (state) => state.presentEstimateInquiry,
  estimateInquiryList: (state) => state.estimateInquiryList,
  estimateInquiryErrorMsgObject: (state) => state.estimateInquiryErrorMsgObject,
  addressSi: (state) => state.addressSi,
  addressKu: (state) => state.addressKu,
  addressDo: (state) => state.addressDo,
  addressValidation: (state) => state.addressValidation,
  inquiryType: (state) => state.inquiryType,
  inquiryTypeValidation: (state) => state.inquiryTypeValidation,
  detailInquiry: (state) => state.detailInquiry,
  email: (state) => state.email,
  emailValidation: (state) => state.emailValidation,
  phoneNumber: (state) => state.phoneNumber,
  phoneNumberValidation: (state) => state.phoneNumberValidation,
  uploadFilePath: (state) => state.uploadFilePath,
  uploadFileValidation: (state) => state.uploadFileValidation,
}
const mutations = {
  toggleNextButtonClickedState(state, params) {
    state.whenNextButtonClicked = params.state
  },
  judgePresentStateForView(state) {
    _.mapValues(state.estimateInquiryList, (presentEstimateInquiryObj) => {
      if (state.presentEstimateInquiryState === presentEstimateInquiryObj.state) {
        state.presentEstimateInquiry = presentEstimateInquiryObj
      }
    })
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
  setAddressSi(state, params) {
    state.addressSi = params.si
  },
  setAddressKu(state, params) {
    state.addressKu = params.ku
  },
  setAddressDo(state, params) {
    state.addressDo = params.aDo
  },
  validationAddress(state) {
    if (state.addressSi && state.addressKu) {
      state.addressValidation = true
    } else {
      state.addressValidation = false
    }
  },
  setInquiryType(state, params) {
    state.inquiryType = params.inquiryType
  },
  validationInquiryType(state) {
    if (state.inquiryType) {
      state.inquiryTypeValidation = true
    } else {
      state.inquiryTypeValidation = false
    }
  },
  setDetailInquiry(state, params) {
    state.detailInquiry = params.detailInquiry
  },
  setEmail(state, params) {
    state.email = params.email
  },
}
const actions = {
  JUDGE_PRESENT_STATE: ({ commit }) => new Promise((resolve) => {
    commit('judgePresentStateForView')
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
  SET_INQUIRY_TYPE: ({ commit }, params) => new Promise((resolve) => {
    commit('setInquiryType', params)
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
  VALIDATE_APPLY_FORM: ({ commit }, params) => new Promise((resolve) => {
    switch (params.state) {
      case 11:
        commit('validationAddress')
        commit('toggleNextButtonClickedState', { state: true })
        break
      case 12:
        commit('validationInquiryType')
        commit('toggleNextButtonClickedState', { state: true })
        break
      case 13:
        commit('validationInquiryType')
        commit('toggleNextButtonClickedState', { state: true })
        break
      default:
        break
    }
    resolve()
  }),
  PRESS_PREVIOUS_BUTTON: ({ commit }) => new Promise((resolve) => {
    commit('minusPresentState')
    commit('judgePresentStateForView')
    resolve()
  }),
  PRESS_NEXT_BUTTON: ({ commit }) => new Promise((resolve) => {
    commit('plusPresentState')
    commit('judgePresentStateForView')
    commit('toggleNextButtonClickedState', { state: false })
    resolve()
  }),
  PRESS_APPLY_BUTTON: ({ commit }) => new Promise((resolve) => {
    commit('')
    commit('')
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
