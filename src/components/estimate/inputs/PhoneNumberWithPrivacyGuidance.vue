<template>
  <transition name="content-fade">
    <div
      v-if="presentEstimateInquiryState === Number(14)"
      class="wrap-phone-number"
    >
      <input
        v-model="phoneNumber"
        v-mask="'###-####-####'"
        autocomplete="off"
        placeholder="전화번호 입력"
        class="hhr-input phone-number"
        type="tel"
      />
      <hhr-clear-both />
      <span
        v-show="whenNextButtonClicked && !phoneNumberValidation && presentEstimateInquiryState === Number(14)"
        class="validation-error"
      >{{ estimateInquiryErrorMsgObject.phoneNumberErrorMsg }}</span>
      <div
        class="wrap-collection-of-personal-information"
      >
        <span
          class="collection-of-personal-information"
          v-html="collectionOfPersonalInformation"
        ></span>
      </div>
      <hhr-clear-both />
      <div style="text-align: right;">
        <input
          v-model="values.booleans.collectPersonalInformation"
          type="checkbox"
          class="custom-checkbox"
          :class="{'on': values.booleans.collectPersonalInformation,'off': !values.booleans.collectPersonalInformation}"
          @click="callHtmlPopUp"
        />
        <span
          class="announcement-with-checkbox"
          @click="toggleCollectPersonalInformation"
        >개인정보 수집에 동의합니다.</span>
      </div>
      <span
        v-show="whenNextButtonClicked && !whetherCollectionOfPersonal && presentEstimateInquiryState === Number(14)"
        class="validation-error"
      >{{ estimateInquiryErrorMsgObject.whetherCollectPersonalInfoMsg }}</span>
    </div>
  </transition>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'

export default {
  name: 'PhoneNumberWithPrivacyGuidance',
  components: {
    HhrClearBoth,
  },
  data() {
    return {
      values: {
        booleans: {
          collectPersonalInformation: false,
        },
      },
      masks: {
        phoneNumber: '###/####/####',
      },
    }
  },
  computed: {
    whenNextButtonClicked() {
      return this.$store.getters['estimate/whenNextButtonClicked']
    },
    presentEstimateInquiryState() {
      return this.$store.getters['estimate/presentEstimateInquiryState']
    },
    estimateInquiryErrorMsgObject() {
      return this.$store.getters['estimate/estimateInquiryErrorMsgObject']
    },
    phoneNumber: {
      get() {
        return this.$store.getters['estimate/phoneNumber']
      },
      set(phoneNumber) {
        this.$store.dispatch('estimate/SET_PHONE_NUMBER', { phoneNumber })
      },
    },
    phoneNumberValidation() {
      return this.$store.getters['estimate/phoneNumberValidation']
    },
    collectionOfPersonalInformation() {
      return this.$store.getters['estimate/collectionOfPersonalInformation']
    },
    whetherCollectionOfPersonal() {
      return this.$store.getters['estimate/whetherCollectionOfPersonal']
    },
  },
  watch: {
    'values.booleans.collectPersonalInformation': function (newValue) {
      const whetherCollectionOfPersonal = newValue
      this.$store.dispatch('estimate/SET_WHETHER_COLLECT_PERSONAL_INFO', { whetherCollectionOfPersonal })
    }
    ,
  },
  methods: {
    toggleCollectPersonalInformation() {
      this.values.booleans.collectPersonalInformation = !this.values.booleans.collectPersonalInformation
    },
    callHtmlPopUp() {
      // TODO: 약관을 간단하게 뿌려주는 모달 개발 예정
    }
    ,
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

    .custom-checkbox {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-bottom: 3px;
        margin-right: 10px;
        cursor: pointer;
        background-size: cover;
        &.on {
            background-image: url('~@/assets/images/icons/icon_check_hhr_blue_background.png');
        }
        &.off {
            background-image: url('~@/assets/images/icons/icon_check_gray_background.png');
        }
    }

    .announcement-with-checkbox {
        cursor: pointer;
    }

    // @Classes
    .wrap-phone-number {
        height: 230px;
        padding-top: 40px;
        @media (max-width: $screen-mobile) {
            height: 100%;
            padding-top: 20px;
        }
        .wrap-collection-of-personal-information {
            margin: 15px 0;
            width: 100%;
            height: 80px;
            @media (max-width: $screen-mobile) {
                height: 100%;
            }
            .collection-of-personal-information {
                display: block;
                width: 100%;
                height: 100%;
                font-size: 18px;
                line-height: 24px;
                color: black;
                background-color: $hhr-white;
                border: 1px solid $hhr-gray;
                font-weight: 200;
                border-radius: 3px;
                overflow-x: hidden;
                overflow-y: scroll;
                padding: 5px;
                @media (max-width: $screen-mobile) {
                    height: 250px;
                }
            }
        }
        .phone-number {
            width: 25%;
            text-align: center;
            float: right;
            @media (max-width: $screen-mobile) {
                width: 75%;
            }
        }
    }
</style>
