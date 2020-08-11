<template lang="html">
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
              class="active-logo"
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
            집안 <span class="hhr-above-dot hhr-deep-blue">곳곳</span>
            못고치는게 없는
          </h3>
          <h3 class="logo-title font-bold">
            전국 <span class="hhr-above-dot hhr-deep-blue">곳곳</span>
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
</template>

<script>
import { EventBus } from '@/assets/js/eventBus'
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
    .content-fade-enter-active, .content-fade-leave-active {
        transition: opacity .4s ease-in-out;
    }

    .content-fade-enter, .content-fade-leave-to {
        opacity: 0;
    }

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
                        &:hover {
                            cursor: pointer;
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
