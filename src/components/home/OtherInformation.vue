<template lang="html">
  <div class="other-information">
    <announce-company />
    <div class="hhr-small-divider"></div>
    <consulting-for-client />
    <div class="hhr-small-divider"></div>
    <announce-working-process />
    <div class="hhr-small-divider"></div>
    <introduce-all-products />
    <inquiry-estimate-modal ref="inquiryEstimateModal" />
    <question-about-call-way-modal ref="questionAboutCallWayModal" />
    <announce-call-information-modal ref="announceCallInformationModal" />
  </div>
</template>

<script>
import InquiryEstimateModal from '@/components/estimate/InquiryEstimateModal.vue'
import QuestionAboutCallWayModal from '@/components/estimate/QuestionAboutCallWayModal.vue'
import AnnounceCallInformationModal from '@/components/estimate/AnnounceCallInformationModal.vue'
// sections
import AnnounceCompany from '@/components/home/other-information-section/AnnounceCompany.vue'
import ConsultingForClient from '@/components/home/other-information-section/ConsultingForClient.vue'
import AnnounceWorkingProcess from '@/components/home/other-information-section/AnnounceWorkingProcess.vue'
import IntroduceAllProducts from '@/components/home/other-information-section/IntroduceAllProducts.vue'

import ContactInformation from '@/assets/js/address/contactInformation'
import MatchMedia from '@/assets/js/resolution/matchMedia'
import UserAgent from '@/assets/js/browser/userAgent'

let contactInformation
let matchMedia
let userAgent

export default {
  name: 'OtherInformation',
  components: {
    InquiryEstimateModal,
    QuestionAboutCallWayModal,
    AnnounceCallInformationModal,
    AnnounceCompany,
    ConsultingForClient,
    AnnounceWorkingProcess,
    IntroduceAllProducts,
  },
  created() {
    matchMedia = new MatchMedia()
    userAgent = new UserAgent()
    contactInformation = new ContactInformation()
  },
  methods: {
    callToPhone() {
      if (matchMedia.isMobile) {
        document.location.href = contactInformation.getPhoneNumber()
      } else {
        if (userAgent.browserType === '크롬') {
          this.$refs.questionAboutCallWayModal.show('default', null)
        } else {
          this.$refs.questionAboutCallWayModal.show('default', null)
        }
      }
    },
    callApplicationFormModal() {
      this.$refs.inquiryEstimateModal.show('default', null)
    },
  },
}
</script>

<style lang="scss" scoped>
    .other-information {
        // There is nothing to do ...
    }
</style>
