<template lang="html">
  <div class="sections">
    <section class="sections__inner">
      <section class="estimate">
        <div class="estimate__title">
          <p class="word font-semi-bold">
            견적 문의하기
          </p>
        </div>
        <div class="estimate__sub-title">
          <p
            class="word font-regular"
            @click="goToNaverBlog"
          >
            <span class="word__inner"><span>*</span>&nbsp;블로그 보고 결정할게요</span>
          </p>
        </div>
        <div class="estimate__contents">
          <form name="estimateForm">
            <fieldset>
              <div class="group-of-form">
                <label
                  class="hhr-labeling"
                  style="margin-bottom:7px;"
                >
                  <span class="hhr-labeling-title">&nbsp;지역&nbsp;<span class="hhf-red">*</span>&nbsp;&nbsp;</span>
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
                    required
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
                    required
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
                <button class="hhf-positive-reversal-button cancel">
                  취소
                </button>
                <button
                  class="hhr-negative-reversal-button submit"
                >
                  제출
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </section>
  </div>
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
  name: 'Estimate',
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
    submit() {
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
    .sections {
        display: block;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background: url('~@/assets/images/estimate/consulting2.png') center;
        @media (max-width: $screen-mobile) {
            margin: 0 auto;
        }
        &__inner {
            width: 100%;
            height: 100%;
            padding: 50px 20px 100px 20px;
            max-width: $contents-width;
            margin: 0 auto;
            @media (max-width: $screen-mobile) {
                padding: 15px 10px;
                max-width: $screen-mobile;
            }
            .estimate {
                margin: 0 auto;
                padding: 35px;
                border-radius: 15px;
                background-color: $hhr-light-white;
                width: 500px;
                height: 100%;
                box-shadow: 0 10px 15px rgba(0, 0, 0, .05);
                @media (max-width: $screen-mobile) {
                    padding: 15px 10px;
                    background-color: transparent;
                    box-shadow: none;
                    border-radius: 0;
                    width: 100%;
                }
                &__title {
                    @include title-common-style;
                    font-size: 30px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    .word {
                        padding-left: 10px;
                    }
                }
                &__sub-title {
                    font-size: 12px;
                    margin-bottom: 40px;
                    .word {
                        text-align: right;
                        color: $hhr-red;
                        @media (max-width: $screen-mobile) {
                            font-size: 15px;
                        }
                        &__inner {
                            cursor: pointer;
                        }
                    }
                }
                &__contents {
                    form {
                        fieldset {
                            .group-of-form {
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
                                }
                            }

                            .group-of-buttons {
                                width: 215px;
                                float: right;
                                clear: right;
                                padding-top: 40px;
                                padding-bottom: 30px;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                    padding-top: 30px;
                                    padding-bottom: 20px;
                                }
                                .cancel {
                                    display: none;
                                    width: 100px;
                                    height: 45px;
                                    @media (max-width: $screen-mobile) {
                                        width: 100%;
                                    }
                                }
                                .submit {
                                    width: 100px;
                                    height: 45px;
                                    float: right;
                                    clear: right;
                                    @media (max-width: $screen-mobile) {
                                        width: 100%;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
