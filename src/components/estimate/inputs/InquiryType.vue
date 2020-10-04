<template>
  <transition name="content-fade">
    <div
      v-show="presentEstimateInquiryState === Number(12)"
      class="wrap-inquiry-type"
    >
      <div class="wrap-inquiry-type__inner">
        <div class="wrap-button">
          <button
            class="hhr-positive-reversal-button paint"
            :class="[{'add-button-active-style' : inquiryType === Number(111)},'']"
            @click="clickProduct(Number(111))"
          >
            친환경페인트
          </button>
        </div>
        <br class="mobile-visible-block-only" />
        <div class="wrap-button">
          <button
            class="hhr-positive-reversal-button window"
            :class="[{'add-button-active-style' : inquiryType === Number(222)},'']"
            @click="clickProduct(Number(222))"
          >
            창호수리/방충망
          </button>
        </div>
        <div class="wrap-button">
          <button
            class="hhr-positive-reversal-button door-class"
            :class="[{'add-button-active-style' : inquiryType === Number(333)},'']"
            @click="clickProduct(Number(333))"
          >
            문짝/문틀
          </button>
        </div>
      </div>
      <hhr-clear-both />
      <div class="wrap-inquiry-type__inner">
        <div class="wrap-button">
          <button
            class="hhr-positive-reversal-button door"
            :class="[{'add-button-active-style' : inquiryType === Number(444)},'']"
            @click="clickProduct(Number(444))"
          >
            중문/포켓도어
          </button>
        </div>
        <div class="wrap-button">
          <button
            class="hhr-positive-reversal-button fan"
            :class="[{'add-button-active-style' : inquiryType === Number(555)},'']"
            @click="clickProduct(Number(555))"
          >
            황풍기/선반/건조대
          </button>
        </div>
        <div class="wrap-button">
          <button
            class="hhr-positive-reversal-button etc"
            :class="[{'add-button-active-style' : inquiryType === Number(666)},'']"
            @click="clickProduct(Number(666))"
          >
            기타작업
          </button>
        </div>
      </div>
      <hhr-clear-both />
      <span
        v-show="whenNextButtonClicked && !inquiryTypeValidation && presentEstimateInquiryState === Number(12)"
        class="validation-error"
      >{{ estimateInquiryErrorMsgObject.inquiryValidationErrorMsg }}</span>
    </div>
  </transition>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'
import MatchMedia from '@/assets/js/resolution/matchMedia'

let matchMedia

export default {
  name: 'InquiryType',
  components: {
    HhrClearBoth,
  },
  computed: {
    estimateInquiryErrorMsgObject() {
      return this.$store.getters['estimate/estimateInquiryErrorMsgObject']
    },
    whenNextButtonClicked() {
      return this.$store.getters['estimate/whenNextButtonClicked']
    },
    presentEstimateInquiryState() {
      return this.$store.getters['estimate/presentEstimateInquiryState']
    },
    inquiryType() {
      return this.$store.getters['estimate/inquiryType']
    },
    inquiryTypeValidation() {
      return this.$store.getters['estimate/inquiryTypeValidation']
    },
    addressValidation() {
      return this.$store.getters['estimate/addressValidation']
    },
  },
  created() {
    matchMedia = new MatchMedia()
  },
  methods: {
    clickProduct(value) {
      let inquiryType = value
      if (this.inquiryType === inquiryType) inquiryType = ''
      this.$store.dispatch('estimate/SET_INQUIRY_TYPE', { inquiryType })
      if (matchMedia.isMobile) $('html, body').animate({ scrollTop: 350 }, 'slow')
    },
  },
}
</script>

<style lang="scss" scoped>
    // @LocalUtils
    @mixin common-error-message-style {
        padding: 10px 0;
        display: block;
        text-align: right;
        color: $hhr-red;
    }

    .validation-error {
        @include common-error-message-style;
        @include primary-shake;
    }

    .add-button-active-style {
        border: 1px solid $hhr-blue !important;
        border-radius: 5px !important;
        background-color: $hhr-deep-blue !important;
        color: $hhr-white !important;
        transition: 0.3s !important;
        font-weight: 700 !important;
    }

    // @Classes
    .wrap-inquiry-type {
        height: 80px;
        @media (max-width: $screen-mobile) {
            height: 100%;
            padding: 15px 0;
        }
        &__inner {
            padding: 15px 0;
            height: 100%;
            @media (max-width: $screen-mobile) {
                padding: 0;
            }
            .wrap-button {
                float: left;
                width: 33.3%;
                height: 100%;
                text-align: center;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    margin-bottom: 10px;
                    clear: both;
                }
                .paint {
                    width: 200px;
                    height: 50px;
                    font-size: 20px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                    }
                }
                .window {
                    width: 200px;
                    height: 50px;
                    font-size: 20px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                    }
                }
                .door-class {
                    width: 200px;
                    height: 50px;
                    font-size: 20px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                    }
                }
                .door {
                    width: 200px;
                    height: 50px;
                    font-size: 20px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                    }
                }
                .fan {
                    width: 200px;
                    height: 50px;
                    font-size: 20px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                    }
                }
                .etc {
                    width: 200px;
                    height: 50px;
                    font-size: 20px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
