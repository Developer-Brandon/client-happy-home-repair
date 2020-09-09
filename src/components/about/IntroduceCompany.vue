<template>
  <div class="introduce-company">
    <div class="introduce-company__inner">
      <hhr-page-title title="회사소개" />
      <div class="contents">
        <hhr-simple-table :table-list="introduceCompanyList" />
      </div>
    </div>
  </div>
</template>

<script>
import HhrPageTitle from '@/components/util/HhrPageTitle.vue'
import HhrSimpleTable from '@/components/util/HhrSimpleTable.vue'

export default {
  name: 'IntroduceCompany',
  components: {
    HhrPageTitle,
    HhrSimpleTable,
  },
  data() {
    return {
      introduceCompanyList: [
        {
          attribute: '대표이사',
          contents: '이성일',
        },
        {
          attribute: '사업분야',
          contents: '리모델링/집수리',
        },
        {
          attribute: '주요업종',
          contents: '샤시수리/방문교체/방충망/페인트',
        },
        {
          attribute: '주소',
          contents: '인천시 부평구 경인로 705',
        },
        {
          attribute: '연락처',
          contents: '010-9018-5553',
        },
        {
          attribute: '이메일',
          contents: 'lain4444@naver.com',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
    .introduce-company {
        width: 100%;
        height: 100%;
        &__inner {
            width: 100%;
            height: 350px;
            margin-bottom: 100px;
            @media (max-width: $screen-mobile) {
                height: 100%;
                margin-bottom: 50px;
            }
            .contents {
                width: 100%;
                height: 250px;
                @media (max-width: $screen-mobile) {
                    height: 100%;
                }
            }
        }
    }
</style>
