<template>
  <div class="announce-working-process">
    <div class="announce-working-process__inner">
      <h2 class="question font-semi-bold">
        <span
          class="hhr-blue font-bold title"
        >해피 홈 리페어</span>에게 수리를 맡기려면?
      </h2>
      <div class="hhr-blue-small-divider"></div>
      <div class="process-explain">
        <div
          v-for="(object, index) in values.workingProcessList"
          :ref="'eachWorkingProcess' + index"
          :key="object.reRenderKey"
          :class="getPrefix(index+1)+'-working-process-text'"
          class="process-explain__inner"
        >
          <div class="wrap-title">
            <p class="title hhr-deep-blue font-bold">
              {{ object.title }}
            </p>
          </div>
          <div class="wrap-contents">
            <p class="contents">
              {{ object.contents }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <hhr-clear-both></hhr-clear-both>
  </div>
</template>
<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'

export default {
  name: 'AnnounceWorkingProcess',
  components: {
    HhrClearBoth,
  },
  data() {
    return {
      values: {
        workingProcessList: [
          {
            reRenderKey: 0,
            title: 'STEP 1 : 상담',
            contents: '전화(문자)로 불편하신점을 말씀해주시고, 사진을 몇장 첨부합니다.',
          },
          {
            reRenderKey: 1,
            title: 'STEP 2 : 답변',
            contents: '사진을 확인 후 전화(문자)로 수리가능여부와 예상비용을 말씀드립니다.',
          },
          {
            reRenderKey: 2,
            title: 'STEP 3 : 예약',
            contents: '상담 후 수리방향을 결정하고, 작업날짜를 의논하여 예약합니다.',
          },
          {
            reRenderKey: 3,
            title: 'STEP 4 : 시공',
            contents: '예약한 날에 현장을 방문하여, 약속된 작업을 정성껏 시공합니다.',
          },
        ],
      },
    }
  },
  mounted() {
    //
  },
  methods: {
    getPrefix(index) {
      switch (index) {
        case 1:
          return 'first'
        case 2:
          return 'second'
        case 3:
          return 'third'
        case 4:
          return 'fourth'
        default:
          return 'none'
      }
    },
    executeWorkingProcessAnimation() {
      // This codes are re-rendering dom
      this.$nextTick(() => {
        for (let i = 0; i <= 3; i += 1) {
          this.values.workingProcessList[i].reRenderKey = i + 1
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local util
    .first-working-process-text {
        @include primary-fade-in-bottom-to-top(0.2, 0.2);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(0.5, 0.5);
        }
    }

    .second-working-process-text {
        @include primary-fade-in-bottom-to-top(0.5, 0.5);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(0.5, 1);
        }
    }

    .third-working-process-text {
        @include primary-fade-in-bottom-to-top(1, 1);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(1, 1.5);
        }
    }

    .fourth-working-process-text {
        @include primary-fade-in-bottom-to-top(1.5, 1.5);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(1, 2);
        }
    }

    // @Class
    .announce-working-process {
        padding: 40px 0;
        @media (max-width: $screen-mobile) {
            padding: 40px 0;
            height: 100%;
        }
        &__inner {
            max-width: $contents-width;
            margin: 0 auto;
            @media (max-width: $screen-mobile) {
                width: 100%;
                padding-left: 15px;
                padding-right: 15px;
            }
            .question {
                text-align: center;
                margin-bottom: 10px;
                @media (max-width: $screen-mobile) {
                    font-size: 15px;
                }
                .title {
                    font-size: 30px;
                    @media (max-width: $screen-mobile) {
                        font-size: 20px;
                    }
                }
            }
            .process-explain {
                margin-top: 35px;
                margin-left: 10px;
                margin-right: 10px;
                @media (max-width: $screen-mobile) {
                    margin-top: 15px;
                }
                &__inner {
                    width: calc(100% / 4);
                    height: 100px;
                    padding: 10px;
                    float: left;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                        height: 100%;
                        clear: left;
                        display: block;
                        padding: 20px 10px;
                    }
                    .wrap-title {
                        font-size: 20px;
                        text-align: center;
                        margin-bottom: 20px;
                        @media (max-width: $screen-mobile) {
                            margin-bottom: 15px;
                        }
                    }
                    .wrap-contents {
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
