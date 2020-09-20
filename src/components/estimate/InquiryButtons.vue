<template>
  <transition class="component-fade">
    <div
      v-show="values.check.lifeCycle"
      class="component"
    >
      <div class="component__inner">
        <div
          v-if="presentEstimateInquiryState !== Number(11)"
          class="previous-button"
          @click="pressPreviousButton"
        >
          <p class="font-thin">
            {{ values.words.previous }}
          </p>
        </div>
        <div
          class="next-button"
          @click="pressNextButton"
        >
          <p
            v-if="presentEstimateInquiryState !== Number(16)"
            class="font-thin"
          >
            {{ values.words.next }}
          </p>
          <p
            v-if="presentEstimateInquiryState === Number(16)"
            class="font-thin"
          >
            {{ values.words.finish }}
          </p>
        </div>
        <hhr-clear-both></hhr-clear-both>
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
      this.$store.dispatch('estimate/PRESS_NEXT_BUTTON')
        .then(() => {
          this.callParentsForceDomRenderingUpdate()
        })
    },
  },
}
</script>

<style lang="scss" scoped>
    .component {
        height: 100%;
        &__inner {
            float: right;
            height: 100%;
            padding: 45px 0;
            .previous-button {
                display: inline-block;
                font-size: 30px;
                margin-right: 25px;
                p {
                    letter-spacing: 2px;
                    transition: 0.4s;
                    &:hover {
                        font-weight: 700;
                        cursor: pointer;
                    }
                }
            }
            .next-button {
                display: inline-block;
                font-size: 30px;
                p {
                    letter-spacing: 2px;
                    transition: 0.4s;
                    &:hover {
                        font-weight: 700;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
