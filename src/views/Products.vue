<template lang="html">
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
            <p class="word font-semi-bold">
              아직도, 고장난<br /><span class="font-emphasize">샤시창문/나무창문</span>을<br /> 불편한 상태로 그.대.로<br />사용하고
              계신가요?
            </p>
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
      <hhr-clear-both></hhr-clear-both>
      <div
        class="wrap-door-section"
        @click="goToDoorPage"
      >
        <div class="wrap-door-section__inner">
          <div
            class="wrap-door-section__inner__snippet"
          >
            <p class="word font-semi-bold">
              <span class="font-emphasize">방문/중문/포켓도어</span><br />각종 문을<br />편리하게 사용하도록<br />수리해 드립니다
            </p>
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
      <hhr-clear-both></hhr-clear-both>
      <div
        class="wrap-security-window-section"
        @click="goToSecurityWindowPage"
      >
        <div class="wrap-security-window-section__inner">
          <div
            class="wrap-security-window-section__inner__snippet"
          >
            <p class="word font-semi-bold">
              각종<br /><span class="font-emphasize">방충망/방범창</span><br />제작,설치,교체 작업<br />해 드립니다
            </p>
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
      <hhr-clear-both></hhr-clear-both>
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
            <p class="word font-semi-bold">
              <span class="font-emphasize">주택/상가/베란다</span><br />독한 냄새가 나지 않는<br />친환경 페인트(국산/수입)<br />전문
              시공합니다
            </p>
          </div>
        </div>
      </div>
      <div class="wrap-paint-section-announcement">
        <div class="wrap-paint-section-announcement__inner">
          <p class="word font-regular">
            아파트, 주택, 상가, 빌라 실내페인트 베란다 칠 옥상방수 :
          </p>
        </div>
      </div>
      <hhr-clear-both></hhr-clear-both>
      <div
        class="wrap-etc-section"
        @click="goToEtcPage"
      >
        <div class="wrap-etc-section__inner">
          <div
            class="wrap-etc-section__inner__snippet"
          >
            <p class="word font-semi-bold">
              <span class="font-emphasize">환풍기/선반</span> 설치<br /><span
                class="font-emphasize"
              >빨래건조대</span> 설치<br />각종 철물 설치<br />해결해 드립니다
            </p>
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
      <hhr-clear-both></hhr-clear-both>
    </div>
  </div>
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
  mounted() {
    contactInformation = new ContactInformation()
    matchMedia = new MatchMedia()
  },
  methods: {
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
    $section-width-and-height: $contents-width / 2;

    .font-emphasize {
        font-size: 45px;
        @media (max-width: $screen-mobile) {
            font-weight: 800;
            font-size: 30px;
        }
    }

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
                border: 15px solid transparent;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    @media (max-width: $screen-mobile) {
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: none;
                    }
                    &:hover .wrap-window-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-window-section__inner__snippet .word {
                        display: none;
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
                            text-shadow: -3px 0 white;
                            @media (max-width: $screen-mobile) {
                                font-size: 25px;
                                line-height: 40px;
                            }
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
                border: 15px solid transparent;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    @media (max-width: $screen-mobile) {
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &:hover .wrap-door-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-door-section__inner__snippet .word {
                        display: none;
                    }
                    &__snippet {
                        .word {
                            color: steelblue;
                            font-size: 35px;
                            line-height: 50px;
                            text-align: right;
                            text-shadow: -3px 0 white;
                            @media (max-width: $screen-mobile) {
                                font-size: 25px;
                                line-height: 40px;
                            }
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
                margin-left: 120px;
                float: left;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_security-window.png') center;
                border: 15px solid transparent;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    @media (max-width: $screen-mobile) {
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &:hover .wrap-security-window-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-security-window-section__inner__snippet .word {
                        display: none;
                    }
                    &__snippet {
                        .word {
                            color: ivory;
                            font-size: 35px;
                            line-height: 50px;
                            text-shadow: -3px 0 black;
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
                border: 15px solid transparent;
                @media (max-width: $screen-mobile) {
                    margin-right: 0;
                    width: 100%;
                    height: 100%;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    @media (max-width: $screen-mobile) {
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &:hover .wrap-paint-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-paint-section__inner__snippet .word {
                        display: none;
                    }
                    &__snippet {
                        .word {
                            color: #FFDD2E;
                            font-size: 35px;
                            line-height: 50px;
                            text-align: right;
                            text-shadow: -2px 0 white;
                            @media (max-width: $screen-mobile) {
                                font-size: 25px;
                                line-height: 40px;
                            }
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
                border: 15px solid transparent;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                }
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    @media (max-width: $screen-mobile) {
                        padding: 20px;
                    }
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &:hover .wrap-etc-section__inner__snippet {
                        //
                    }
                    &:hover .wrap-etc-section__inner__snippet .word {
                        display: none;
                    }
                    &__snippet {
                        .word {
                            color: black;
                            font-size: 35px;
                            line-height: 50px;
                            text-shadow: -3px 0 white;
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
