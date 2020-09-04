<template lang="html">
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="call-way-question"
    >
      <div class="call-way-question__inner">
        <div class="call-way-question__inner__contents">
          <div class="wrap-request-call-preview-image">
            <img
              class="select-phone-number-in-browser"
              alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어"
              src="@/assets/images/main/select-phone-number-in-browser.png"
            />
          </div>
          <br />
          <p>
            Pc혹은 Tablet 혹은 Chrome 브라우저에서 전화를 걸 경우, 지정하신 휴대폰으로 전화번호를 옮길 수 있습니다. 브라우저 상단의 지정 핸드폰을 눌러서 전화번호를 옮긴
            후 통화해주세요.
          </p>
          <br />
          <p>어떠한 이유로 전화번호가 옮겨지지 않는 분은 아래 번호로 전화 부탁드립니다</p>
          <br />
          <p class="font-semi-bold">
            해피&nbsp;홈&nbsp;리페어&nbsp;&nbsp;010-9018-5553
          </p>
          <br />
          <br />
          <button
            class="hhr-negative-reversal-button submit"
            @click="submit"
          >
            번호 전송하기
          </button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import ContactInformation from '@/assets/js/address/contactInformation'

let contactInformation

export default {
  name: 'QuestionAboutCallWayModal',
  data() {
    return {
      values: {
        string: {
          message: '',
        },
        check: {
          type: '',
          lifeCycle: false,
        },
      },
    }
  },
  created() {
    contactInformation = new ContactInformation()
  },
  methods: {
    submit() {
      this.values.check.lifeCycle = false
      document.location.href = contactInformation.getPhoneNumber()
    },
    show(type, message) {
      this.values.check.lifeCycle = true
      this.values.check.type = type
      this.values.string.message = message
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local util

    // @Class
    .call-way-question {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.4);
        padding-top: 15px;
        padding-bottom: 15px;
        @media (max-width: $screen-mobile) {
            padding: 15px;
        }
        &__inner {
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
            overflow: auto;
            @media (max-width: $screen-mobile) {
                width: 100%;
                height: 100%;
                padding: 10px;
                border: none;
                border-radius: 0;
                max-width: 100%;
                overflow-x: hidden;
            }
            &__contents {
                .wrap-request-call-preview-image {
                    text-align: center;
                    .select-phone-number-in-browser {
                        margin-bottom: 30px;
                    }
                }
                .submit {
                    width: 200px;
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
</style>
