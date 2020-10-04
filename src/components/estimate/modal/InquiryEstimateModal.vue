<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="estimate collection-information-agreement"
    >
      <!-- 개인정보 동의 약관 -->
      <div
        v-if="!values.booleans.isClientAgreeCollectPersonalInfo"
        class="collection-information-agreement__inner"
      >
        <div class="collection-information-agreement__inner__contents">
          <p class="title">
            (주)해피 홈 리페어 개인정보<br class="mobile-visible-block-only" /> 이용 동의 약관
          </p>
          <div class="info">
            <span
              class="info__inner hhr-scrollbar"
              @click="callPersonalInfoPage"
              v-html="collectionOfPersonalInformation"
            ></span>
          </div>
          <div class="privacy-agreement-check-box">
            <input
              v-model="values.booleans.collectPersonalInformation"
              type="checkbox"
              class="custom-checkbox"
              :class="{'on': values.booleans.collectPersonalInformation,'off': !values.booleans.collectPersonalInformation}"
            />
            <span
              class="announcement-with-checkbox"
              @click="toggleCollectPersonalInformation"
            >개인정보 수집에 동의합니다.</span>
          </div>
          <div class="group-of-buttons">
            <button
              class="hhr-positive-reversal-button close"
              @click="closeModal"
            >
              닫기
            </button>
            <button
              class="hhr-negative-reversal-button next"
              @click="pressNextButton"
            >
              다음
            </button>
          </div>
        </div>
      </div>
      <!-- 견적 문의 -->
      <div
        v-else-if="values.booleans.isClientAgreeCollectPersonalInfo"
        class="estimate__inner"
      >
        <div class="estimate__inner__contents">
          <form
            name="estimateForm"
            @submit.prevent
          >
            <fieldset>
              <div class="group-of-form">
                <label
                  class="hhr-labeling"
                  style="margin-top:20px;margin-bottom:7px;"
                >
                  <span class="hhr-labeling-title">&nbsp;지역&nbsp;<span
                    class="hhr-red"
                  >*</span>&nbsp;&nbsp;</span>
                  <div class="wrap-local-type">
                    <select
                      id="locateType"
                      v-model="values.locate"
                      class="hhr-select locate-type"
                      name="locate-type"
                    >
                      <option
                        class="hhr-option"
                        selected="selected"
                        disabled="disabled"
                        value=""
                      >선택하기
                      </option>
                      <option
                        v-for="(item, index) in values.locationList"
                        :key="index"
                        class="hhr-option"
                        :value="item.value"
                      >{{ item.title }}
                      </option>
                    </select>
                  </div>
                </label>
                <ul class="locate-type-announcement-list">
                  <li
                    v-show="!values.locate && values.locateClicked"
                    class="error-msg"
                  >
                    지역은 필수 선택 사항입니다
                  </li>
                </ul>
                <br />
                <label
                  class="hhr-labeling"
                  style="margin-bottom:7px;"
                >
                  <span class="hhr-labeling-title">&nbsp;문의 유형&nbsp;<span class="hhr-red">*</span>&nbsp;&nbsp;</span>
                  <div class="wrap-estimate-type">
                    <select
                      id="estimateType"
                      v-model="values.estimateType"
                      class="hhr-select estimate-type"
                      name="estimate-type"
                    >
                      <option
                        class="hhr-option"
                        selected="selected"
                        disabled="disabled"
                        value=""
                      >선택하기
                      </option>
                      <option
                        v-for="(item, index) in values.estimateList"
                        :key="index"
                        class="hhr-option"
                        :value="item.value"
                      >{{ item.title }}
                      </option>
                    </select>
                  </div>
                </label>
                <ul class="estimate-type-announcement-list">
                  <li
                    v-show="!values.estimateType && values.estimateTypeClicked"
                    class="error-msg"
                  >
                    문의유형은 필수 선택 사항입니다
                  </li>
                </ul>
                <br />
                <label
                  id="estimate-detail"
                  class="hhr-labeling"
                >
                  <span class="hhr-labeling-title">&nbsp;문의 상세&nbsp;</span>
                  <br />
                </label>
                <textarea
                  v-model="insertEstimate"
                  maxlength="201"
                  for="estimate"
                  placeholder="문의 상세 입력"
                  class="hhr-textarea estimate-detail"
                ></textarea>
                <ul class="estimate-detail-announcement-list">
                  <li class="default-msg">
                    200자 이내로 부탁드립니다
                  </li>
                  <li
                    v-show="values.estimateDetailHasInserted && values.estimateDetailIsReallyShort"
                    class="error-msg"
                  >
                    다섯글자 이상 입력해주셔야합니다
                  </li>
                  <li
                    v-show="values.estimateDetailHasInserted && values.estimateDetailIsReallyLong"
                    class="error-msg"
                  >
                    200자가 초과되었습니다
                  </li>
                </ul>
                <br />
                <label class="hhr-labeling">
                  <span class="hhr-labeling-title">&nbsp;사진첨부&nbsp;</span>
                  <br class="mobile-visible-block-only" />
                  <span class="hhr-labeling-subtitle">문자로 따로 주셔도 됩니다.</span>
                  <br />
                  <p style="text-align:right;margin-bottom:7px;">준비중인 기능입니다.</p>
                  <ul class="email-announcement-list">
                    <li
                      v-show="values.emailHasInserted && !values.isEmailFormCorrect"
                      class="error-msg"
                    >이메일 형식대로 입력해주셔야 합니다
                    </li>
                  </ul>
                </label>
                <br />
                <label class="hhr-labeling">
                  <span class="hhr-labeling-title"> &nbsp;연락처&nbsp;
                    <span class="hhr-red">*</span></span>
                  <br />
                  <input
                    v-model="values.phoneNumber"
                    placeholder="연락처 입력"
                    class="hhr-input tel"
                    type="tel"
                    maxlength="11"
                    @blur="validatePhoneNumber"
                    @keyup="insertPhoneNumber"
                  />
                  <ul class="tel-announcement-list">
                    <li
                      v-show="values.phoneNumberHasInserted && !values.phoneNumber"
                      class="error-msg"
                    >연락처는 필수 입력사항입니다
                    </li>
                    <li
                      v-show="values.phoneNumberHasInserted && !values.isPhoneNumberCorrect"
                      class="error-msg"
                    >연락처의 형식과 일치하지 않습니다(숫자만 입력 가능합니다)
                    </li>
                  </ul>
                </label>
                <br />
                <!-- TODO: 이미지 업로드 관련되서는, 어떻게 처리할 건지 먼저 생각해보자 -->
                <!--<div></div>-->
              </div>
              <div class="group-of-buttons">
                <button
                  class="hhr-positive-reversal-button cancel"
                  @click.prevent="moveToBeforeState"
                >
                  뒤로
                </button>
                <button
                  class="hhr-negative-reversal-button submit"
                  @click.prevent="closeModal"
                >
                  제출
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>

// TODO: Database table 설계하기
// 1.지역
// 2.문의유형
// 3.문의상세
// 4.이메일
// 5.연락처
// 6.사진첨부

import HhrNetwork from '@/assets/js/network/HhrNetwork'
import MatchMedia from '@/assets/js/resolution/matchMedia'
import ContactInformation from '@/assets/js/address/contactInformation'
import UtilBox from '@/assets/js/validation/utilBox'

let matchMedia
let contactInformation
let utilBox

export default {
  name: 'InquiryModal',
  data() {
    return {
      values: {
        locationList: [
          {
            uid: 1,
            title: '서울',
            value: '서울',
          },
          {
            uid: 2,
            title: '인천',
            value: '인천',
          },
          {
            uid: 3,
            title: '경기도',
            value: '경기도',
          },
        ],
        estimateList: [
          {
            uid: 1,
            title: '친환경페인트',
            value: '친환경페인트',
          },
          {
            uid: 2,
            title: '창호수리,방충망',
            value: '창호수리,방충망',
          },
          {
            uid: 3,
            title: '문짝,문틀',
            value: '문짝,문틀',
          },
          {
            uid: 4,
            title: '중문,포켓도어',
            value: '중문,포켓도어',
          },
          {
            uid: 5,
            title: '환풍기,선반,건조대',
            value: '환풍기,선반,건조대',
          },
        ],
        locate: '',
        locateClicked: false,
        estimateType: '',
        estimateTypeClicked: false,
        estimateDetail: '',
        estimateDetailHasInserted: false,
        estimateDetailIsReallyShort: false,
        estimateDetailIsReallyLong: false,
        email: '',
        emailHasInserted: false,
        isEmailFormCorrect: false,
        phoneNumber: '',
        phoneNumberHasInserted: false,
        isPhoneNumberCorrect: false,
        check: {
          type: '',
          lifeCycle: false,
        },
        booleans: {
          collectPersonalInformation: false,
          isClientAgreeCollectPersonalInfo: false,
        },
      },
    }
  },
  computed: {
    insertEstimate: {
      get() {
        return this.values.estimateDetail
      },
      set(value) {
        this.values.estimateDetailHasInserted = true
        this.values.estimateDetail = value
        if (this.values.estimateDetail.length < 5 && this.values.estimateDetail.length !== 0) {
          this.values.estimateDetailIsReallyShort = true
        } else {
          this.values.estimateDetailIsReallyShort = false
        }
        if (this.values.estimateDetail.length > 200) {
          this.values.estimateDetailIsReallyLong = true
        } else {
          this.values.estimateDetailIsReallyLong = false
        }
      },
    },
    collectionOfPersonalInformation() {
      return this.$store.getters['estimate/collectionOfPersonalInformation']
    },
  },
  watch: {
    'values.locate': function (value) {
      if (value) {
        this.values.locate = value
        this.values.locateClicked = true
      } else {
        this.values.locate = ''
        this.values.locateClicked = false
      }
    },
    'values.estimateType': function (value) {
      if (value) {
        this.values.estimateType = value
        this.values.estimateTypeClicked = true
      } else {
        this.values.estimateType = ''
        this.values.estimateTypeClicked = false
      }
    },
  },
  created() {
    contactInformation = new ContactInformation()
    matchMedia = new MatchMedia()
    utilBox = new UtilBox()
  },
  methods: {
    callPersonalInfoPage() {
      window.open(`${HhrNetwork.getBaseUrl()}/privacy-information.html`)
    },
    callCollectOfPrivacyInfo() {
      return new Promise((resolve, reject) => {
        HhrNetwork.getLocalFile('privacy-information')
          .then((response) => {
            const collectionOfPersonalInformation = response.data
            this.$store.dispatch('estimate/SET_PERSONAL_INFO_GUIDANCE', { collectionOfPersonalInformation })
              .then(() => {
                resolve()
              })
          }).catch((error) => {
            reject(error)
          })
      })
    },
    goToNaverBlog() {
      if (matchMedia.isMobile) {
        contactInformation.type = 'mobile'
        window.open(contactInformation.getBlogAddress())
      } else {
        contactInformation.type = 'pc'
        window.open(contactInformation.getBlogAddress())
      }
    },
    insertEmail() {
      this.values.emailHasInserted = true
      utilBox.type = 'email'
      if (this.values.email) {
        utilBox.value = this.values.email
        if (utilBox.validateEmail) {
          this.values.isEmailFormCorrect = true
        } else {
          this.values.isEmailFormCorrect = false
        }
      } else {
        this.values.isEmailFormCorrect = false
      }
    },
    insertPhoneNumber(event) {
      this.values.phoneNumberHasInserted = true
      this.values.phoneNumber = utilBox.convertNumber(event.target.value)
      this.validatePhoneNumber()
    },
    validatePhoneNumber() {
      utilBox.type = 'phoneNumber'
      utilBox.value = this.values.phoneNumber
      this.values.isPhoneNumberCorrect = utilBox.validatePhoneNumber
    },
    show(type, message) {
      console.log('show log message: ', message)
      this.$store.dispatch('app/SET_MODAL_STATE', true)
      this.callCollectOfPrivacyInfo()
        .then(() => {
          this.values.check.lifeCycle = true
          this.values.check.type = type
        })
    },
    closeModal() {
      this.$store.dispatch('app/SET_MODAL_STATE', false)
      this.initialValues()
      this.values.check.lifeCycle = false
    },
    submit() {
      this.closeModal()
      if (!this.values.locate) {
        this.values.locateClicked = true
      }
    },
    moveToBeforeState() {
      this.values.booleans.collectPersonalInformation = false
      this.values.booleans.isClientAgreeCollectPersonalInfo = false
      const whetherCollectionOfPersonal = this.values.booleans.collectPersonalInformation
      this.$store.dispatch('home/SET_PRIVACY_GUIDANCE_AGREEMENT', { whetherCollectionOfPersonal })
    },
    pressNextButton() {
      if (this.values.booleans.collectPersonalInformation) {
        this.values.booleans.isClientAgreeCollectPersonalInfo = true
      } else {
        this.values.booleans.isClientAgreeCollectPersonalInfo = false
        window.alert('약관동의 해주셔야 문의가 가능합니다.\n고객님의 개인정보는 전화상담 이외의 어떠한 용도로도 사용되지 않습니다.')
      }
    },
    toggleCollectPersonalInformation() {
      this.values.booleans.collectPersonalInformation = !this.values.booleans.collectPersonalInformation
      const whetherCollectionOfPersonal = this.values.booleans.collectPersonalInformation
      this.$store.dispatch('home/SET_PRIVACY_GUIDANCE_AGREEMENT', { whetherCollectionOfPersonal })
    },
    initialValues() {
      this.values.locate = ''
      this.values.locateClicked = false
      this.values.estimateType = ''
      this.values.estimateTypeClicked = false
      this.values.estimateDetail = ''
      this.values.estimateDetailHasInserted = false
      this.values.estimateDetailIsReallyShort = false
      this.values.estimateDetailIsReallyLong = false
      this.values.email = ''
      this.values.emailHasInserted = false
      this.values.isEmailFormCorrect = false
      this.values.phoneNumber = ''
      this.values.phoneNumberHasInserted = false
      this.values.isPhoneNumberCorrect = false
      this.values.booleans.collectPersonalInformation = false
      this.values.booleans.isClientAgreeCollectPersonalInfo = false
      const whetherCollectionOfPersonal = false
      this.$store.dispatch('home/SET_PRIVACY_GUIDANCE_AGREEMENT', { whetherCollectionOfPersonal })
    },
  },
}
</script>

<style lang="scss" scoped>
    // @LocalUtils
    .default-msg {
        text-align: right;
        font-size: 13px;
    }

    .error-msg {
        text-align: right;
        font-size: 12px;
        color: $hhr-red;
    }

    .custom-checkbox {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-bottom: 3px;
        margin-right: 10px;
        cursor: pointer;
        background-size: cover;
        &.on {
            background-image: url('~@/assets/images/icons/icon_check_hhr_blue_background.png');
        }
        &.off {
            background-image: url('~@/assets/images/icons/icon_check_gray_background.png');
        }
    }

    .announcement-with-checkbox {
        cursor: pointer;
        font-size: 15px;
        @media (max-width: $screen-mobile) {
            font-size: 20px;
        }
    }

    // @Class
    .estimate {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: $hhr-black;
        @media (max-width: $screen-mobile) {
            padding: 15px;
        }
        &__inner {
            clear: both;
            width: auto;
            height: auto;
            &__contents {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                //
                width: 500px;
                height: 580px;
                padding: 30px;
                background-color: $hhr-white;
                border: 1px solid $hhr-white;
                border-radius: 15px;
                overflow: visible;
                @media (max-width: $screen-mobile) {
                    width: 90%;
                    height: 90%;
                    max-height: 615px;
                    padding: 10px;
                    overflow-x: hidden;
                }
                form {
                    fieldset {
                        .group-of-form {
                            height: auto;
                            min-height: 417px;
                            margin-top: 30px;
                            margin-bottom: 10px;
                            @media (max-width: $screen-mobile) {
                                min-height: auto;
                                margin-top: 40px;
                                padding-left: 18px;
                                padding-right: 18px;
                            }
                            .hhr-labeling {
                                .wrap-local-type {
                                    width: 120px;
                                    border-bottom: 1px solid $hhr-deep-blue;
                                    text-align: center;
                                    float: right;
                                    clear: right;
                                    @media (max-width: $screen-mobile) {
                                        width: 140px;
                                        border-bottom: none;
                                    }
                                    .locate-type {
                                    }
                                    .locate-type-announcement-list {
                                    }
                                }
                                .wrap-estimate-type {
                                    width: 120px;
                                    border-bottom: 1px solid $hhr-deep-blue;
                                    text-align: center;
                                    float: right;
                                    clear: right;
                                    @media (max-width: $screen-mobile) {
                                        width: 140px;
                                        border-bottom: none;
                                    }
                                    .estimate-type {
                                    }
                                    .estimate-type-announcement-list {
                                    }
                                }
                                .email {
                                    width: 60%;
                                    margin-bottom: 5px;
                                    text-align: right;
                                    float: right;
                                    @media (max-width: $screen-mobile) {
                                        width: 100%;
                                        text-align: left;
                                    }
                                }
                                .email-announcement-list {
                                    clear: both;
                                }
                                .tel {
                                    width: 60%;
                                    margin-bottom: 5px;
                                    text-align: right;
                                    float: right;
                                    @media (max-width: $screen-mobile) {
                                        width: 100%;
                                        text-align: left;
                                    }
                                }
                                .tel-announcement-list {
                                    clear: both;
                                }
                                .image-attachement {
                                }
                            }
                            .estimate-detail {
                                height: 80px;
                                margin-bottom: 5px;
                            }
                            .estimate-detail-announcement-list {
                                width: 100%;
                                height: auto;
                                float: right;
                                clear: right;
                                @media (max-width: $screen-mobile) {
                                    margin-bottom: 7px;
                                }
                            }
                        }

                        .group-of-buttons {
                            width: 270px;
                            height: 100%;
                            margin: 0 auto;
                            padding-top: 10px;
                            padding-bottom: 10px;
                            @media (max-width: $screen-mobile) {
                                width: 100%;
                                padding: 15px 10px 30px 10px;
                            }
                            .cancel {
                                width: 120px;
                                height: 45px;
                                margin-right: 30px;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                    height: 50px;
                                    margin-bottom: 10px;
                                    border: 1px solid $hhr-deep-blue;
                                    border-radius: 5px;
                                }
                            }
                            .submit {
                                width: 120px;
                                height: 45px;
                                float: right;
                                clear: right;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                    height: 50px;
                                    margin-bottom: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .collection-information-agreement {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        @media (max-width: $screen-mobile) {
            padding: 15px;
        }
        &__inner {
            clear: both;
            width: auto;
            height: auto;
            &__contents {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                width: 500px;
                height: 580px;
                padding: 30px;
                background-color: $hhr-white;
                border: 1px solid $hhr-white;
                border-radius: 15px;
                overflow: visible;
                @media (max-width: $screen-mobile) {
                    width: 90%;
                    height: 90%;
                    max-height: 560px;
                    padding: 10px;
                    overflow-x: hidden;
                }
                .title {
                    text-align: center;
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    @media (max-width: $screen-mobile) {
                        font-size: 17px;
                        padding: 20px 0 15px 0;
                        margin-bottom: 0;
                    }
                }
                .info {
                    width: 100%;
                    height: 365px;
                    margin-bottom: 10px;
                    @media (max-width: $screen-mobile) {
                        height: 270px;
                    }
                    &__inner {
                        display: block;
                        width: 100%;
                        height: 100%;
                        font-size: 16px;
                        line-height: 24px;
                        color: black;
                        background-color: $hhr-white;
                        border: 1px solid $hhr-gray;
                        font-weight: 200;
                        border-radius: 3px;
                        overflow-x: hidden;
                        overflow-y: scroll;
                        padding: 5px;
                        @media (max-width: $screen-mobile) {
                            height: 250px;
                            font-size: 18px;
                        }
                    }
                }
                .privacy-agreement-check-box {
                    text-align: right;
                    margin-bottom: 20px;
                }
                .group-of-buttons {
                    width: 270px;
                    height: auto;
                    margin: 0 auto;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                        height: auto;
                        padding: 15px 10px 30px 10px;
                    }
                    .close {
                        width: 120px;
                        height: 45px;
                        margin-right: 30px;
                        @media (max-width: $screen-mobile) {
                            width: 100%;
                            height: 50px;
                            margin-bottom: 10px;
                            border: 1px solid $hhr-deep-blue;
                            border-radius: 5px;
                        }
                    }
                    .next {
                        width: 120px;
                        height: 45px;
                        float: right;
                        clear: right;
                        @media (max-width: $screen-mobile) {
                            width: 100%;
                            height: 50px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
