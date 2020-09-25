<template>
  <transition name="content-fade">
    <div
      v-show="presentEstimateInquiryState === Number(11)"
      class="wrap-location"
    >
      <div class="wrap-location__inner">
        <input
          v-model="addressSi"
          maxlength="5"
          autocomplete="off"
          autofocus="off"
          placeholder="시 입력"
          class="hhr-input location-si"
          type="email"
        />
        <input
          v-model="addressKu"
          maxlength="5"
          autocomplete="off"
          autofocus="off"
          placeholder="구 입력"
          class="hhr-input location-ku"
          type="email"
        />
        <input
          v-model="addressDo"
          maxlength="5"
          autocomplete="off"
          autofocus="off"
          placeholder="도 입력"
          class="hhr-input location-do"
          type="email"
        /><br />
      </div>
      <hhr-clear-both />
      <span
        v-show="whenNextButtonClicked && !addressValidation && presentEstimateInquiryState === Number(11)"
        class="validation-error"
      >{{ estimateInquiryErrorMsgObject.locationValidationErrorMsg }}</span>
    </div>
  </transition>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'

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
    addressSi: {
      get() {
        return this.$store.getters['estimate/addressSi']
      },
      set(si) {
        this.$store.dispatch('estimate/SET_ADDRESS_SI', { si })
      },
    },
    addressKu: {
      get() {
        return this.$store.getters['estimate/addressKu']
      },
      set(ku) {
        this.$store.dispatch('estimate/SET_ADDRESS_KU', { ku })
      },
    },
    addressDo: {
      get() {
        return this.$store.getters['estimate/addressDo']
      },
      set(aDo) {
        this.$store.dispatch('estimate/SET_ADDRESS_DO', { aDo })
      },
    },
    addressValidation() {
      return this.$store.getters['estimate/addressValidation']
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

  // @Classes
    .wrap-location {
        width: 100%;
        height: 160px;
        padding-top: 40px;
        float: right;
        @media (max-width: $screen-mobile) {
            height: 90px;
            padding-top: 20px;
        }
        &__inner {
            float: right;
            .location-si {
                width: 100px;
                margin-right: 10px;
                @media (max-width: $screen-mobile) {
                    width: 80px;
                    margin-right: 5px;
                }
            }
            .location-ku {
                width: 100px;
                margin-right: 10px;
                @media (max-width: $screen-mobile) {
                    width: 80px;
                    margin-right: 5px;
                }
            }
            .location-do {
                width: 100px;
                @media (max-width: $screen-mobile) {
                    width: 80px;
                    margin-right: 5px;
                }
            }
        }
    }

</style>
