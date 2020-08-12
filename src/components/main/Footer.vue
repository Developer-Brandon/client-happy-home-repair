<template lang="html">
  <!-- footer -->
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__inner__left">
        <div class="owner-information">
          <h2 class="owner-information__title font-bold">
            사업자 정보
          </h2>
          <ul class="owner-information__explain">
            <li>상호: 해피 홈 리페어</li>
            <li>대표: 전희선</li>
            <li>주소: 인천시 부평구 경인로 705</li>
            <li class="hhr-telephone-emphasize">
              <a href="tel:01090185553">전화: 010-9018-5553</a>
            </li>
            <li class="hhr-email-emphasize">
              <a href="mailto:lain4444@naver.com">메일: lain4444@naver.com</a>
            </li>
            <li>사업자번호: 392-22-00352</li>
          </ul>
          <caption class="owner-information__copyright desktop-visible-block-only">
            Copyright©DKStudio
          </caption>
          <caption class="owner-information__clarify-font-copyright desktop-visible-block-only">
            이 제작물은 아모레퍼시픽의
            아리따글꼴을 사용하여 디자인 되었습니다.
          </caption>
        </div>
      </div>
      <div class="mobile-visible-block-only clear-both"></div>
      <div class="footer__inner__middle">
        <div class="partnership-information">
          <h2 class="partnership-information__title font-bold">
            대표 전화 / 제휴 문의
          </h2>
          <ul class="partnership-information__explain">
            <li>
              CALL<br /><span class="email-align"><a
                class="hhr-telephone-emphasize"
                href="tel:01090185553"
              >010-9018-5553</a></span>
            </li>
            <li>
              E-MAIL<br /><span class="email-align"><a
                class="hhr-email-emphasize"
                href="mailto:lain4444@naver.com"
              >lain4444@naver.com</a></span>
            </li>
          </ul>
        </div>
        <div class="visible desktop-visible-block-only hhr-gray-small-divider"></div>
        <div class="email-information">
          <h2 class="email-information__title">
            CONTACT US
          </h2>
          <ul class="email-information__explain">
            <li>
              E-MAIL<br />
              <span class="email-align"><a
                href="mailto:lovefinance@naver.com"
                class="hhr-email-emphasize"
              >lovefinance@naver.com</a></span>
            </li>
          </ul>
        </div>
        <div class="open-time-information">
          <!-- TODO: 오픈시간을 표기할건지 말건지에 대해서는 아빠랑 추가적으로 상의를 해보아야한다 -->
        </div>
      </div>
      <div class="mobile-visible-block-only clear-both"></div>
      <div class="footer__inner__right">
        <div class="wrap-all-information">
          <div class="wrap-logo-and-title">
            <img
              class="logo"
              alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어"
              src="@/assets/images/logos/big-main-title-icon.png"
            />
            <div class="wrap-pc-titles">
              <h2 class="sub-title font-light">
                해피 홈 리페어
              </h2>
              <h1 class="title font-bold">
                HAPPY&nbsp;HOME<br />REPAIR
              </h1>
            </div>
          </div>
          <hhr-clear-both></hhr-clear-both>
          <div class="sns-channels">
            <div class="wrap-sns-logo">
              <img
                class="logo"
                alt="인스타그램"
                src="@/assets/images/logos/sns/icon-instagram.png"
              />
            </div>
            <div class="wrap-sns-logo">
              <img
                class="logo"
                alt="네이버 블로그"
                src="@/assets/images/logos/sns/icon-naverblog.png"
                @click="goNaverBlog"
              />
            </div>
            <div class="wrap-sns-logo">
              <img
                class="logo"
                alt="카카오톡"
                src="@/assets/images/logos/sns/icon-kakaotalk.png"
              />
            </div>
          </div>
          <hhr-clear-both></hhr-clear-both>
          <div class="hhr-gray-small-divider"></div>
          <div class="wrap-sub-title">
            <ul class="sub-title-list font-thin">
              <li>"25년 경력의 전문가가 확실하게 고쳐드립니다"</li>
              <li>"집안 곳곳의 부서진 곳 수리해드립니다"</li>
              <li>"타 업체에서 수리하지 못하는 곳 수리해드립니다"</li>
              <li class="font-regular">
                <a class="hhr-telephone-emphasize" href="tel:01090185553">전화상담 / 010-9018-5553</a>
              </li>
              <li>리모델링 전문 <span class="font-bold">해피홈 리페어</span>에 문의해보세요</li>
            </ul>
            <caption class="copyright mobile-visible-block-only">
              Copyright©DKStudio
            </caption>
            <caption class="clarify-font-copyright mobile-visible-block-only">
              이 제작물은 아모레퍼시픽의
              아리따글꼴을 사용하여 디자인 되었습니다.
            </caption>
          </div>
          <hhr-clear-both></hhr-clear-both>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'
import MatchMedia from '@/assets/js/resolution/matchMedia'
import ContactInformation from '@/assets/js/address/contactInformation'

let contactInformation
let matchMedia

export default {
  name: 'Footer',
  components: {
    HhrClearBoth,
  },
  mounted() {
    this.initialObjects()
  },
  methods: {
    initialObjects() {
      contactInformation = new ContactInformation()
      matchMedia = new MatchMedia()
    },
    goInstagram() {
    },
    goNaverBlog() {
      if (matchMedia.isMobile) {
        contactInformation.type = 'mobile'
        window.open(contactInformation.getBlogAddress())
      } else {
        contactInformation.type = 'pc'
        window.open(contactInformation.getBlogAddress())
      }
    },
    goKakaotalkChannel() {
    },
  },
}
</script>

<style lang="scss" scoped>
    .email-align {
        display: block;
        text-align: right;
        @media (max-width: $screen-mobile) {
            text-align: left;
            line-height: 23px;
            margin-bottom: 10px;
        }
    }

    .footer {
        width: 100%;
        background-color: $hhr-gray;
        padding: 60px 0;
        @media (max-width: $screen-mobile) {
            height: 100%;
            padding: 40px 0;
        }
        &__inner {
            width: $screen-desktop;
            height: 400px;
            margin: 0 auto;
            @media (max-width: $screen-mobile) {
                width: 100%;
                height: 800px;
                padding-left: 20px;
                padding-right: 20px;
            }
            &__left {
                width: 25%;
                height: 100%;
                float: left;
                @media (max-width: $screen-mobile) {
                    display: block;
                    width: 100%;
                    height: 200px;
                    clear: both;
                }
                .owner-information {
                    height: 100%;
                    position: relative;
                    margin-right: 10px;
                    &__title {
                        font-size: 15px;
                        color: #333333;
                        margin-bottom: 10px;
                        @media (max-width: $screen-mobile) {
                            font-size: 20px;
                        }
                    }
                    &__explain {
                        font-size: 12px;
                        color: #333333;
                        li {
                            line-height: 20px;
                            @media (max-width: $screen-mobile) {
                                line-height: 23px;
                                font-size: 15px;
                            }
                        }
                    }
                    &__copyright {
                        position: absolute;
                        bottom: 12px;
                        font-size: 10px;
                        color: #333333;
                    }
                    &__clarify-font-copyright {
                        position: absolute;
                        bottom: 0;
                        font-size: 6pt;
                        color: #333333;
                    }
                }
            }
            &__middle {
                width: 20%;
                float: left;
                @media (max-width: $screen-mobile) {
                    display: block;
                    width: 100%;
                    height: 170px;
                    clear: both;
                }
                .partnership-information {
                    height: 100%;
                    @media (max-width: $screen-mobile) {
                        height: 170px;
                    }
                    &__title {
                        font-size: 15px;
                        color: #333333;
                        margin-bottom: 20px;
                        @media (max-width: $screen-mobile) {
                            font-size: 20px;
                            margin-bottom: 10px;
                        }
                    }
                    &__explain {
                        font-size: 12px;
                        color: #333333;
                        li {
                            line-height: 20px;
                            @media (max-width: $screen-mobile) {
                                line-height: 23px;
                                font-size: 15px;
                            }
                        }
                    }
                }
                .email-information {
                    height: 100%;
                    @media (max-width: $screen-mobile) {
                        height: 100px;
                    }
                    &__title {
                        font-size: 15px;
                        color: #333333;
                        margin-bottom: 20px;
                        @media (max-width: $screen-mobile) {
                            font-size: 20px;
                            margin-bottom: 10px;
                        }
                    }
                    &__explain {
                        font-size: 12px;
                        color: #333333;
                        li {
                            line-height: 20px;
                            @media (max-width: $screen-mobile) {
                                line-height: 23px;
                                font-size: 15px;
                            }
                        }
                    }
                }
            }
            &__right {
                position: relative;
                width: 55%;
                float: left;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    clear: both;
                }
                .wrap-all-information {
                    position: absolute;
                    top: 0;
                    right: 0;
                    @media (max-width: $screen-mobile) {
                        position: relative;
                        margin-top: 180px;
                    }
                    // 1 logo & title
                    .wrap-logo-and-title {
                        cursor: default;
                        float: right;
                        padding-left: 15px;
                        margin-bottom: 15px;
                        @media (max-width: $screen-mobile) {
                            padding: 0;
                            width: 100%;
                            height: 100%;
                            text-align: center;
                            clear: both;
                        }
                        .logo {
                            position: absolute;
                            display: table-cell;
                            vertical-align: middle;
                            opacity: 0.2;
                            transition: 0.3s;
                            width: 45px;
                            height: 45px;
                            @media (max-width: $screen-mobile) {
                                display: none;
                            }
                        }
                        .wrap-pc-titles {
                            position: relative;
                            width: 120px;
                            height: 45px;
                            margin-left: 33px;
                            @media (max-width: $screen-mobile) {
                                display: none;
                            }
                            .sub-title {
                                position: absolute;
                                top: 3px;
                                left: 40%;
                                font-size: 9px;
                                opacity: 0.5;
                                transition: 0.3s;
                                @media (max-width: $screen-mobile) {
                                    position: relative;
                                    top: 0;
                                    text-align: center;
                                }
                            }
                            .title {
                                position: absolute;
                                top: 15px;
                                font-size: 16px;
                                line-height: 14px;
                                opacity: 0.5;
                                text-align: center;
                                transition: 0.3s;
                                @media (max-width: $screen-mobile) {
                                    display: block;
                                    position: relative;
                                    top: 0;
                                    text-align: center;
                                    margin: 0 auto;
                                }
                            }
                        }
                        .wrap-mobile-titles {
                            display: none;
                            @media (max-width: $screen-mobile) {
                                display: block;
                            }
                            .sub-title {
                                @media (max-width: $screen-mobile) {
                                    font-size: 9px;
                                    top: 7px;
                                    text-align: center;
                                    position: relative;
                                }
                            }
                            .title {
                                @media (max-width: $screen-mobile) {
                                    top: 12px;
                                    letter-spacing: 2px;
                                    font-size: 16px;
                                    line-height: 14px;
                                    text-align: center;
                                    display: block;
                                    position: relative;
                                    margin: 0 auto;
                                }
                            }
                        }
                    }
                    // 2 sns channels
                    .sns-channels {
                        width: 100%;
                        height: 45px;
                        .wrap-sns-logo {
                            display: inline-block;
                            float: right;
                            .logo {
                                width: 40px;
                                height: 40px;
                                margin-right: 10px;
                                opacity: 0.5;
                                transition: 0.3s;
                                &:last-child {
                                    margin-right: 0;
                                }
                                &:hover {
                                    opacity: 1;
                                    cursor: pointer;
                                    transform: scale(1.1);
                                }
                            }
                        }
                    }
                    // 3 sub title
                    .wrap-sub-title {
                        .sub-title-list {
                            line-height: 20px;
                            text-align: right;
                            font-size: 12px;
                            margin-bottom: 30px;
                        }
                        .copyright {
                            @media (max-width: $screen-mobile) {
                                text-align: right;
                                font-size: 8px;
                                margin-bottom: 3px;
                            }
                        }
                        .clarify-font-copyright {
                            text-align: right;
                            font-size: 6pt;
                        }
                    }
                }
            }
        }
    }
</style>
