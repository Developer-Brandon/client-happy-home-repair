<template>
  <div class="body">
    <section class="body__main-banner">
      <main-banner />
    </section>
    <section class="body__other-information">
      <other-information />
    </section>
  </div>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'
import MainBanner from '@/components/home/MainBanner.vue'
import OtherInformation from '@/components/home/OtherInformation.vue'

export default {
  name: 'Home',
  components: {
    MainBanner,
    OtherInformation,
  },
  mounted() {
    // TODO: Must refactoring promise with Async, Await ....
    this.$nextTick(() => {
      this.$store.dispatch('home/CALL_BLOG_PRODUCT_LIST')
        .then(() => {
        })
    })
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
            height: calc(100% - 400px);
            @media (max-width: $screen-mobile) {
                height: 100%;
            }
        }
    }
</style>
