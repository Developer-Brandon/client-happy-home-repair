const state = () => ({
  ceoImageAddress: '',
  ceoGreetingTitle: '',
  ceoGreetingContents: '',
  ceoInfo: {},
})
const getters = {
  ceoImageAddress: (state) => state.ceoImageAddress,
  ceoGreetingTitle: (state) => state.ceoGreetingTitle,
  ceoGreetingContents: (state) => state.ceoGreetingContents,
  ceoInfo: (state) => state.ceoInfo,
}
const mutations = {
  setAboutPageData(state, params) {
    //
    state.ceoGreetingTitle = params.ceoGreetingTitle
    state.ceoGreetingContents = params.ceoGreetingContents
    //
    state.ceoInfo.ceoName = params.ceoName
    state.ceoInfo.industryType = params.industryType
    state.ceoInfo.majorJob = params.majorJob
    state.ceoInfo.address = params.address
    state.ceoInfo.phoneNumber = params.phoneNumber
    state.ceoInfo.email = params.email
  },
}
const actions = {
  CALL_CEO_INFO: ({ commit }) => new Promise((resolve) => {
    const aboutPageData = {
      ceoGreetingTitle: '안녕하십니까, 평소 저희 <span class="hhr-blue">해리 홈 리페어</span>를 어쩌구 저쩌구...',
      ceoGreetingContents: `<br />어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌<br />
      구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구....<br />
      <br />
      어쩌구 / 저쩌구 / 어쩌구 / 저쩌구<br />
      구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저<br />
      쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구<br />
      저쩌구어쩌구저쩌구어쩌구저쩌구..어쩌구저쩌구어쩌구<br />
      저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저<br />
      쩌구어쩌구저쩌구어쩌구저쩌구, 어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구!<br />
      <br />
      <br />
      <br />
      쓸말이 이렇게 많이 없으려나?<br />
      어쩌구 저쩌구<br />
      그럼 사진의 세로크기를 줄이면...<br />
      어쩌구 저쩌구<br />`,
      ceoName: '이성일',
      industryType: '리모델링/집수링',
      majorJob: '샤시수리/방문교체/방충망/페인트',
      address: '인천시 부평구 경인로 705',
      phoneNumber: '010-9018-5553',
      email: 'lain4444@naver.com',
    }
    commit('setAboutPageData', aboutPageData)
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
