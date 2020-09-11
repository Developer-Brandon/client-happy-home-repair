<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="estimate"
    >
      <div class="estimate__inner">
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
                    class="hhf-red"
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
                  <span class="hhr-labeling-title">&nbsp;문의 유형&nbsp;<span class="hhf-red">*</span>&nbsp;&nbsp;</span>
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
                  <span class="hhr-labeling-title">&nbsp;이메일&nbsp;<span
                    class="hhf-red"
                  >*</span></span>
                  <br />
                  <input
                    v-model="values.email"
                    autocomplete="off"
                    autofocus="off"
                    placeholder="이메일 계정 입력"
                    class="hhr-input email"
                    type="email"
                    @keyup="insertEmail"
                  />
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
                    <span class="hhf-red">*</span></span>
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
                  class="hhf-positive-reversal-button cancel"
                  @click.prevent="closeModal"
                >
                  취소
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
  },
  watch: {
    // eslint-disable-next-line
    'values.locate': function (value) {
      if (value) {
        this.values.locate = value
        this.values.locateClicked = true
      } else {
        this.values.locate = ''
        this.values.locateClicked = false
      }
    },
    // eslint-disable-next-line
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
    initalValues() {
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
    /* eslint-disable-next-line */
			show(type, message) {
      this.$store.dispatch('app/SET_MODAL_STATE', true)
      this.values.check.lifeCycle = true
      this.values.check.type = type
    },
    closeModal() {
      this.$store.dispatch('app/SET_MODAL_STATE', false)
      this.initalValues()
      this.values.check.lifeCycle = false
    },
    submit() {
      this.closeModal()
      if (!this.values.locate) {
        this.values.locateClicked = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local util
    .default-msg {
        text-align: right;
        font-size: 13px;
    }

    .error-msg {
        text-align: right;
        font-size: 12px;
        color: $hhr-red;
    }

    // @Class
    .estimate {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        // overflow: hidden;
        @media (max-width: $screen-mobile) {
            padding: 15px;
        }
        &__inner {
            clear: both;
            width: auto;
            height: auto;
            &__contents {
                // clear: both;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                //
                width: 500px;
                height: 580px;
                // max-height: calc(100vh - 160px);
                padding: 30px;
                background-color: $hhr-white;
                border: 1px solid $hhr-white;
                border-radius: 15px;
                overflow: visible;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    border: none;
                    border-radius: 0;
                    max-width: 100%;
                    overflow-x: hidden;
                }
                form {
                    fieldset {
                        .group-of-form {
                            margin-top: 30px;
                            margin-bottom: 10px;
                            @media (max-width: $screen-mobile) {
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
</style>
