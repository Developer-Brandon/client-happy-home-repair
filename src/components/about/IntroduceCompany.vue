<template>
  <div
    v-if="values.check.lifeCycle"
    class="introduce-company"
  >
    <div class="introduce-company__inner">
      <hhr-page-title
        class="introduce-title-fade-in"
        title="회사소개"
      />
      <div class="contents introduce-table-fade-in">
        <hhr-simple-table :table-list="values.introduceCompanyList" />
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
        introduceCompanyList: [],
      },
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
        _.forEach(ceoInfo, (value, key) => {
          this.values.introduceCompanyList.push({
            attribute: key,
            contents: value,
          })
        })
        resolve()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local util
    .introduce-title-fade-in {
        @include primary-fade-in-top-to-bottom(2, 1.5)
    }

    .introduce-table-fade-in {
        @include primary-fade-in-bottom-to-top(2, 1.5)
    }

    // @Classes
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
