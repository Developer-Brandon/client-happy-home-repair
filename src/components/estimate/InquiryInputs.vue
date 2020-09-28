<template>
  <div
    class="component"
  >
    <div class="component__inner">
      <!-- 0.개인정보 수집 동의 -->
      <guidance-of-privacy-input />
      <!-- 1.지역 -->
      <local-address-input />
      <!-- 2.문의유형 -->
      <inquiry-type-input />
      <!-- 3.기타사항 -->
      <inquiry-detail-input />
      <!-- 4.연락처 -->
      <phone-number-and-guidance-of-privacy-input />
      <!-- 5.사진첨부 -->
      <!-- TODO: 사진첨부를 어떤식으로 구현할건지 고민이 필요합니다 -->
    </div>
  </div>
</template>

<script>
import GuidanceOfPrivacyInput from '@/components/estimate/inputs/PrivacyGuidance.vue'
import LocalAddressInput from '@/components/estimate/inputs/LocalAddress.vue'
import InquiryTypeInput from '@/components/estimate/inputs/InquiryType.vue'
import InquiryDetailInput from '@/components/estimate/inputs/InquiryDetail.vue'
import PhoneNumberAndGuidanceOfPrivacyInput from '@/components/estimate/inputs/PhoneNumber.vue'

export default {
  name: 'InquiryInputs',
  components: {
    GuidanceOfPrivacyInput,
    LocalAddressInput,
    InquiryTypeInput,
    InquiryDetailInput,
    PhoneNumberAndGuidanceOfPrivacyInput,
  },
}
</script>

<style lang="scss" scoped>
    // @Classes
    .component {
        height: 100%;
        &__inner {
            width: 100%;
            height: 100%;
        }
    }
</style>
