<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="call-way-question"
    >
      <div class="call-way-question__inner">
        <div class="call-way-question__inner__contents">
<!--          <div class="wrap-request-call-preview-image">-->
<!--            <img-->
<!--              class="select-phone-number-in-browser"-->
<!--              alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어"-->
<!--              src="@/assets/images/main/select-phone-number-in-browser.png"-->
<!--            />-->
<!--          </div>-->
          <br />
          <p
            class="font-semi-bold"
            style="text-align: center; font-size: 28px;"
          >
            {{ getCommonCompanyNameWithSpace() }}
          </p>
          <p
            class="font-semi-bold"
            style="text-align: center; font-size: 28px;"
          >
            {{ getCommonPhoneNumber() }}
          </p>
          <br />
          <p style="text-align: center;" class="hhr-blue">문자 혹은 통화때에 말씀주시면 좋은 사항</p>
          <br />
          <div style="text-align: center;">
            <p style="font-size:20px;">1.위치</p>
            <br />
            <p style="font-size:20px;">2.작업받으실 종류</p>
            <br />
            <p style="font-size:20px;">3.문제점</p>
            <br />
            <p style="font-size:20px;">4.그외 궁금하신점</p>
            <br />
            <p style="font-size:20px;">5.사진</p>
          </div>
          <br />
          <br />
          <span class="hhr-red">* 꼭 알려주셔야 한다는 것이 아니라, 알려주시면 비교적 정확하게 답변드리기에 좋습니다. 감사합니다.</span>
          <br />
          <br />
          <br />
          <br />
          <button
            class="hhr-negative-reversal-button submit"
            @click="submit"
          >
            확인
          </button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
// import ContactInformation from '@/assets/js/address/contactInformation'

// let contactInformation

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
    // contactInformation = new ContactInformation()
  },
  methods: {
    submit() {
      this.values.check.lifeCycle = false
      // document.location.href = contactInformation.getPhoneNumber()
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
    // @Classes
    .call-way-question {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: $hhr-transparent-black;
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
            height: 470px;
            padding: 30px;
            background-color: $hhr-white;
            border: 1px solid $hhr-white;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 90%;
                height: 90%;
                max-height: 440px;
                padding: 10px;
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
