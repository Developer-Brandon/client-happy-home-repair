<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="announce-call-information"
    >
      <div class="announce-call-information__inner">
        <div class="announce-call-information__inner__contents">
          <br />
          <div class="announce-group font-semi-bold">
            <p class="title">
              해피홈리페어
            </p>
            <p class="sub-title font-semi-bold">
              010-9018-5553
            </p>
          </div>
          <br />
          <p class="font-thin">
            홈페이지를 이용하다가 불편한 사항이 있으신분은 아래 이메일로 문의 부탁드립니다.
          </p>
          <br />
          <p class="email font-semi-bold">
            lovefinance@naver.com
          </p>
          <br />
          <button
            class="hhr-negative-reversal-button confirm"
            @click="confirm"
          >
            확인
          </button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>

export default {
  name: 'AnnounceCallInformationModal',
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
  methods: {
    confirm() {
      this.values.check.lifeCycle = false
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
    // @Class
    .announce-call-information {
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
            width: 400px;
            height: 300px;
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
                .announce-group {
                    margin-bottom: 20px;
                    text-align: center;
                    .title {
                    }
                    .sub-title {
                    }
                }
                .email {
                    text-align: center;
                    margin-bottom: 10px;
                }
                .confirm {
                    width: 100px;
                    height: 45px;
                    position: absolute;
                    bottom:30px;
                    right:30px;
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
