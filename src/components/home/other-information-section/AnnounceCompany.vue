<template>
  <div class="announce-company">
    <div class="announce-company__inner">
      <h2 class="question font-semi-bold">
        <span
          class="hhr-blue font-bold title introduce-title"
        >해피 홈 리페어</span>는 무엇이 다른가요?
      </h2>
      <div class="hhr-blue-small-divider"></div>
      <div class="question-explain">
        <p class="wrap-contents">
          <span class="hhr-blue font-bold contents introduce-first-sub-title">첫째</span>
          <span class="desktop-visible-inline-only">,</span>
          <span class="sub-contents">&nbsp;25년 경력의 수리 전문가가<br class="mobile-visible-inline-only" /> 직접 점검해드립니다.</span>
        </p>
        <p class="wrap-contents">
          <span class="hhr-blue font-bold contents introduce-second-sub-title">둘째</span>
          <span class="desktop-visible-inline-only">,</span>
          <span class="sub-contents">&nbsp;블로그를 시작한 이래로 <br class="mobile-visible-inline-only" />1,000여건이 넘는 실제 시공사례가 있습니다.</span>
        </p>
        <p class="wrap-contents">
          <span class="hhr-blue font-bold contents introduce-third-sub-title">셋째</span>
          <span class="desktop-visible-inline-only">,</span>
          <span class="sub-contents">&nbsp;불가능한 작업이 거의 없는 <br class="mobile-visible-inline-only" />독보적인 기술력으로 수리해드립니다.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnnounceCompany',
}
</script>

<style lang="scss" scoped>
    // @Local util
    .introduce-title {
        @include primary-fade-in-bottom-to-top(2, 2);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(1.5, 1.5);
        }
    }

    .introduce-first-sub-title {
        @include primary-fade-in-bottom-to-top(2, 2);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(1.5, 1.5);
        }
    }

    .introduce-second-sub-title {
        @include primary-fade-in-bottom-to-top(2, 3);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(2, 2);
        }
    }

    .introduce-third-sub-title {
        @include primary-fade-in-bottom-to-top(2, 4);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(2, 2.5);
        }
    }

    // @Classes
    .announce-company {
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
            .question-explain {
                margin-top: 35px;
                margin-left: 10px;
                margin-right: 10px;
                .wrap-contents {
                    .contents {
                        font-size: 30px;
                        @media (max-width: $screen-mobile) {
                            display: block;
                            font-size: 20px;
                            padding-left: 15px;
                            text-align: center;
                        }
                    }
                    .sub-contents {
                        @media (max-width: $screen-mobile) {
                            display: block;
                            font-size: 14px;
                            padding-top: 5px;
                            padding-left: 30px;
                            padding-right: 30px;
                        }
                    }
                    &:nth-child(1) {
                        text-align: left;
                        margin-bottom: 25px;
                        @media (max-width: $screen-mobile) {
                            text-align: center;
                        }
                    }
                    &:nth-child(2) {
                        text-align: center;
                        margin-bottom: 25px;
                    }
                    &:nth-child(3) {
                        text-align: right;
                        @media (max-width: $screen-mobile) {
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>
