<template>
  <div class="announce-working-process">
    <div class="announce-working-process__inner">
      <h2 class="question font-semi-bold">
        <span
          class="hhr-blue font-bold title"
        >해피 홈 리페어</span>는 어떤식으로 일하고 있나요?
      </h2>
      <div class="hhr-blue-small-divider"></div>
      <div class="process-explain">
        <div
          v-for="(object, index) in values.workingProcessList"
          :key="index"
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
            title: 'STEP 1',
            contents: '저희는요이렇게할꺼구요저렇게할꺼구요이렇게저렇게할껀데요이렇게저렇게어쩌구저쩌구저쩌구',
          },
          {
            title: 'STEP 2',
            contents: '저희는요이렇게할꺼구요저렇게할꺼구요이렇게저렇게할껀데요이렇게저렇게어쩌구저쩌구저쩌구',
          },
          {
            title: 'STEP 3',
            contents: '저희는요이렇게할꺼구요저렇게할꺼구요이렇게저렇게할껀데요이렇게저렇게어쩌구저쩌구저쩌구',
          },
          {
            title: 'STEP 4',
            contents: '저희는요이렇게할꺼구요저렇게할꺼구요이렇게저렇게할껀데요이렇게저렇게어쩌구저쩌구저쩌구',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
    // @Local util

    // @Class
    .announce-working-process {
        padding: 50px 0;
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
                        padding: 15px 10px;
                    }
                    .wrap-title {
                        font-size: 20px;
                        text-align: center;
                        margin-bottom: 20px;
                        @media (max-width: $screen-mobile) {
                            margin-bottom: 8px;
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
