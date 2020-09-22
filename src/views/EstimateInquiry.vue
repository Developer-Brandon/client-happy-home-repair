<template>
  <transition name="page-fade">
    <div
      v-show="values.check.lifeCycle"
      ref="estimateSections"
      class="sections"
    >
      <section class="sections__inner">
        <div
          class="estimate"
          :class="{ 'location' : presentEstimateInquiryState === 11,
                    'repair-type' : presentEstimateInquiryState === 12,
                    'etc-inquiry' : presentEstimateInquiryState === 13,
                    'email' : presentEstimateInquiryState === 14,
                    'phone-number' : presentEstimateInquiryState === 15,
                    'photo-attach' : presentEstimateInquiryState === 16
          }"
        >
          <!-- 상단의 견적문의 제목/부제목/안내말이고 상태값에 따라 렌더링되는 안내말들이 달라집니다 -->
          <hhr-guidance />
          <hhr-clear-both />
          <!-- 상태값에 따라 렌더링 되는 입력란들이 달라집니다 -->
          <estimate-inputs />
          <hhr-clear-both />
          <!-- 저장되어 있는 상태값에 따라 렌더링 되는 버튼들이 달라집니다 -->
          <estimate-buttons />
          <hhr-clear-both />
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
import HhrGuidance from '@/components/util/HhrGuidance.vue'
import EstimateInputs from '@/components/estimate/InquiryInputs.vue'
import EstimateButtons from '@/components/estimate/InquiryButtons.vue'
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'

export default {
  name: 'EstimateInquiry',
  components: {
    HhrGuidance,
    EstimateInputs,
    EstimateButtons,
    HhrClearBoth,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: true,
        },
      },
    }
  },
  computed: {
    presentEstimateInquiryState() {
      return this.$store.getters['estimate/presentEstimateInquiryState']
    },
  },
  mounted() {
    // - For dom rendering
    this.$nextTick(() => {
      this.judgePresentState()
        .then(() => {
          this.values.check.lifeCycle = true
          this.$root.$on('DomForceRendering', () => {
            this.$forceUpdate()
            this.isScrollHaveToMoveToTop()
          })
        })
    })
  },
  methods: {
    judgePresentState() {
      return new Promise((resolve) => {
        this.$store.dispatch('estimate/JUDGE_PRESENT_STATE')
          .then(() => {
            resolve()
          })
      })
    },
    isScrollHaveToMoveToTop() {
      // - This code isn't working perfectly
      // window.scrollTo({ top: 0, behavior: 'smooth' })
      // - This code is working perfectly
      $('html, body').animate({ scrollTop: 0 }, 'slow')
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local util
    .default-msg {
        text-align: right;
        font-size: 13px;
    }

    .error-msg {
        text-align: right;
        font-size: 12px;
        color: $hhr-red;
    }

    // @Class
    .sections {
        display: block;
        width: 100%;
        min-height: 600px;
        background-size: 100% 100%;
        background: url('~@/assets/images/estimate/consulting2.png') center;
        @media (max-width: $screen-mobile) {
            margin: 0 auto;
            min-height: auto;
        }
        &__inner {
            width: 100%;
            height: 100%;
            padding: 80px 20px;
            max-width: $contents-width;
            margin: 0 auto;
            @media (max-width: $screen-mobile) {
                padding: 35px 10px;
                max-width: $screen-mobile;
            }
            .estimate {
                margin: 0 auto;
                padding: 45px 35px;
                width: 750px;
                height: 100%;
                @media (max-width: $screen-mobile) {
                    padding: 15px 10px;
                    background-color: transparent;
                    box-shadow: none;
                    border-radius: 0;
                    width: 100%;
                }
            }
        }
    }
</style>
