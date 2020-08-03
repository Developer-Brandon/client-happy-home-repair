<template>
  <div class="body">
    <div class="body__main-banner">
      <div class="body__main-banner__inner">
        <div class="body__main-banner__inner__contents">
          <div class="wrap-slider-contents">
            <div class="wrap-slider-contents__wrap-logo">
              <img
                class="logo"
                alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어,010-9018-5553"
                src="@/assets/images/logos/final-logo.png"
                @click="goToNaverBlog"
              />
            </div>
            <div class="wrap-slider-contents__wrap-main-title">
              <h3 class="logo-title font-bold">
                집안 <span class="above-dot hhr-deep-blue">곳곳</span>
                못고치는게 없는
              </h3>
              <h3 class="logo-title font-bold">
                전국 <span class="above-dot hhr-deep-blue">곳곳</span>
                안가는곳이 없는
              </h3>
              <h3 class="logo-title font-bold">
                프리미엄 홈 리페어 서비스
              </h3>
              <h2 class="logo-explain font-light">
                "창호수리/방충망/페인트/문짝설치/기타작업"
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body__other-information">
      <div class="body__other-information__inner">
        <div class="announce-company">
          <div class="announce-company__inner">
            <h2 class="question font-semi-bold">
              <span
                class="hhr-blue font-bold title"
              >해피 홈 리페어</span>는 무엇이 다른가요?
            </h2>
            <div class="hhr-blue-small-divider"></div>
            <div class="question-explain">
              <p class="wrap-contents">
                <span class="hhr-blue font-bold contents">첫째</span>
                <span class="desktop-visible-inline-only">,</span>
                <span class="sub-contents">20년 경력의 내장수리 전문가가<br class="mobile-visible-inline-only" /> 직접 케어해드립니다</span>
              </p>
              <p class="wrap-contents">
                <span class="hhr-blue font-bold contents">둘째</span>
                <span class="desktop-visible-inline-only">,</span>
                <span class="sub-contents">블로그를 시작한 이래로 <br class="mobile-visible-inline-only" />1,000여건이 넘는 시공 사례가 있습니다</span>
              </p>
              <p class="wrap-contents">
                <span class="hhr-blue font-bold contents">셋째</span>
                <span class="desktop-visible-inline-only">,</span>
                <span class="sub-contents">타 업체와 비교 불가능한 <br class="mobile-visible-inline-only" />합리적인 비용으로 수리해드립니다</span>
              </p>
            </div>
          </div>
        </div>
        <div class="hhr-small-divider"></div>
        <div class="announce-selection-for-client">
          <div class="announce-selection-for-client__inner">
            <h2 class="selection font-semi-bold">
              <span class="font-bold title">지금</span>, 합리적인 가격으로
              만나보세요
            </h2>
            <div class="selection-list">
              <div class="wrap-application-form">
                <img
                  class="application-form-logo"
                  src="@/assets/images/logos/white-application-form.png"
                />
                <br />
                <br />
                <button
                  class="online-applicationform font-bold"
                  @click="callApplicationFormModal"
                >
                  온라인으로 신청할래요
                </button>
              </div>
              <div class="wrap-phone-call-logo">
                <img
                  class="application-form-logo"
                  src="@/assets/images/logos/white-phone-call2.png"
                />
                <br />
                <br />
                <button
                  class="call-applicationform font-bold"
                  @click="callToPhone"
                >
                  유선으로 신청할래요
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="hhr-small-divider"></div>
        <div class="all-products-announce">
          <div class="all-products-announce__inner">
            <h2 class="big-title font-semi-bold">
              <span class="hhr-blue font-bold title">직접</span>,
              시공 후기를 살펴보고
              결정하세요
            </h2>
            <div class="hhr-blue-small-divider"></div>
            <p class="small-title font-semi-bold">
              약 <span
                class="hhr-blue font-bold title"
              >1,000</span>여 건이 넘는 포스팅
              보러가기
            </p>
            <div class="all-products-list">
              <div class="all-products-list__inner">
                <!-- TODO: 네이버 블로그에서 사진과 글귀 끍어오기. 먼저 어떻게 긁어와야되는지 조사가 필요하다 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      values: {
        boolean: {
          whereClientInflow: true,
        },
      },
    };
  },
  methods: {
    goToNaverBlog() {
      const standardOfMatchMedia = window.matchMedia('screen and (max-width: 768px)');
      const pcNaverBlog = 'https://blog.naver.com/prologue/PrologueList.nhn?blogId=lain4444&skinType=&skinId=&from=menu&userSelectMenu=true';
      const mobileNaverBlog = 'https://m.blog.naver.com/PostList.nhn?blogId=lain4444&skinType=&skinId=&from=menu&userSelectMenu=true';
      if (standardOfMatchMedia.matches) {
        window.open(mobileNaverBlog);
      } else {
        window.open(pcNaverBlog);
      }
    },
    callToPhone() {
      document.location.href = 'tel:010-9018-5553';
    },
    callApplicationFormModal() {
      window.alert('준비중인 기능입니다');
    },
  },
};
</script>

<style lang="scss" scoped>
    .body {
        display: block;
        width: 100%;
        height: 100%;
        &__main-banner {
            height: 400px;
            background-size: $screen-desktop 400px;
            background: url('~@/assets/images/main/banner/tool-pic-was-applyed-opacity.png') center;
            @media (max-width: $screen-mobile) {
                height: 360px;
            }
            &__inner {
                width: 100%;
                max-width: $screen-desktop;
                height: 100%;
                padding: 50px 10px;
                margin: 0 auto;
                @media (max-width: $screen-mobile) {
                    max-width: $screen-mobile;
                    padding: 30px 10px;
                }
                &__contents {
                    width: 100%;
                    height: 100%;
                    .wrap-slider-contents {
                        height: 260px;
                        &__wrap-logo {
                            text-align: center;
                            &:hover {
                                cursor: pointer;
                            }
                            .logo {
                                width: 120px;
                                height: 120px;
                                @media (max-width: $screen-mobile) {
                                    width: 100px;
                                    height: 100px;
                                    margin-bottom: 10px;
                                }
                            }
                        }
                        &__wrap-main-title {
                            line-height: 40px;
                            @media (max-width: $screen-mobile) {
                                line-height: 20px;
                            }
                            .logo-title {
                                font-size: 25px;
                                @media (max-width: $screen-mobile) {
                                    font-size: 15px;
                                }
                                &:nth-child(1) {
                                    text-align: center;
                                }
                                &:nth-child(2) {
                                    text-align: center;
                                }
                                &:nth-child(3) {
                                    font-size: 18px;
                                    text-align: center;
                                    line-height: 20px;
                                    margin-top: 20px;
                                    @media (max-width: $screen-mobile) {
                                        margin-top: 25px;
                                    }
                                }
                            }
                            .logo-explain {
                                text-align: center;
                                line-height: 20px;
                                font-size: 15px;
                                @media (max-width: $screen-mobile) {
                                    line-height: 15px;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
            }
        }
        &__other-information {
            width: 100%;
            height: 1000px;
            @media (max-width: $screen-mobile) {
                height: 100%;
            }
            &__inner {
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
                .announce-selection-for-client {
                    height: 300px;
                    background-color: $hhr-blue;
                    @media (max-width: $screen-mobile) {
                        height: 100%;
                    }
                    &__inner {
                        width: 100%;
                        height: 100%;
                        margin: 0 auto;
                        text-align: center;
                        padding: 50px 0;
                        @media (max-width: $screen-mobile) {
                            height: 100%;
                            padding: 40px 0;
                        }
                        .selection {
                            color: white;
                            height: 40px;
                            margin-bottom: 40px;
                            @media (max-width: $screen-mobile) {
                                height: 30px;
                                font-size: 15px;
                                margin-bottom: 27px;
                            }
                            .title {
                                font-size: 30px;
                                @media (max-width: $screen-mobile) {
                                    font-size: 20px;
                                }
                            }
                        }
                        .selection-list {
                            height: 170px;
                            @media (max-width: $screen-mobile) {
                                height: 300px;
                            }
                            .wrap-application-form {
                                width: 30%;
                                min-width: 200px;
                                margin-left: 20%;
                                float: left;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                    clear: both;
                                    margin: 0 auto;
                                }
                                .application-form-logo {
                                    width: 40px;
                                    height: 40px;
                                    @media (max-width: $screen-mobile) {
                                        width: 50px;
                                        height: 50px;
                                    }
                                }
                                .online-applicationform {
                                    border: 1px solid white;
                                    border-radius: 5px;
                                    color: white;
                                    width: 200px;
                                    height: 45px;
                                    margin-bottom: 5px;
                                    margin-right: 15px;
                                    transition: 0.3s;
                                    &:hover {
                                        color: $hhr-deep-blue;
                                        background-color: white;
                                        font-size: 16.5px;
                                    }
                                    @media (max-width: $screen-mobile) {
                                        border: 0;
                                        border-radius: 0;
                                        width: 100%;
                                        color: $hhr-deep-blue;
                                        background-color: white;
                                        font-size: 18px;
                                    }
                                }
                            }
                            .wrap-phone-call-logo {
                                width: 30%;
                                min-width: 200px;
                                margin-right: 20%;
                                float: left;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                    clear: both;
                                    margin: 0 auto;
                                    padding-top: 25px;
                                }
                                .application-form-logo {
                                    width: 40px;
                                    height: 40px;
                                    @media (max-width: $screen-mobile) {
                                        width: 50px;
                                        height: 50px;
                                    }
                                }
                                .call-applicationform {
                                    border: 1px solid white;
                                    border-radius: 5px;
                                    color: white;
                                    width: 200px;
                                    height: 45px;
                                    margin-bottom: 5px;
                                    transition: 0.3s;
                                    &:hover {
                                        color: $hhr-deep-blue;
                                        background-color: white;
                                        font-size: 16.5px;
                                    }
                                    @media (max-width: $screen-mobile) {
                                        border: 0;
                                        border-radius: 0;
                                        width: 100%;
                                        color: $hhr-deep-blue;
                                        background-color: white;
                                        font-size: 18px;
                                    }
                                }
                            }
                        }
                    }
                }
                .all-products-announce {
                    padding: 50px 0;
                    height: 600px;
                    @media (max-width: $screen-mobile) {
                        padding: 40px 0;
                    }
                    &__inner {
                        width: 100%;
                        max-width: $screen-desktop;
                        margin: 0 auto;
                        @media (max-width: $screen-mobile) {
                            max-width: $screen-mobile;
                            padding-left: 15px;
                            padding-right: 15px;
                        }
                        .big-title {
                            text-align: center;
                            margin-bottom: 10px;
                            @media (max-width: $screen-mobile) {
                                font-size: 15px;
                                margin-bottom: 10px;
                            }
                            .title {
                                font-size: 30px;
                                @media (max-width: $screen-mobile) {
                                    font-size: 20px;
                                }
                            }
                        }
                        .small-title {
                            text-align: center;
                            font-size: 15px;
                        }
                        .all-products-list {
                            &__inner {
                                width: 580px;
                                // 네이버 블로그에서 사진과 글귀
                            }
                        }
                    }
                }
            }
        }
    }
</style>
