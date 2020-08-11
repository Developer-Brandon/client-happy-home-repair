<template lang="html">
  <div class="body">
    <section class="body__main-banner">
      <main-banner></main-banner>
    </section>
    <section class="body__other-information">
      <other-information></other-information>
    </section>
  </div>
</template>

<script>
import MainBanner from '@/components/home/MainBanner.vue'
import OtherInformation from '@/components/home/OtherInformation.vue'

export default {
  name: 'Home',
  components: {
    MainBanner,
    OtherInformation,
  },
  mounted() {
    this.callBlogRecentProductsInformation()
  },
  methods: {
    callBlogRecentProductsInformation() {
      // TODO: vuex에서 data 긁어와서 other-information에 전해주는 방식도 좋을듯?
      // 일단 비동기 호출을 하는게 좋을 듯 하다
    },
  },
}
</script>

<style lang="scss" scoped>
    .body {
        display: block;
        width: 100%;
        height: 100%;
        &__main-banner {
            height: 400px;
            background-size: $screen-desktop 400px;
            background: url('~@/assets/images/main/banner/tool-pic-was-applyed-opacity.png') center;
            @media (max-width: $screen-mobile) {
                height: 360px;
            }
        }
        &__other-information {
            width: 100%;
            height: 1000px;
            @media (max-width: $screen-mobile) {
                height: 100%;
            }
        }
    }
</style>
