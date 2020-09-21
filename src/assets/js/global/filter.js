import Vue from 'vue'

Vue.filter('translateToKorean', (str) => {
  switch (str) {
    case 'ceoName':
      return '대표이사'
    case 'industryType':
      return '사업분야'
    case 'coreIndustry':
      return '주요산업'
    case 'address':
      return '주소'
    case 'phoneNumber':
      return '전화번호'
    case 'email':
      return '이메일'
    default:
      return 'You have to insert params!'
  }
})
