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
    state.ceoInfo.대표이사 = params.대표이사
    state.ceoInfo.사업분야 = params.사업분야
    state.ceoInfo.주요업종 = params.주요업종
    state.ceoInfo.주소 = params.주소
    state.ceoInfo.연락처 = params.연락처
    state.ceoInfo.이메일 = params.이메일
  },
}
const actions = {
  CALL_CEO_INFO: ({ commit }) => new Promise((resolve) => {
    const aboutPageData = {
      ceoGreetingTitle: '안녕하세요, <br />저희 <span class="hhr-blue">해피 홈 리페어</span>를 찾아주셔서 감사합니다.',
      ceoGreetingContents: `<br />문의사항이 있으신 분은 전화 주시고<br />
      작업중에 전화를 못받을 경우에는 문자를 남겨주세요.<br />
      원하시는 작업 내용과 사진을 몇장 첨부해주시면 됩니다.<br />
      <br />
      아파트나 빌라 등 개인주택과 상가, 빌딩 등 상업공간에 다수의 시공이 필요하신 분과,<br />
      유치원, 학교, 주민센터 등 관공서에 작업이 필요하신 분은 상담해주세요.
      <br />`,
      대표이사: '이성일',
      사업분야: '리모델링 / 집수리',
      주요업종: '샤시 / 목창 / 방문짝 / 방충망 / 페인트',
      주소: '인천시 부평구 경인로 705',
      연락처: '010-9018-5553',
      이메일: 'lain4444@naver.com',
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
