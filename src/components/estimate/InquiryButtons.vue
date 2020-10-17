<template>
  <transition
    class="component-fade"
  >
    <div
      v-show="values.check.lifeCycle"
      class="component"
    >
      <div
        class="component__inner"
      >
        <button
          v-show="presentEstimateInquiryState !== Number(10)"
          class="previous-button left-button-fade-in"
          @click="pressPreviousButton"
        >
          {{ values.words.previous }}
        </button>
        <button
          v-show="presentEstimateInquiryState !== Number(15)"
          class="next-button right-button-fade-in"
          @click="validationForm"
        >
          {{ values.words.next }}
        </button>
        <button
          v-show="presentEstimateInquiryState === Number(15)"
          class="apply-button right-button-fade-in"
          @click="pressApplyButton"
        >
          {{ values.words.finish }}
        </button>
        <hhr-clear-both />
      </div>
    </div>
  </transition>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'

export default {
  name: 'InquiryButtons',
  components: {
    HhrClearBoth,
  },
  props: {
    state: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      values: {
        words: {
          previous: '이전',
          next: '다음',
          finish: '제출',
        },
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  computed: {
    presentEstimateInquiryState() {
      return this.$store.getters['estimate/presentEstimateInquiryState']
    },
    addressValidation() {
      return this.$store.getters['estimate/addressValidation']
    },
    inquiryTypeValidation() {
      return this.$store.getters['estimate/inquiryTypeValidation']
    },
    phoneNumberValidation() {
      return this.$store.getters['estimate/phoneNumberValidation']
    },
    whetherCollectionOfPersonal() {
      return this.$store.getters['estimate/whetherCollectionOfPersonal']
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.values.check.lifeCycle = true
    })
  },
  methods: {
    callParentsForceDomRenderingUpdate() {
      this.$root.$emit('DomForceRendering')
    },
    pressPreviousButton() {
      this.$store.dispatch('estimate/PRESS_PREVIOUS_BUTTON')
        .then(() => {
          this.callParentsForceDomRenderingUpdate()
        })
    },
    pressNextButton() {
      this.$forceUpdate()
      this.$store.dispatch('estimate/PRESS_NEXT_BUTTON')
        .then(() => {
          this.callParentsForceDomRenderingUpdate()
        })
    },
    validationForm() {
      const state = this.presentEstimateInquiryState
      this.$store.dispatch('estimate/VALIDATE_APPLY_FORM', { state })
        .then(() => {
          switch (state) {
            case Number(10):
              if (this.whetherCollectionOfPersonal) this.pressNextButton()
              break
            case Number(11):
              if (this.addressValidation) this.pressNextButton()
              break
            case Number(12):
              if (this.inquiryTypeValidation) this.pressNextButton()
              break
            case Number(13):
              this.pressNextButton()
              break
            case Number(14):
              if (this.phoneNumberValidation) this.pressNextButton()
              break
            default:
              break
          }
        })
    },
    pressApplyButton() {
    // TODO: whole validation before apply form
    // this.$store.dispatch('estimate/PRESS_APPLY_BUTTON')
    //   .then(() => {
    //     this.callParentsForceDomRenderingUpdate()
    //   })
      window.alert('개발중인 기능입니다')
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local util
    .left-button-fade-in {
        @include primary-fade-in-left-to-right(1, 0.5);

    }

    .right-button-fade-in {
        @include primary-fade-in-right-to-left(1, 0.5);
    }

    // @Classes
    .component {
        height: 100%;
        &__inner {
            float: right;
            height: 100%;
            padding: 65px 0 45px 0;
            @media (max-width: $screen-mobile) {
                clear: both;
                width: 100%;
            }
            .previous-button {
                border: 0;
                outline: none;
                display: inline-block;
                font-size: 30px;
                margin-right: 25px;
                letter-spacing: 2px;
                transition: 1s;
                -webkit-tap-highlight-color: transparent;
                @media (max-width: $screen-mobile) {
                    float: left;
                    padding-left: 15px;
                }
                &:hover {
                    @media (max-width: $screen-desktop) {
                        font-weight: 500;
                        cursor: pointer;
                    }
                }

            }
            .next-button {
                border: 0;
                outline: none;
                display: inline-block;
                font-size: 30px;
                letter-spacing: 2px;
                transition: 1s;
                -webkit-tap-highlight-color: transparent;
                @media (max-width: $screen-mobile) {
                    float: right;
                    padding-right: 15px;
                }
                &:hover {
                    @media (max-width: $screen-desktop) {
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
            .apply-button {
                border: 0;
                outline: none;
                display: inline-block;
                font-size: 30px;
                letter-spacing: 2px;
                transition: 0.4s;
                @media (max-width: $screen-mobile) {
                    float: right;
                    padding-right: 15px;
                }
                &:hover {
                    @media (max-width: $screen-desktop) {
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
