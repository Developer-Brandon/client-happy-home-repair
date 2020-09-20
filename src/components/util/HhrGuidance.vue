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
        <p
          class="title font-bold"
          :class="{'add-repair-picture':presentEstimateInquiry.state === 16}"
        >
          <span v-html="presentEstimateInquiry.title"></span>
        </p>
        <div class="wrap-guidance-inner">
          <div class="wrap-guidance-inner__inner">
            <p class="sub-title font-regular">
              <span v-html="presentEstimateInquiry.subTitle"></span>
            </p>
            <p class="announcement font-bold">
              <span v-html="presentEstimateInquiry.announcement"></span>
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
        height: 120px;
        @media (max-width: $screen-mobile) {
            max-width: $screen-mobile;
            padding-left: 0;
            height: 135px;
            margin-left: 10px;
        }
        &__inner {
            height: 100%;
            .title {
                text-align: center;
                font-size: 40px;
                margin-bottom: 35px;
                letter-spacing: 3px;
                &.add-repair-picture {
                    font-size: 32px !important;
                }
                @media (max-width: $screen-mobile) {
                    text-align: right;
                    font-size: 30px;
                    margin-bottom: 10px;
                    letter-spacing: 1.5px;
                }
            }
            .wrap-guidance-inner {
                width: 55%;
                float: right;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    clear: both;
                }
                &__inner {
                    border-left: 4px solid $hhr-blue;
                    padding-left: 6px;
                    @media (max-width: $screen-mobile) {
                        //
                    }
                    .sub-title {
                        font-size: 20px;
                        margin-bottom: 5px;
                        text-align: right;
                        @media (max-width: $screen-mobile) {
                            font-size: 17px;
                            margin-bottom: 7px;
                        }
                    }
                    .announcement {
                        font-size: 13px;
                        color: $hhr-red;
                        text-align: right;
                        @media (max-width: $screen-mobile) {
                            font-size: 11.5px;
                        }
                    }
                }
            }
        }
    }
</style>
