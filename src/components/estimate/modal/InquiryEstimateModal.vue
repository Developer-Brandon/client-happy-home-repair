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
            (주){{ getCommonCompanyName() }} 개인정보<br class="mobile-visible-block-only" /> 이용 동의 약관
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
                        :value="item.name"
                      >{{ item.name }}
                      </option>
                    </select>
                    <up-and-down-arrow :toggle="!!values.locate" />
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
                        :value="item.name"
                      >{{ item.name }}
                      </option>
                    </select>
                    <up-and-down-arrow :toggle="!!values.estimateType" />
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
                  <div class="wrap-attach-explain-and-button">
                    <input
                      ref="makeFileInput"
                      type="file"
                      style="display:none;"
                      accept=".jpg, .jpeg, .png, .pdf"
                      @change="fileIsPicked"
                    />
                    <p class="explain">{{ values.attachedFile.name }}</p>
                    <button
                      class="hhr-negative-reversal-button attach-button"
                      @click.stop="fileAttach($refs[`makeFileInput`])"
                    >선택하기
                    </button>
                  </div>
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
                  @click.prevent="submit"
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
import { EventBus } from '@/assets/js/plugin/eventBus'
import HhrNetwork from '@/assets/js/network/HhrNetwork'
import MatchMedia from '@/assets/js/resolution/matchMedia'
import ContactInformation from '@/assets/js/address/contactInformation'
import UtilBox from '@/assets/js/validation/utilBox'
import UpAndDownArrow from '@/components/util/icons/UpAndDownIcon.vue'
import { DeviceState } from '@/assets/js/enums/DeviceState'
import { EstimateLocalState } from '@/assets/js/enums/EstimateLocalState'
import { EstimateState } from '@/assets/js/enums/EstimateState'

let matchMedia
let contactInformation
let utilBox

export default {
  name: 'InquiryModal',
  components: {
    UpAndDownArrow,
  },
  data() {
    return {
      values: {
        locationList: [],
        estimateList: [],
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
        attachedFile: {},
        attachedFileUid: '',
        check: {
          type: '',
          lifeCycle: false,
        },
        booleans: {
          collectPersonalInformation: false,
          isClientAgreeCollectPersonalInfo: false,
        },
      },
      enums: {
        estimateState: EstimateState,
        estimateLocalState: EstimateLocalState,
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
      return this.$store.getters['home/collectionOfPersonalInformation']
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
    this.makeEnumsToList()
  },
  methods: {
    callPersonalInfoPage() {
      window.open(`${HhrNetwork.getBaseUrl()}/privacy-information.html`)
    },
    makeEnumsToList() {
      _.forEach(this.enums.estimateLocalState, (object) => {
        this.values.locationList.push(object)
      })
      _.forEach(this.enums.estimateState, (object) => {
        this.values.estimateList.push(object)
      })
    },
    callCollectOfPrivacyInfo() {
      return new Promise((resolve, reject) => {
        HhrNetwork.getLocalFile('privacy-information')
          .then((response) => {
            const collectionOfPersonalInformation = response.data
            this.$store.dispatch('home/SET_PERSONAL_INFO_GUIDANCE', { collectionOfPersonalInformation })
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
        contactInformation.type = DeviceState.MOBILE
        window.open(contactInformation.getBlogAddress())
      } else {
        contactInformation.type = DeviceState.PC
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
    validatePhoneNumber() {
      utilBox.type = 'phoneNumber'
      utilBox.value = this.values.phoneNumber
      this.values.isPhoneNumberCorrect = utilBox.validatePhoneNumber
    },
    insertPhoneNumber() {
      this.values.phoneNumberHasInserted = true
      this.validatePhoneNumber()
    },
    show(...params) {
      const { type } = params
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
    validation() {
      return new Promise((resolve, reject) => {
        if (!this.values.locate) {
          this.values.locateClicked = true
          reject(new Error('locate validation'))
        } else if (!this.values.estimateType) {
          this.values.estimateTypeClicked = true
          reject(new Error('estimate validation'))
        } else {
          resolve()
        }
      })
    },
    wrapValuesToJson() {
      return {
        agreement: this.values.booleans.collectPersonalInformation,
        estimateLocate: this.values.locate,
        estimateType: this.values.estimateType,
        estimateDetail: this.values.estimateDetail,
        attachedFileUid: this.values.attachedFileUid,
        phoneNumber: this.values.phoneNumber,
      }
    },
    getSendValues() {
    // TODO: File을 upload 먼저하고, 응답해서 받은 documentsUid 를 가져다가 그것만 최종 제출하는 것으로 개발
      if (this.values.attachedFile.length > 0) {
        this.uploadFile(this.values.attachedFile)
          .then(() => this.wrapValuesToJson())
          .catch((error) => EventBus.$emit('callHhrSimpleModal',
            `알수없는 오류로 인하여\n제출에 실패하였습니다\n${error.response.data.data.message}`))
      } else {
        return this.wrapValuesToJson()
      }
    },
    submit() {
      this.validation()
        .then(() => {
          const estateValues = this.getSendValues()
          this.$store.dispatch('home/SEND_ESTATE_VALUES', estateValues)
            .then(() => {
              this.closeModal()
              EventBus.$emit('callHhrSimpleModal', '제출이 완료되었습니다!')
            })
            .catch((response) => EventBus.$emit('callHhrSimpleModal', response))
        })
        .catch((error) => {
          // 아래는 메세지 띄우면 안됩니다.
          console.log(error)
        })
    },
    moveToBeforeState() {
      this.values.booleans.collectPersonalInformation = false
      this.values.booleans.isClientAgreeCollectPersonalInfo = false
      const whetherCollectionOfPersonal = this.values.booleans.collectPersonalInformation
      this.$store.dispatch('home/SET_PRIVACY_GUIDANCE_AGREEMENT', { whetherCollectionOfPersonal })
        .then(() => this.initialValues())
    },
    pressNextButton() {
      if (this.values.booleans.collectPersonalInformation) {
        this.values.booleans.isClientAgreeCollectPersonalInfo = true
      } else {
        this.values.booleans.isClientAgreeCollectPersonalInfo = false
        EventBus.$emit('callHhrSimpleModal', '약관동의 해주셔야 문의가 가능합니다.\n고객님의 개인정보는 전화상담 이외의 어떠한 용도로도 사용되지 않습니다.')
      }
    },
    toggleCollectPersonalInformation() {
      this.values.booleans.collectPersonalInformation = !this.values.booleans.collectPersonalInformation
      const whetherCollectionOfPersonal = this.values.booleans.collectPersonalInformation
      this.$store.dispatch('home/SET_PRIVACY_GUIDANCE_AGREEMENT', { whetherCollectionOfPersonal })
    },
    uploadFile(file) {
      return new Promise((resolve) => {
        this.$store.dispatch('home/SEND_FILE_TO_SERVER', { file })
          .then(() => resolve())
          .catch((error) => EventBus.$emit('callHhrSimpleModal', error))
      })
    },
    fileIsPicked(event) {
      const { files } = event.target
      if (files[0] !== undefined) {
        utilBox.type = 'fileSize'
        utilBox.value = files[0].size
        if (utilBox.validationFileSize) {
          utilBox.type = 'fileType'
          utilBox.value = files[0].type
          if (utilBox.validationFileType) {
            if (files[0].name.lastIndexOf('.') <= 0) return
            const fr = new FileReader()
            fr.readAsDataURL(files[0])
            fr.addEventListener('load', () => {
              // eslint-disable-next-line
              this.values.attachedFile = files[0]
              console.log(this.values.attachedFile)
            })
          } else {
            EventBus.$emit('callHhrSimpleModal', '확장자 JPG, PNG, PDF파일만\n등록할 수 있습니다')
          }
        } else {
          EventBus.$emit('callHhrSimpleModal', '최대 10MB까지\n등록할 수 있습니다')
        }
      }
    },
    fileAttach(fileRef) {
      fileRef.click()
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
      this.values.attachedFile = {}
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
                                    position: relative;
                                    width: 130px;
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
                                    .chevron-icon {
                                    }
                                }
                                .wrap-estimate-type {
                                    position: relative;
                                    width: 130px;
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
                                .wrap-attach-explain-and-button {
                                    float: right;
                                    clear: right;
                                    margin-bottom: 7px;
                                    @media (max-width: $screen-mobile) {
                                        width: 100%;
                                    }
                                    .explain {
                                        display: inline-block;
                                        margin-right: 8px;
                                        @media (max-width: $screen-mobile) {
                                            display: block;
                                            margin-bottom: 0;
                                            padding: 10px;
                                        }
                                    }
                                    .attach-button {
                                        display: inline-block;
                                        width: 80px;
                                        height: 35px;
                                        @media (max-width: $screen-mobile) {
                                            display: inline-block;
                                            width: 100%;
                                            height: 50px;
                                            margin-bottom: 10px;
                                        }
                                    }
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
        background-color: $hhr-transparent-black;
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
