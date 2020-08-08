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
                  alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어,010-9018-5553"
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
              제품소개
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
          <router-link
            id="inquiry-from-hb"
            class="menus-from-hb font-regular"
            to="/Inquiry"
          >
            <span>
              견적문의
            </span>
          </router-link>
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
      <div class="wrap-logo-and-title">
        <router-link to="/">
          <img
            class="logo"
            alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어"
            src="@/assets/images/logos/big-main-title-icon.png"
          />
          <div class="wrap-titles">
            <h2 class="sub-title font-light">
              해피 홈 리페어
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
          class="menus font-regular"
          to="/Products"
        >
          제품소개
        </router-link>
        <router-link
          id="introduce-company"
          class="menus font-regular"
          to="/About"
        >
          회사소개
        </router-link>
        <router-link
          id="notice"
          class="menus font-regular"
          to="/Notice"
        >
          공지사항
        </router-link>
        <router-link
          id="price-inquiry"
          class="menus font-regular"
          to="/Inquiry"
        >
          견적문의
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import ContactInformation from '@/assets/js/address/contactInformation'

let contactInformation

export default {
  components: {
    Slide,
  },
  mounted() {
    this.initialObjects()
  },
  methods: {
    initialObjects() {
      contactInformation = new ContactInformation()
    },
    blockTouchEventWithoutHamburgerButtonSection() {
      $('#router-view').bind('click', (e) => {
        e.preventDefault()
      })
      $('#router-view').bind('touchstart', (e) => {
        e.preventDefault()
      })
    },
    activeTouchEvent() {
      $('#router-view').unbind('click')
      $('#router-view').unbind('touchstart')
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
      document.location.href = 'tel:010-9018-5553'
    },
    handleOpenMenu() {
      this.callRemoveWholeWindowScroll()
      this.blockTouchEventWithoutHamburgerButtonSection()
    },
    handleCloseMenu() {
      this.callCreateWholeWindowScroll()
      this.activeTouchEvent()
    },
    goInstagram() {
    },
    goNaverBlog() {
      contactInformation.type = 'pc'
      window.open(contactInformation.getBlogAddress())
      contactInformation.type = 'mobile'
      window.open(contactInformation.getBlogAddress())
    },
    goKakaotalkChannel() {
    },
  },
}
</script>

<style lang="scss" scoped>
    .slider {
        &__header {
            text-align: center;
            &__main-title {
                margin: 0 auto;
            }
        }
        &__footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 150px;
            height: 100px;
            border-top: 1px dotted rgba(211, 211, 211, 0.8);
            background-color: rgba(211, 211, 211, 0.4);
            .sns-channels {
                width: 120px;
                height: 45px;
                padding-top: 10px;
                margin: 0 auto;
                .wrap-sns-logo {
                    @media (max-width: $screen-mobile) {
                        display: inline-block;
                        float: right;
                    }
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
                        }
                    }
                }
            }
        }
    }

    .menus-from-hb {
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: center;
    }

    .logo-by-hb {
        @media (max-width: $screen-mobile) {
            width: 55px;
            height: 55px;
            margin-bottom: 5px;
        }
    }

    .hhr-light-blue-dotted-divider {
        width: 100px;
        height: 1px;
        margin-top: 5px;
        margin-bottom: 5px;
        color: #4296ff;
    }

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
