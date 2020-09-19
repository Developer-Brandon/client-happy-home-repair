<template>
  <div class="wrap-guidance">
    <div class="wrap-guidance__inner">
      <p class="title font-bold">
        {{ title }}
      </p>
      <p class="sub-title font-regular">
        {{ subTitle }}
      </p>
      <p class="announcement font-bold">
        {{ announcement }}
      </p>
    </div>
  </div>
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
}
</script>

<style lang="scss" scoped>
    .wrap-guidance {
        max-width: 870px;
        border-left: 5px solid cornflowerblue;
        padding-left: 10px;
        letter-spacing: 2.5px;
        @media (max-width: $screen-mobile) {
            max-width: $screen-mobile;
            padding-left: 5px;
            margin-left: 10px;
        }
        &__inner {
            .title {
                font-size: 40px;
                margin-bottom: 15px;
                @media (max-width: $screen-mobile) {
                    margin-bottom: 10px;
                }
            }

            .sub-title {
                font-size: 15px;
                margin-bottom: 5px;
                @media (max-width: $screen-mobile) {
                    font-size: 10px;
                }
            }

            .announcement {
                color: $hhr-red;
            }
        }
    }
</style>
