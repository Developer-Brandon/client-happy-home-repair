<template>
  <div class="main-banner">
    <div class="main-banner__inner">
      <div class="wrap-slider-contents">
        <div class="wrap-slider-contents__wrap-logo">
          <transition
            name="content-fade"
            mode="out-in"
          >
            <img
              v-if="!values.boolean.hamburgerMenuIsOpened"
              key="active-logo"
              class="active-logo big-logo-fade-in"
              alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어,010-9018-5553"
              src="@/assets/images/logos/final-logo.png"
              @click="goToNaverBlog"
            />
            <img
              v-else
              key="passive-logo"
              class="passive-logo"
              src="@/assets/images/logos/final-gray-logo.png"
              alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어,010-9018-5553"
            />
          </transition>
        </div>
        <div class="wrap-slider-contents__wrap-main-title">
          <h3 class="logo-title font-bold">
            집안 <span class="hhr-above-dot hhr-deep-blue first-detail-detail-text">곳곳</span>
            못고치는게 없는
          </h3>
          <h3 class="logo-title font-bold">
            전국 <span class="hhr-above-dot hhr-deep-blue second-detail-detail-text">곳곳</span>
            안가는곳이 없는
          </h3>
          <h3 class="logo-title font-bold sub-title-text">
            프리미엄 홈 리페어 서비스
          </h3>
          <h2 class="logo-explain font-light sub-explain-text">
            "창호수리/방충망/페인트/문짝설치/기타작업"
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'
import MatchMedia from '@/assets/js/resolution/matchMedia'
import ContactInformation from '@/assets/js/address/contactInformation'

let matchMedia
let contactInformation

export default {
  name: 'MainBanner',
  data() {
    return {
      values: {
        boolean: {
          hamburgerMenuIsOpened: false,
        },
      },
    }
  },
  created() {
    EventBus.$on('hamburger-menu-is-opened', (data) => {
      this.values.boolean.hamburgerMenuIsOpened = data
    })
    matchMedia = new MatchMedia()
    contactInformation = new ContactInformation()
  },
  mounted() {
    this.$nextTick(() => {
      // 1. Below code doesn't work ...
      // $('.active-logo').addClass('inject-lazy-hover')

      // 2. Below code doesn't work too ...
      // $('.active-logo').hover(
      //   () => {
      //     $(this).find('img').animate({ scale: '+=0.2' }, 300)
      //   },
      //   () => {
      //     $(this).find('img').animate({ scale: '-=0.2' }, 300)
      //   },
      // )

      // I have to fix CSS HOVER effect doesn't work after animation execute
    })
  },
  methods: {
    goToNaverBlog() {
      if (matchMedia.isMobile) {
        contactInformation.type = 'mobile'
        window.open(contactInformation.getBlogAddress())
      } else {
        contactInformation.type = 'pc'
        window.open(contactInformation.getBlogAddress())
      }
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local util
    .big-logo-fade-in {
        @include primary-fade-in-bottom-to-top(1, 0.5);
        @media (max-width: $screen-mobile) {
            @include block-animation();
        }
    }

    .first-detail-detail-text {
        @include primary-fade-in-bottom-to-top(2, 1);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(1, 0.5);
        }
    }

    .second-detail-detail-text {
        @include primary-fade-in-bottom-to-top(3, 1.5);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(1, 0.5);
        }
    }

    .sub-title-text {
        @include primary-fade-in-bottom-to-top(3, 2);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(1.5, 1);
        }
    }

    .sub-explain-text {
        @include primary-fade-in-bottom-to-top(3, 2);
        @media (max-width: $screen-mobile) {
            @include primary-fade-in-bottom-to-top(1.5, 1);
        }
    }

    .inject-lazy-hover {
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -ms-transition: 0.3s;
        transition: 0.3s;
        &:hover {
            cursor: pointer;
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
    }

    // @Class
    .main-banner {
        width: 100%;
        max-width: $screen-desktop;
        height: 100%;
        padding: 50px 10px;
        margin: 0 auto;
        @media (max-width: $screen-mobile) {
            max-width: $screen-mobile;
            padding: 30px 10px;
        }
        &__inner {
            width: 100%;
            height: 100%;
            .wrap-slider-contents {
                height: 260px;
                &__wrap-logo {
                    text-align: center;
                    .active-logo {
                        width: 120px;
                        height: 120px;
                        -webkit-transition: 0.3s;
                        -moz-transition: 0.3s;
                        -ms-transition: 0.3s;
                        transition: 0.3s;
                        &:hover {
                            cursor: pointer;
                            -webkit-transform: scale(1.1);
                            -moz-transform: scale(1.1);
                            -ms-transform: scale(1.1);
                            transform: scale(1.1);
                        }
                        @media (max-width: $screen-mobile) {
                            width: 100px;
                            height: 100px;
                            margin-bottom: 10px;
                        }
                    }
                    .passive-logo {
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
</style>
