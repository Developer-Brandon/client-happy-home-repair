<template>
  <div
    v-if="values.check.lifeCycle"
    class="introduce-company"
  >
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
      values: {
        check: {
          lifeCycle: false,
        },
      },
      introduceCompanyList: [{
        attribute: '대표이사',
        contents: '',
      },
      {
        attribute: '사업분야',
        contents: '',
      },
      {
        attribute: '주요업종',
        contents: '',
      },
      {
        attribute: '주소',
        contents: '',
      },
      {
        attribute: '연락처',
        contents: '',
      },
      {
        attribute: '이메일',
        contents: '',
      }],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
        .then(() => {
          this.values.check.lifeCycle = true
        })
    })
  },
  methods: {
    init() {
      return new Promise((resolve) => {
        const ceoInfo = this.getCeoInfo()
        this.getRevisedCeoInfo(ceoInfo)
          .then(() => {
            resolve()
          })
      })
    },
    getCeoInfo() {
      return this.$store.getters['about/ceoInfo']
    },
    getRevisedCeoInfo(ceoInfo) {
      return new Promise((resolve) => {
        // TODO: for문을 두번 사용하고 싶지 않은데, 간결하게 만들어서 리펙토링 하기
        _.forEach(ceoInfo, (value, key) => {
          _.forEach(this.introduceCompanyList, (introduceObject) => {
            if (key === introduceObject.attribute) {
              introduceObject.contents = value
            }
          })
        })
        resolve()
      })
    },
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
