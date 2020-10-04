<template>
  <transition name="page-fade">
    <div
      v-if="values.check.lifeCycle"
      class="sections"
    >
      <div
        class="sections__inner"
      >
        <div
          class="wrap-paint-section paint-fade-in"
          @click="goToPaintPage"
        >
          <div class="wrap-paint-section__inner">
            <div
              class="wrap-paint-section__inner__snippet"
            >
              <p
                class="word font-semi-bold"
                v-html="getPaintSectionAnnounce"
              >
              </p>
            </div>
          </div>
        </div>
        <div class="wrap-paint-section-announcement paint-announce-fade-in">
          <div class="wrap-paint-section-announcement__inner">
            <p
              class="word font-regular"
              @click="goToPaintPage"
              v-html="getPaintSectionAnnounce"
            >
            </p>
          </div>
        </div>
        <hhr-clear-both />
        <div
          class="wrap-security-window-section security-window-fade-in"
          @click="goToSecurityWindowPage"
        >
          <div class="wrap-security-window-section__inner">
            <div
              class="wrap-security-window-section__inner__snippet"
            >
              <p
                class="word font-semi-bold"
                v-html="getSecurityWindowAnnounce"
              >
              </p>
            </div>
          </div>
        </div>
        <div class="wrap-security-window-section-announcement security-window-announce-fade-in">
          <div class="wrap-security-window-section-announcement__inner">
            <p
              class="font-regular"
              @click="goToSecurityWindowPage"
              v-html="getSecurityWindowAnnounce"
            >
            </p>
          </div>
        </div>
        <hhr-clear-both />
        <div
          class="wrap-window-section window-image-fade-in"
          @click="goToWindowPage"
        >
          <div class="wrap-window-section__inner">
            <div
              class="wrap-window-section__inner__snippet"
            >
              <p
                class="word font-semi-bold"
                v-html="getWindowSectionAnnounce"
              ></p>
            </div>
          </div>
        </div>
        <div
          class="wrap-window-section-announcement window-announce-fade-in"
        >
          <div class="wrap-window-section-announcement__inner">
            <p
              class="font-regular"
              @click="goToWindowPage"
              v-html="getWindowSectionAnnounce"
            >
            </p>
          </div>
        </div>
        <hhr-clear-both />
      </div>
      <div
        class="sections__inner"
      >
        <div
          class="wrap-door-section door-image-fade-in"
          @click="goToDoorPage"
        >
          <div class="wrap-door-section__inner">
            <div
              class="wrap-door-section__inner__snippet"
            >
              <p
                class="word font-semi-bold"
                v-html="getDoorSectionAnnounce"
              >
              </p>
            </div>
          </div>
        </div>
        <div class="wrap-door-section-announcement door-announce-fade-in">
          <div class="wrap-door-section-announcement__inner">
            <p
              class="font-regular"
              @click="goToDoorPage"
              v-html="getDoorSectionAnnounce"
            >
            </p>
          </div>
        </div>
        <hhr-clear-both />
        <div
          class="wrap-etc-section etc-fade-in"
          @click="goToEtcPage"
        >
          <div class="wrap-etc-section__inner">
            <div
              class="wrap-etc-section__inner__snippet"
            >
              <p
                class="word font-semi-bold"
                v-html="getEtcSectionAnnounce"
              >
              </p>
            </div>
          </div>
        </div>
        <div class="wrap-etc-section-announcement etc-announce-fade-in">
          <div class="wrap-etc-section-announcement__inner">
            <p
              class="font-regular"
              @click="goToEtcPage"
              v-html="getEtcSectionAnnounce"
            >
            </p>
          </div>
        </div>
        <hhr-clear-both />
      </div>
    </div>
  </transition>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'
import ContactInformation from '@/assets/js/address/contactInformation'
import MatchMedia from '@/assets/js/resolution/matchMedia'

let contactInformation
let matchMedia

export default {
  name: 'Products',
  components: {
    HhrClearBoth,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
        html: {
          windowSectionAnnouncementAtPc: '',
        },
      },
    }
  },
  computed: {
    getWindowSectionAnnounce() {
      if (matchMedia.isMobile) {
        return '아직도, 고장난<br /><span class="font-emphasize">샤시창문/나무창문</span>을<br /> 불편한 상태로 그.대.로<br />사용하고 계신가요?\n'
      } else {
        return '아직도, 고장난<br /><span class="font-semi-bold">샤시창문/나무창문</span>을<br /> 불편한 상태로 그.대.로<br />사용하고 계신가요?'
      }
    },
    getDoorSectionAnnounce() {
      if (matchMedia.isMobile) {
        return '<span class="font-emphasize">방문/중문/포켓도어</span><br />각종 문을<br />편리하게 사용하도록<br />수리해 드립니다'
      } else {
        return '<span class="font-semi-bold">방문/중문/포켓도어</span><br />각종 문을<br />편리하게 사용하도록<br />수리해 드립니다'
      }
    },
    getSecurityWindowAnnounce() {
      if (matchMedia.isMobile) {
        return '각종<br /><span class="font-emphasize">방충망/방범창</span><br />제작,설치,교체 작업<br />해 드립니다'
      } else {
        return '각종<br /><span class="font-semi-bold">방충망/방범창</span><br />제작,설치,교체 작업<br />해 드립니다'
      }
    },
    getPaintSectionAnnounce() {
      if (matchMedia.isMobile) {
        return '<span class="font-emphasize">주택/상가/베란다</span><br />독한 냄새가 나지 않는<br />친환경 페인트(국산/수입)<br />전문 시공합니다'
      } else {
        return '<span class="font-semi-bold">주택/상가/베란다</span><br />독한 냄새가 나지 않는<br />친환경 페인트(국산/수입)<br />전문 시공합니다'
      }
    },
    getEtcSectionAnnounce() {
      if (matchMedia.isMobile) {
        return '<span class="font-emphasize">환풍기/선반</span> 설치<br /><span class="font-emphasize">빨래건조대</span> 설치<br />각종 철물 설치<br />해결해 드립니다'
      } else {
        return '<span class="font-semi-bold">환풍기/선반</span> 설치<br /><span class="font-emphasize">빨래건조대</span> 설치<br />각종 철물 설치<br />해결해 드립니다'
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      contactInformation = new ContactInformation()
      matchMedia = new MatchMedia()
      this.values.check.lifeCycle = true
    })
  },
  methods: {
    // getWindowSectionAnnounce() {
    //   if (matchMedia.isMobile) {
    //   } else {
    //     return
    //   }
    // },
    judgeResolution() {
      if (matchMedia.isMobile) {
        contactInformation.type = 'mobile'
      } else {
        contactInformation.type = 'pc'
      }
    },
    goToWindowPage() {
      this.judgeResolution()
      window.open(contactInformation.getWindowPage())
    },
    goToDoorPage() {
      this.judgeResolution()
      window.open(contactInformation.getDoorPage())
    },
    goToSecurityWindowPage() {
      this.judgeResolution()
      window.open(contactInformation.getSecurityWindowPage())
    },
    goToPaintPage() {
      this.judgeResolution()
      window.open(contactInformation.getPaintPage())
    },
    goToEtcPage() {
      this.judgeResolution()
      window.open(contactInformation.getEtcPage())
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local util
    $section-width-and-height: $contents-width / 2;

    .font-emphasize {
        @media (max-width: $screen-mobile) {
            font-weight: 800;
            font-size: 30px;
        }
    }

    .paint-fade-in {
        @include primary-fade-in-left-to-right(1, 0.5);
    }

    .paint-announce-fade-in {
        @include primary-fade-in-right-to-left(1, 0.5);
    }

    .security-window-fade-in {
        @include primary-fade-in-right-to-left(1.5, 1);

    }

    .security-window-announce-fade-in {
        @include primary-fade-in-left-to-right(1.5, 1);
    }

    .window-image-fade-in {
        @include primary-fade-in-left-to-right(2, 1.5);
    }

    .window-announce-fade-in {
        @include primary-fade-in-right-to-left(2, 1.5);
    }

    .door-image-fade-in {
        @include primary-fade-in-right-to-left(2.5, 2);
    }

    .door-announce-fade-in {
        @include primary-fade-in-left-to-right(2.5, 2);
    }

    .etc-fade-in {
        @include primary-fade-in-left-to-right(3, 2.5);
    }

    .etc-announce-fade-in {
        @include primary-fade-in-right-to-left(3, 2.5);
    }

    // @Class
    .sections {
        display: block;
        width: 100%;
        height: 100%;
        margin-top: 30px;
        @media (max-width: $screen-desktop) {
            margin: 0 auto;
        }
        @media (max-width: $screen-mobile) {
            margin: 0 auto;
        }
        &__inner {
            width: 100%;
            max-width: $contents-width;
            height: 100%;
            margin: 0 auto;
            clear: both;
            @media (max-width: $screen-desktop) {
                max-width: $screen-desktop;
            }
            @media (max-width: $screen-mobile) {
                max-width: $screen-mobile;
            }
            .wrap-window-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_window.png') center;
                float: left;
                border: 15px solid transparent;
                &:hover {
                    cursor: pointer;
                }
                @media (max-width: $screen-desktop) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                &__inner {
                    display: none;
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: $hhr-transparent-white;
                    transition: 0.3s;
                    @media (max-width: $screen-desktop) {
                        display: block;
                        padding: 20px;
                    }
                    @media (max-width: $screen-mobile) {
                        display: block;
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: initial;
                    }
                    &:hover .wrap-window-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-window-section__inner__snippet .word {
                        display: none;
                        @media (max-width: $screen-desktop) {
                            display: block;
                        }
                        @media (max-width: $screen-mobile) {
                            display: block;
                        }
                    }
                    &__snippet {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        .word {
                            color: $hhr-deep-gray;
                            font-size: 35px;
                            line-height: 50px;
                            transition: 0.3s;
                            text-shadow: -3px 0 $hhr-white;
                            @media (max-width: $screen-desktop) {
                                font-size: 25px;
                                line-height: 40px;
                            }
                            @media (max-width: $screen-mobile) {
                                font-size: 25px;
                                line-height: 40px;
                            }
                        }
                    }
                }
            }
            .wrap-window-section-announcement {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                @media (max-width: $screen-desktop) {
                    display: none;
                }
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: calc(50% - 80px) 0;
                    p {
                        cursor: pointer;
                        font-size: 25px;
                        padding: 20px;
                        text-align: center;
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
                border: 15px solid transparent;
                &:hover {
                    cursor: pointer;
                }
                @media (max-width: $screen-desktop) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                &__inner {
                    display: none;
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: $hhr-transparent-white;
                    transition: 0.3s;
                    @media (max-width: $screen-desktop) {
                        display: block;
                        padding: 20px;
                    }
                    @media (max-width: $screen-mobile) {
                        display: block;
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: none;
                    }
                    &:hover .wrap-door-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-door-section__inner__snippet .word {
                        display: none;
                        @media (max-width: $screen-desktop) {
                            display: block;
                        }
                        @media (max-width: $screen-mobile) {
                            display: block;
                        }
                    }
                    &__snippet {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        .word {
                            color: $hhr-deep-blue;
                            font-size: 35px;
                            line-height: 50px;
                            text-align: right;
                            text-shadow: -3px 0 $hhr-white;
                            @media (max-width: $screen-desktop) {
                                font-size: 25px;
                                line-height: 40px;
                            }
                            @media (max-width: $screen-mobile) {
                                font-size: 25px;
                                line-height: 40px;
                            }
                        }
                    }
                }
            }
            .wrap-door-section-announcement {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: left;
                @media (max-width: $screen-desktop) {
                    display: none;
                }
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: calc(50% - 80px) 0;
                    p {
                        cursor: pointer;
                        font-size: 25px;
                        padding: 20px;
                        text-align: center;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-security-window-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_security-window.png') center;
                border: 15px solid transparent;
                &:hover {
                    cursor: pointer;
                }
                @media (max-width: $screen-desktop) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: $hhr-transparent-white;
                    transition: 0.3s;
                    display: none;
                    @media (max-width: $screen-desktop) {
                        display: block;
                        padding: 20px;
                    }
                    @media (max-width: $screen-mobile) {
                        display: block;
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: none;
                    }
                    &:hover .wrap-security-window-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-security-window-section__inner__snippet .word {
                        display: none;
                        @media (max-width: $screen-desktop) {
                            display: block;
                        }
                        @media (max-width: $screen-mobile) {
                            display: block;
                        }
                    }
                    &__snippet {
                        .word {
                            color: $hhr-ivory;
                            font-size: 35px;
                            line-height: 50px;
                            text-shadow: -3px 0 black;
                            @media (max-width: $screen-desktop) {
                                text-align: left;
                                font-size: 25px;
                                line-height: 40px;
                            }
                            @media (max-width: $screen-mobile) {
                                text-align: left;
                                font-size: 25px;
                                line-height: 40px;
                            }
                        }
                    }
                }
            }
            .wrap-security-window-section-announcement {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: left;
                @media (max-width: $screen-desktop) {
                    display: none;
                }
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: calc(50% - 80px) 0;
                    p {
                        cursor: pointer;
                        font-size: 25px;
                        padding: 20px;
                        text-align: center;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-paint-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: left;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_painting.png') center;
                border: 15px solid transparent;
                &:hover {
                    cursor: pointer;
                }
                @media (max-width: $screen-desktop) {
                    margin-right: 0;
                    width: 100%;
                    height: 100%;
                }
                @media (max-width: $screen-mobile) {
                    margin-right: 0;
                    width: 100%;
                    height: 100%;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: $hhr-transparent-white;
                    transition: 0.3s;
                    display: none;
                    @media (max-width: $screen-desktop) {
                        display: block;
                        padding: 20px;
                    }
                    @media (max-width: $screen-mobile) {
                        display: block;
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: none;
                    }
                    &:hover .wrap-paint-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-paint-section__inner__snippet .word {
                        display: none;
                        @media (max-width: $screen-desktop) {
                            display: block;
                        }
                        @media (max-width: $screen-mobile) {
                            display: block;
                        }
                    }
                    &__snippet {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        .word {
                            color: $hhr-yellow;
                            font-size: 35px;
                            line-height: 50px;
                            text-align: right;
                            text-shadow: -2px 0 $hhr-white;
                            @media (max-width: $screen-desktop) {
                                font-size: 25px;
                                line-height: 40px;
                            }
                            @media (max-width: $screen-mobile) {
                                font-size: 25px;
                                line-height: 40px;
                            }
                        }

                    }
                }
            }
            .wrap-paint-section-announcement {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                @media (max-width: $screen-desktop) {
                    display: none;
                }
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: calc(50% - 80px) 0;
                    p {
                        cursor: pointer;
                        font-size: 25px;
                        padding: 20px;
                        text-align: center;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-etc-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_tools.png') center;
                float: left;
                border: 15px solid transparent;
                &:hover {
                    cursor: pointer;
                }
                @media (max-width: $screen-desktop) {
                    width: 100%;
                    height: 100%;
                }
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: $hhr-transparent-white;
                    transition: 0.3s;
                    display: none;
                    @media (max-width: $screen-desktop) {
                        display: block;
                        padding: 20px;
                    }
                    @media (max-width: $screen-mobile) {
                        display: block;
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: none;
                    }
                    &:hover .wrap-etc-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-etc-section__inner__snippet .word {
                        display: none;
                        @media (max-width: $screen-desktop) {
                            display: block;
                        }
                        @media (max-width: $screen-mobile) {
                            display: block;
                        }
                    }
                    &__snippet {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        .word {
                            color: $hhr-black;
                            font-size: 35px;
                            line-height: 50px;
                            text-shadow: -3px 0 $hhr-white;
                            @media (max-width: $screen-desktop) {
                                text-align: left;
                                font-size: 25px;
                                line-height: 40px;
                            }
                            @media (max-width: $screen-mobile) {
                                text-align: left;
                                font-size: 25px;
                                line-height: 40px;
                            }
                        }
                    }
                }
            }
            .wrap-etc-section-announcement {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                @media (max-width: $screen-desktop) {
                    display: none;
                }
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: calc(50% - 80px) 0;
                    p {
                        cursor: pointer;
                        font-size: 25px;
                        padding: 20px;
                        text-align: center;
                        letter-spacing: 2px;
                    }
                }
            }
        }
    }
</style>
