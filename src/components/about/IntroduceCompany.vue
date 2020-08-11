<template lang="html">
  <div class="introduce-company">
    <div class="introduce-company__inner">
      <div class="wrap-title">
        <p class="title font-bold">
          회사소개
        </p>
      </div>
      <div class="contents">
        <ul class="introduce-list">
          <li><span class="introduce-box">대표이사</span><span class="introduce-contents">이성일</span></li>
          <li>
            <span class="introduce-box">사업분야</span><span class="introduce-contents">리모델링/집수리</span>
          </li>
          <li>
            <span class="introduce-box">주요업종</span><span class="introduce-contents">샤시수리/방문교체/방충망/페인트</span>
          </li>
          <li>
            <span class="introduce-box">주소</span><span
              class="introduce-contents"
            >인천시 부평구 경인로 705</span>
          </li>
          <li>
            <span class="introduce-box">연락처</span><span
              class="introduce-contents"
            >010-9018-5553</span>
          </li>
          <li>
            <span class="introduce-box">이메일</span><span class="introduce-contents">lain4444@naver.com</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroduceCompany',
}
</script>

<style lang="scss" scoped>
    .introduce-company {
        width: 100%;
        height: 100%;
        &__inner {
            width: 100%;
            height: 350px;
            margin-bottom: 100px;
            @media (max-width: $screen-mobile) {
                height: 100%;
                margin-bottom: 50px;
            }
            .wrap-title {
                @include title-common-style;
            }
            .contents {
                width: 100%;
                height: 250px;
                @media (max-width: $screen-mobile) {
                    height: 100%;
                }
                .introduce-list {
                    li {
                        &:nth-child(odd) {
                            .introduce-box {
                                display: inline-block;
                                width: 400px;
                                background-color: $hhr-blue;
                                color: white;
                                font-size: 20px;
                                padding: 10px 0 10px 15px;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                    display: block;
                                }
                            }
                            .introduce-contents {
                                display: inline-block;
                                width: calc(100% - 400px);
                                font-size: 20px;
                                padding: 10px;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                    display: block;
                                }
                            }
                        }
                        &:nth-child(even) {
                            .introduce-box {
                                display: inline-block;
                                width: 400px;
                                background-color: $hhr-gray;
                                color: $hhr-deep-gray;
                                font-size: 20px;
                                padding: 10px 0 10px 15px;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                    display: block;
                                }
                            }
                            .introduce-contents {
                                display: inline-block;
                                width: calc(100% - 400px);
                                font-size: 20px;
                                padding: 10px;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
