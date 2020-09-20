<template>
  <transition class="component-fade">
    <div
      v-show="values.check.lifeCycle"
      class="wrap-guidance"
    >
      <div
        :key="presentEstimateInquiry.index"
        class="wrap-guidance__inner"
      >
        <p class="title font-bold">
          {{ presentEstimateInquiry.title }}
        </p>
        <div class="wrap-guidance-inner">
          <div class="wrap-guidance-inner__inner">
            <p class="sub-title font-regular">
              {{ presentEstimateInquiry.subTitle }}
            </p>
            <p class="announcement font-bold">
              {{ presentEstimateInquiry.announcement }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HhrEstimateGuidance',
  props: {
    state: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    subTitle: {
      type: String,
      default: null,
    },
    announcement: {
      type: String,
      default: null,
    },
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
  computed: {
    presentEstimateInquiry() {
      return this.$store.getters['estimate/presentEstimateInquiry']
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.values.check.lifeCycle = true
    })
  },
}
</script>

<style lang="scss" scoped>
    .wrap-guidance {
        padding-left: 10px;
        height: 100%;
        @media (max-width: $screen-mobile) {
            max-width: $screen-mobile;
            padding-left: 5px;
            margin-left: 10px;
        }
        &__inner {
            .title {
                text-align: center;
                font-size: 40px;
                margin-bottom: 35px;
                letter-spacing: 3px;
                @media (max-width: $screen-mobile) {
                    margin-bottom: 10px;
                }
            }
            .wrap-guidance-inner {
                width: 55%;
                float: right;
                &__inner {
                    border-left: 4px solid cornflowerblue;
                    padding-left: 6px;
                    @media (max-width: $screen-mobile) {
                        padding-left: 6px;
                    }
                    .sub-title {
                        font-size: 20px;
                        margin-bottom: 5px;
                        text-align: right;
                        @media (max-width: $screen-mobile) {
                            font-size: 10px;
                        }
                    }
                    .announcement {
                        font-size: 13px;
                        color: $hhr-red;
                        text-align: right;
                    }
                }
            }
        }
    }
</style>
