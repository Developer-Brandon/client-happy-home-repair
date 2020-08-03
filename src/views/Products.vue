<template>
  <div class="sections">
    <div class="sections__inner">
      <div
        class="wrap-window-section"
        @click="goToWindowPage"
      >
        <div class="wrap-window-section__inner">
          <div
            class="wrap-window-section__inner__snippet"
          >
            <p class="font-bold">아직도, <br />고장난 창문을<br />그.대.로<br />사용하고 계신가요?</p>
          </div>
        </div>
      </div>
      <div class="wrap-window-section-announcement">
        <div class="wrap-window-section-announcement__inner">
          <p class="font-regular">
            : 샤시수리/나무창문/롤러교체/레일수리/모헤어교체
          </p>
        </div>
      </div>
      <div class="clear-both"></div>
      <div
        class="wrap-door-section"
        @click="goToDoorPage"
      >
        <div class="wrap-door-section__inner">
          <div
            class="wrap-door-section__inner__snippet"
          >
            <p class="font-bold">문을<br />통째로<br />교체하기 전에<br />교체하셔야 합니다</p>
          </div>
        </div>
      </div>
      <div class="wrap-door-section-announcement">
        <div class="wrap-door-section-announcement__inner">
          <p class="font-regular">
            ABS도어/포켓도어수리/3연동중문수리/미닫이문수리 :
          </p>
        </div>
      </div>
      <div class="clear-both"></div>
      <div
        class="wrap-security-window-section"
        @click="goToSecurityWindowPage"
      >
        <div class="wrap-security-window-section__inner">
          <div
            class="wrap-security-window-section__inner__snippet"
          >
            <p class="font-bold">각종<br />방충망<br />밤벙창<br />교체해 드립니다</p>
          </div>
        </div>
      </div>
      <div class="wrap-security-window-section-announcement">
        <div class="wrap-security-window-section-announcement__inner">
          <p class="font-regular">
            : 미세방충망, 스텐방충망, 현관방충망, 방범방충문, 방범창설치
          </p>
        </div>
      </div>
      <div class="clear-both"></div>
    </div>
    <div class="sections__inner">
      <div
        class="wrap-paint-section"
        @click="goToPaintPage"
      >
        <div class="wrap-paint-section__inner">
          <div
            class="wrap-paint-section__inner__snippet"
          >
            <p class="font-bold">페인트<br />칠은<br />다시 칠하려면<br />돈이 더 깨집니다</p>
          </div>
        </div>
      </div>
      <div class="wrap-paint-section-announcement">
        <div class="wrap-paint-section-announcement__inner">
          <p class="font-regular">
            아파트, 주택, 상가, 빌라 실내페인트 베란다 칠 옥상방수 :
          </p>
        </div>
      </div>
      <div class="clear-both"></div>
      <div
        class="wrap-etc-section"
        @click="goToEtcPage"
      >
        <div class="wrap-etc-section__inner">
          <div
            class="wrap-etc-section__inner__snippet"
          >
            <p class="font-bold">환풍기<br />건조대<br />포함 모든 집안일<br />해결해 드립니다</p>
          </div>
        </div>
      </div>
      <div class="wrap-etc-section-announcement">
        <div class="wrap-etc-section-announcement__inner">
          <p class="font-regular">
            : 아파트, 주택, 상가, 빌라 실내페인트 베란다 칠 옥상방수
          </p>
        </div>
      </div>
      <div class="clear-both"></div>
      <!--<p style="text-align: center;margin-top: 150px;margin-bottom: 100px;">-->
      <!--각종 내장수리 전문 해피 홈 리페어 / 내장수리는 해피 홈 리페어 / 010-8430-2253-->
      <!--</p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  methods: {
    goToWindowPage() {
      window.open('https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=7');
    },
    goToDoorPage() {
      window.open('https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=9');
    },
    goToSecurityWindowPage() {
      window.open('https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=9');
    },
    goToPaintPage() {
      window.open('https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=33');
    },
    goToEtcPage() {
      window.open('https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=28&parentCategoryNo=28');
    },
  },
};
</script>

<style lang="scss" scoped>
    $section-width-and-height: $contents-width / 2;
    .sections {
        display: block;
        width: 100%;
        height: 100%;
        margin-top: 10px;
        /*margin-bottom: 50px;*/
        @media (max-width: $screen-mobile) {
            margin: 0 auto;
        }
        &__inner {
            width: 100%;
            max-width: $contents-width;
            margin: 0 auto;
            @media (max-width: $screen-mobile) {
                max-width: $screen-mobile;
            }
            .wrap-window-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_window.png') center;
                float: left;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &__snippet {
                        color: $hhr-deep-gray;
                        font-size: 45px;
                        line-height: 60px;
                        @media (max-width: $screen-mobile) {
                            font-size: 25px;
                            line-height: 40px;
                        }
                    }
                }
            }
            .wrap-window-section-announcement {
                display: none;
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    p {
                        padding-left: 15px;
                        padding-bottom: 10px;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-door-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                margin-right: 0;
                float: right;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_door.png') center;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &__snippet {
                        color: steelblue;
                        font-size: 45px;
                        line-height: 60px;
                        @media (max-width: $screen-mobile) {
                            text-align: right;
                            font-size: 25px;
                            line-height: 40px;
                        }
                    }
                }
            }
            .wrap-door-section-announcement {
                display: none;
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: left;
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    p {
                        width: 100%;
                        text-align: right;
                        padding-right: 15px;
                        padding-bottom: 10px;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-security-window-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                margin-left: 100px;
                float: left;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_security-window.png') center;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                &__inner {

                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &__snippet {
                        color: ivory;
                        font-size: 45px;
                        line-height: 60px;
                        @media (max-width: $screen-mobile) {
                            text-align: left;
                            font-size: 25px;
                            line-height: 40px;
                        }
                    }
                }
            }
            .wrap-security-window-section-announcement {
                display: none;
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: left;
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    p {
                        width: 100%;
                        text-align: left;
                        padding-left: 15px;
                        padding-bottom: 10px;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-paint-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                margin-right: 60px;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_painting.png') center;
                @media (max-width: $screen-mobile) {
                    margin-right: 0;
                    width: 100%;
                    height: 100%;
                }
                &__inner {

                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &__snippet {
                        color: #FFDD2E;
                        font-size: 45px;
                        line-height: 60px;
                        @media (max-width: $screen-mobile) {
                            text-align: right;
                            font-size: 25px;
                            line-height: 40px;
                        }
                    }
                }
            }
            .wrap-paint-section-announcement {
                display: none;
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    p {
                        width: 100%;
                        text-align: right;
                        padding-right: 15px;
                        padding-bottom: 10px;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-etc-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                margin-left: 0;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_tools.png') center;
                float: left;
                @media (max-width: $screen-mobile) {
                    height: 100%;
                }
                &__inner {

                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &__snippet {
                        color: black;
                        font-size: 45px;
                        line-height: 60px;
                        @media (max-width: $screen-mobile) {
                            text-align: left;
                            font-size: 25px;
                            line-height: 40px;
                        }
                    }
                }
            }
            .wrap-etc-section-announcement {
                display: none;
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    p {
                        width: 100%;
                        text-align: left;
                        padding-left: 15px;
                        padding-bottom: 10px;
                        letter-spacing: 2px;
                    }
                }
            }
        }
    }
</style>
