<template>
  <transition name="content-fade">
    <div
      v-if="presentEstimateInquiryState === Number(13)"
      class="wrap-inquiry-detail"
    >
      <textarea
        v-model="detailInquiry"
        maxlength="201"
        for="estimate"
        placeholder="문의 상세 입력"
        class="hhr-textarea detail-inquiry-text-area"
      ></textarea>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'InquiryDetail',
  computed: {
    presentEstimateInquiryState() {
      return this.$store.getters['estimate/presentEstimateInquiryState']
    },
    detailInquiry: {
      get() {
        return this.$store.getters['estimate/detailInquiry']
      },
      set(detailInquiry) {
        this.$store.dispatch('estimate/SET_DETAIL_INQUIRY', { detailInquiry })
      },
    },
  },
}
</script>

<style lang="scss" scoped>
    .wrap-inquiry-detail {
        height: 160px;
        padding-top: 40px;
        @media (max-width: $screen-mobile) {
            height: 90px;
            padding-top: 20px;
        }
        .detail-inquiry-text-area {
        }
    }
</style>
