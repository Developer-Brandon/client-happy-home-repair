<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="hhr-simple-modal"
    >
      <div class="hhr-simple-modal__inner">
        <div class="hhr-simple-modal__inner__contents">
          <div
            class="wrap-image"
          >
            <img
              class="icon"
              src="@/assets/images/icons/icon-information.png"
              alt="sign-in-image"
            />
          </div>
          <div class="wrap-message">
            <p
                class="title"
                :class="{'change-font-size-to-small': values.string.message.length >= 20}"
                v-html="values.string.message.title"
            >
            <p
              class="contents"
              :class="{'change-font-size-to-small': values.string.message.length >= 20}"
              v-html="values.string.message.message"
            >
            </p>
          </div>
          <div
            class="add-button"
          >
            <button
              class="hhr-negative-reversal-button confirm"
              @click.stop="confirm"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>

export default {
  name: 'HhrSimpleModal',
  data() {
    return {
      values: {
        string: {
          message: '',
        },
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  methods: {
    close() {
      this.values.check.lifeCycle = false
    },
    show(message) {
      this.values.check.lifeCycle = true
      this.values.string.message = message
    },
    confirm() {
      this.close()
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .change-font-size-to-small {
      font-size: 18px !important;
    }

    // @Classes
    .hhr-simple-modal {
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
            padding: 25px;
        }
        &__inner {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            //
            width: 450px;
            height: 275px;
            padding: 30px;
            background-color: $hhr-white;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 90%;
                overflow-x: hidden;
                height: 275px;
            }
            &__contents {
                position: relative;
                height: 100%;
                .wrap-image {
                    text-align: center;
                    .icon {
                        width: 50px !important;
                        height: 80px !important;
                    }
                    img {
                        padding-bottom: 25px;
                    }
                }
                .wrap-message {
                    margin-bottom: 40px;
                    .title {
                      text-align: center;
                      color: $hhr-black;
                      font-size: 20px;
                      margin-bottom: 10px;
                      @media (max-width: $screen-mobile) {
                        margin-bottom: 5px;
                        font-size: 15px !important;
                      }
                    }
                    .contents {
                        text-align: center;
                        color: $hhr-black;
                        font-size: 25px;
                        @media (max-width: $screen-mobile) {
                            font-size: 15px !important;
                        }
                    }
                }
              .add-button {
                .confirm {
                  position: absolute;
                  bottom: 0;
                  right: 0;
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
