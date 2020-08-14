<template lang="html">
  <div class="other-information">
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
            <span class="sub-contents">&nbsp;25년 경력의 수리 전문가가<br class="mobile-visible-inline-only" /> 직접 점검해드립니다.</span>
          </p>
          <p class="wrap-contents">
            <span class="hhr-blue font-bold contents">둘째</span>
            <span class="desktop-visible-inline-only">,</span>
            <span class="sub-contents">&nbsp;블로그를 시작한 이래로 <br class="mobile-visible-inline-only" />1,000여건이 넘는 실제 시공사례가 있습니다.</span>
          </p>
          <p class="wrap-contents">
            <span class="hhr-blue font-bold contents">셋째</span>
            <span class="desktop-visible-inline-only">,</span>
            <span class="sub-contents">&nbsp;불가능한 작업이 거의 없는 <br class="mobile-visible-inline-only" />독보적인 기술력으로 수리해드립니다.</span>
          </p>
        </div>
      </div>
    </div>
    <div class="hhr-small-divider"></div>
    <div class="announce-selection-for-client">
      <div class="announce-selection-for-client__inner">
        <h2 class="selection font-semi-bold">
          <span class="font-bold title">지금</span>, 불편하신점을 상담해보세요!
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
              class="online-applicationform hhr-positive-button"
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
              class="call-applicationform hhr-positive-button"
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
</template>

<script>
import ContactInformation from '@/assets/js/address/contactInformation'

let contactInformation

export default {
  name: 'OtherInformation',
  created() {
    contactInformation = new ContactInformation()
  },
  methods: {
    callToPhone() {
      document.location.href = contactInformation.getPhoneNumber()
    },
    callApplicationFormModal() {
      window.alert('준비중인 기능입니다')
    },
  },
}
</script>

<style lang="scss" scoped>
    .other-information {
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
                            width: 200px;
                            height: 45px;
                            margin-bottom: 5px;
                            margin-right: 15px;
                            @media (max-width: $screen-mobile) {
                                width: 100%;
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
                            width: 200px;
                            height: 45px;
                            margin-bottom: 5px;
                            margin-right: 15px;
                            @media (max-width: $screen-mobile) {
                                width: 100%;
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
</style>
