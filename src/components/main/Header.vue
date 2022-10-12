<template>
  <header class="header">
    <div id="navigation">
      <div class="mobile-visible-block-only">
        <Slide
          width="150"
          :close-on-navigation="true"
          disable-esc
          @openMenu="handleOpenMenu"
          @closeMenu="handleCloseMenu"
        >
          <div class="slider__header">
            <p class="slider__header__main-title">
              <router-link
                id="home-from-hb"
                class="menus font-regular"
                to="/"
              >
                <img
                  class="logo-by-hb"
                  :alt="getCommonAnnouncement()"
                  src="@/assets/images/logos/main-title-logo-black-version.png"
                />
              </router-link>
            </p>
          </div>
          <router-link
            id="products-from-hb"
            class="menus-from-hb"
            to="/Products"
          >
            <span>
              시공소개
            </span>
          </router-link>
          <router-link
            id="introduce-company-from-hb"
            class="menus-from-hb font-regular"
            to="/About"
          >
            <span>
              회사소개
            </span>
          </router-link>
          <router-link
            id="notice-from-hb"
            class="menus-from-hb font-regular"
            to="/Notice"
          >
            <span>
              공지사항
            </span>
          </router-link>
          <span
            id="inquiry-from-hb"
            class="menus-from-hb font-regular"
            @click="callInquiryEstimateModal"
          >
            <span>
              견적문의
            </span>
          </span>
          <div class="slider__footer">
            <div class="sns-channels">
              <div class="wrap-sns-logo">
                <img
                  class="logo"
                  alt="인스타그램"
                  src="@/assets/images/logos/sns/icon-instagram.png"
                  @click="goInstagram"
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
                  @click="goKakaotalkChannel"
                />
              </div>
            </div>
          </div>
        </Slide>
      </div>
      <div class="wrap-logo-and-title logo-fade-in">
        <router-link to="/">
          <img
            class="logo"
            :alt="getCommonAnnouncement()"
            src="@/assets/images/logos/big-main-title-icon.png"
          />
          <div class="wrap-titles">
            <h2 class="sub-title font-light">
              {{ getCommonCompanyNameWithSpace() }}
            </h2>
            <h1 class="title font-bold">
              HAPPY&nbsp;HOME<br />REPAIR
            </h1>
          </div>
        </router-link>
      </div>
      <div class="right-menus__wrapper font-light">
        <router-link
          id="introduce-products"
          class="menus font-regular introduce-products-fade-in"
          to="/Products"
        >
          시공소개
        </router-link>
        <router-link
          id="introduce-company"
          class="menus font-regular introduce-company-fade-in"
          to="/About"
        >
          회사소개
        </router-link>
        <router-link
          id="notice"
          class="menus font-regular notice-fade-in"
          to="/Notice"
        >
          공지사항
        </router-link>
        <span
          id="price-inquiry"
          class="menus font-regular estimate-fade-in"
          @click="callInquiryEstimateModal"
        >
          견적문의
        </span>
      </div>
    </div>
    <inquiry-estimate-modal ref="inquiryEstimateModal" />
  </header>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import { EventBus } from '@/assets/js/plugin/eventBus'
import ContactInformation from '@/assets/js/address/contactInformation'
import MatchMedia from '@/assets/js/resolution/matchMedia'
import InquiryEstimateModal from '@/components/estimate/modal/InquiryEstimateModal.vue'
import { DeviceState } from '@/assets/js/enums/DeviceState'

let contactInformation
let matchMedia

export default {
  components: {
    Slide,
    InquiryEstimateModal,
  },
  mounted() {
    this.initialObjects()
  },
  methods: {
    initialObjects() {
      contactInformation = new ContactInformation()
      matchMedia = new MatchMedia()
    },
    blockTouchEventWithoutHamburgerButtonSection() {
      $('.body').bind('click', (e) => {
        e.preventDefault()
      })
      $('.body').bind('touchstart', (e) => {
        e.preventDefault()
      })
    },
    activeTouchEvent() {
      $('.body').unbind('click')
      $('.body').unbind('touchstart')
    },
    callRemoveWholeWindowScroll() {
      // firefox, chrome
      document.documentElement.style.overflow = 'hidden'
      // ie only
      document.body.scroll = 'no'
    },
    callCreateWholeWindowScroll() {
      // firefox, chrome
      document.documentElement.style.overflow = 'auto'
      // ie only
      document.body.scroll = 'yes'
    },
    callToPhone() {
      document.location.href = contactInformation.getPhoneNumber()
    },
    handleOpenMenu() {
      this.callRemoveWholeWindowScroll()
      this.blockTouchEventWithoutHamburgerButtonSection()
      EventBus.$emit('hamburger-menu-is-opened', true)
    },
    handleCloseMenu() {
      this.callCreateWholeWindowScroll()
      this.activeTouchEvent()
      EventBus.$emit('hamburger-menu-is-opened', false)
    },
    goInstagram() {
      if (matchMedia.isMobile) {
        contactInformation.type = DeviceState.MOBILE
        window.open(contactInformation.getInstaAddress())
      } else {
        contactInformation.type = DeviceState.PC
        window.open(contactInformation.getInstaAddress())
      }
    },
    goNaverBlog() {
      if (matchMedia.isMobile) {
        contactInformation.type = DeviceState.MOBILE
        window.open(contactInformation.getBlogAddress())
      } else {
        contactInformation.type = DeviceState.PC
        window.open(contactInformation.getBlogAddress())
      }
    },
    goKakaotalkChannel() {
      const message = {
        title: '안내',
        message: '준비중입니다.',
      }
      EventBus.$emit('callHhrSimpleModal', message)
    },
    callInquiryEstimateModal() {
      this.$refs.inquiryEstimateModal.show('default', null)
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local util
    .logo-fade-in {
      @include primary-fade-in(4);
    }

    .introduce-products-fade-in {
      @include primary-fade-in(2)
    }

    .introduce-company-fade-in {
      @include primary-fade-in(4)
    }

    .notice-fade-in {
      @include primary-fade-in(6)
    }

    .estimate-fade-in {
      @include primary-fade-in(8)
    }

    #price-inquiry {
      cursor: pointer;
    }

    //@ Classes
    .slider {
        .menus-from-hb {
            margin-top: 5px;
            margin-bottom: 5px;
            text-align: center;
        }
        &__header {
            @media (max-width: $screen-mobile) {
                text-align: center;
            }
            &__main-title {
                @media (max-width: $screen-mobile) {
                    margin: 0 auto;
                }
                #home-from-hb {
                    .logo-by-hb {
                        @media (max-width: $screen-mobile) {
                            width: 55px;
                            height: 55px;
                            margin-bottom: 5px;
                        }
                    }
                }
            }
        }
        &__footer {
            @media (max-width: $screen-mobile) {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 150px;
                height: 100px;
                border-top: 1px dotted $hhr-transparent-white;
                background-color: rgba(211, 211, 211, 0.4);
            }
            .sns-channels {
                @media (max-width: $screen-mobile) {
                    width: 120px;
                    height: 45px;
                    padding-top: 10px;
                    margin: 0 auto;
                }
                .wrap-sns-logo {
                    @media (max-width: $screen-mobile) {
                        display: inline-block;
                        float: right;
                    }
                    .logo {
                        @media (max-width: $screen-mobile) {
                            width: 40px;
                            height: 40px;
                            margin-right: 10px;
                            opacity: 0.5;
                            transition: 0.3s;
                        }
                        &:last-child {
                            @media (max-width: $screen-mobile) {
                                margin-right: 0;
                            }
                        }
                        &:hover {
                            @media (max-width: $screen-mobile) {
                                opacity: 1;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }

    // 2. pc navigation
    .header {
        width: 100%;
        max-width: $screen-desktop;
        margin: 0 auto;
        padding: 10px 0;
        @media (max-width: $screen-mobile) {
            padding: 10px;
        }
        #navigation {
            display: table;
            width: 100%;
            height: 45px;
            padding-left: 40px;
            padding-right: 40px;
            position: center;
            background: none no-repeat;
            background-position-x: right;
            background-size: 200px 45px;
            @media (max-width: $screen-mobile) {
                display: block;
                width: 220px;
                margin: 0 auto;
                padding: 0 20px;
            }
            .wrap-logo-and-title {
                cursor: pointer;
                padding-left: 15px;
                float: left;
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
                    }
                    &:hover {
                        opacity: 0.8;
                    }
                }
                .wrap-titles {
                    position: relative;
                    width: 120px;
                    height: 45px;
                    margin-left: 33px;
                    @media (max-width: $screen-mobile) {
                    }
                    .sub-title {
                        position: absolute;
                        top: 3px;
                        left: 40%;
                        font-size: 9px;
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
                        text-align: center;
                        transition: 0.3s;
                        @media (max-width: $screen-mobile) {
                            position: relative;
                            top: 0;
                            text-align: center;
                            margin: 0 auto;
                        }
                    }
                }
            }
            .right-menus {
                width: calc(100% - 140px);
                &__wrapper {
                    display: table-cell;
                    text-align: right;
                    vertical-align: middle;
                    width: 500px;
                    height: 100%;
                    @media (max-width: $screen-mobile) {
                        display: none;
                    }
                    .menus {
                        color: black;
                        text-decoration: none;
                        margin-right: 20px;
                        transition: 0.4s;
                        &:hover {
                            font-weight: 700;
                        }
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                    #introduce-products {
                    }
                }
            }
        }
    }
</style>
