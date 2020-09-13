<template>
  <transition name="page-fade">
    <div
      v-if="values.check.lifeCycle"
      class="sections"
    >
      <div class="sections__inner">
        <ceo-greetings />
        <hhr-clear-both />
        <introduce-company />
        <hhr-clear-both />
        <how-to-come />
        <hhr-clear-both />
      </div>
    </div>
  </transition>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'
import CeoGreetings from '@/components/about/CeoGreetings.vue'
import IntroduceCompany from '@/components/about/IntroduceCompany.vue'
import HowToCome from '@/components/about/HowToCome.vue'

export default {
  name: 'About',
  components: {
    HhrClearBoth,
    CeoGreetings,
    IntroduceCompany,
    HowToCome,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.values.check.lifeCycle = true
    })
  },
}
</script>

<style lang="scss" scoped>
    .sections {
        display: block;
        width: 100%;
        height: 100%;
        margin-top: 10px;
        @media (max-width: $screen-mobile) {
            margin: 0 auto;
        }
        &__inner {
            width: 100%;
            height: 100%;
            padding-top: 25px;
            max-width: $contents-width;
            margin: 0 auto;
            @media (max-width: $screen-mobile) {
                padding-left: 10px;
                padding-right: 10px;
                max-width: $screen-mobile;
            }
        }
    }
</style>
