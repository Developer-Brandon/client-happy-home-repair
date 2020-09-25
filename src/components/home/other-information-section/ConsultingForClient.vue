<template>
  <div class="announce-selection-for-client">
    <div class="announce-selection-for-client__inner">
      <h2 class="selection font-semi-bold">
        <span class="font-bold title">지금</span>, 불편하신점을 상담해보세요!
      </h2>
      <div class="selection-list">
        <div class="wrap-application-form">
          <img
            class="application-form-logo"
            src="@/assets/images/logos/white-application-form.png"
            @click="callApplicationFormModal"
          />
          <br />
          <br />
          <button
            class="online-applicationform hhr-positive-button"
            @click="callApplicationFormModal"
          >
            온라인으로 신청할래요
          </button>
        </div>
        <div class="wrap-phone-call-logo">
          <img
            class="application-form-logo"
            src="@/assets/images/logos/white-phone-call2.png"
            @click="callToPhone"
          />
          <br />
          <br />
          <button
            class="call-applicationform hhr-positive-button"
            @click="callToPhone"
          >
            유선으로 신청할래요
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ConsultingForClient',
  methods: {
    callToPhone() {
      this.$parent.callToPhone()
    },
    callApplicationFormModal() {
      this.$parent.callApplicationFormModal()
    },
  },
}
</script>

<style lang="scss" scoped>
    .announce-selection-for-client {
        height: 300px;
        background-color: $hhr-blue;
        @media (max-width: $screen-mobile) {
            height: 100%;
        }
        &__inner {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            text-align: center;
            padding: 50px 0;
            @media (max-width: $screen-mobile) {
                height: 100%;
                padding: 40px 0;
            }
            .selection {
                color: $hhr-white;
                height: 40px;
                margin-bottom: 40px;
                @media (max-width: $screen-mobile) {
                    height: 30px;
                    font-size: 15px;
                    margin-bottom: 27px;
                }
                .title {
                    font-size: 30px;
                    @media (max-width: $screen-mobile) {
                        font-size: 20px;
                    }
                }
            }
            .selection-list {
                height: 170px;
                @media (max-width: $screen-mobile) {
                    height: 300px;
                }
                .wrap-application-form {
                    width: 30%;
                    min-width: 200px;
                    margin-left: 20%;
                    float: left;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                        clear: both;
                        margin: 0 auto;
                    }
                    .application-form-logo {
                        width: 40px;
                        height: 40px;
                        @media (max-width: $screen-mobile) {
                            width: 50px;
                            height: 50px;
                        }
                        &:hover {
                            cursor: pointer;
                            -webkit-transform: scale(1.1);
                            -moz-transform: scale(1.1);
                            -ms-transform: scale(1.1);
                            transform: scale(1.1);
                        }
                    }
                    .online-applicationform {
                        width: 200px;
                        height: 45px;
                        margin-bottom: 5px;
                        margin-right: 15px;
                        @media (max-width: $screen-mobile) {
                            width: 100%;
                        }
                    }
                }
                .wrap-phone-call-logo {
                    width: 30%;
                    min-width: 200px;
                    margin-right: 20%;
                    float: left;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                        clear: both;
                        margin: 0 auto;
                        padding-top: 25px;
                    }
                    .application-form-logo {
                        width: 40px;
                        height: 40px;
                        @media (max-width: $screen-mobile) {
                            width: 50px;
                            height: 50px;
                        }
                        &:hover {
                            cursor: pointer;
                            -webkit-transform: scale(1.1);
                            -moz-transform: scale(1.1);
                            -ms-transform: scale(1.1);
                            transform: scale(1.1);
                        }
                    }
                    .call-applicationform {
                        width: 200px;
                        height: 45px;
                        margin-bottom: 5px;
                        margin-right: 15px;
                        @media (max-width: $screen-mobile) {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>
