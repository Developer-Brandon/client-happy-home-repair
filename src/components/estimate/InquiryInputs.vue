<template>
  <transition name="component-fade">
    <div
      v-show="values.check.lifeCycle"
      class="component"
    >
      <div class="component__inner">
        <!-- 1.지역 -->
        <div
          v-if="presentEstimateInquiryState === Number(11)"
          class="wrap-location"
        >
          <input
            v-model="addressSi"
            maxlength="5"
            autocomplete="off"
            autofocus="off"
            placeholder="시 입력"
            class="hhr-input location-si"
            type="email"
          />
          <input
            v-model="addressKu"
            maxlength="5"
            autocomplete="off"
            autofocus="off"
            placeholder="구 입력"
            class="hhr-input location-ku"
            type="email"
          />
          <input
            v-model="addressDo"
            maxlength="5"
            autocomplete="off"
            autofocus="off"
            placeholder="도 입력"
            class="hhr-input location-do"
            type="email"
          /><br />
          <hhr-clear-both />
        </div>
        <!-- 2.문의유형 -->
        <div
          v-if="presentEstimateInquiryState === Number(12)"
          class="wrap-inquiry-type"
        >
          <div class="wrap-inquiry-type__inner">
            <div class="wrap-button">
              <button class="hhf-positive-reversal-button paint">
                친환경페인트
              </button>
            </div>
            <br class="mobile-visible-block-only"/>
            <div class="wrap-button">
              <button class="hhf-positive-reversal-button window">
                창호수리/방충망
              </button>
            </div>
            <div class="wrap-button">
              <button class="hhf-positive-reversal-button door-class">
                문짝/문틀
              </button>
            </div>
          </div>
          <hhr-clear-both />
          <div class="wrap-inquiry-type__inner">
            <div class="wrap-button">
              <button class="hhf-positive-reversal-button door">
                중문/포켓도어
              </button>
            </div>
            <div class="wrap-button">
              <button class="hhf-positive-reversal-button fan">
                황풍기/선반/건조대
              </button>
            </div>
            <div class="wrap-button">
              <button class="hhf-positive-reversal-button etc">
                기타작업
              </button>
            </div>
          </div>
          <hhr-clear-both />
        </div>
        <!-- 3.기타사항 -->
        <div
          v-else-if="presentEstimateInquiryState === Number(13)"
          class="wrap-inquiry-detail"
        >
          <textarea
            v-model="detailInquiry"
            maxlength="201"
            for="estimate"
            placeholder="문의 상세 입력"
            class="hhr-textarea detail-inquiry-text-area"
          ></textarea>
        </div>
        <!-- 4.이메일 -->
        <div
          v-else-if="presentEstimateInquiryState === Number(14)"
          class="wrap-email"
        >
          <input
            v-model="email"
            autocomplete="off"
            autofocus="off"
            placeholder="이메일 계정 입력"
            class="hhr-input email"
            type="email"
          />
          <hhr-clear-both />
        </div>
        <!-- 5.연락처 -->
        <!-- TODO: 연락처를 어떤식으로 입력 받을건지 고민이 필요합니다 -->
        <!-- 6.사진첨부 -->
        <!-- TODO: 사진첨부쪽을 어떤식으로 구현할건지 고민이 필요합니다 -->
      </div>
    </div>
  </transition>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'

export default {
  name: 'InquiryInputs',
  components: {
    HhrClearBoth,
  },
  props: {
    state: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      values: {
        email: '',
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  computed: {
    presentEstimateInquiryState() {
      return this.$store.getters['estimate/presentEstimateInquiryState']
    },
    addressSi: {
      get() {
        return this.$store.getters['estimate/addressSi']
      },
      set(si) {
        this.$store.dispatch('estimate/SET_ADDRESS_SI', { si })
      },
    },
    addressKu: {
      get() {
        return this.$store.getters['estimate/addressKu']
      },
      set(ku) {
        this.$store.dispatch('estimate/SET_ADDRESS_KU', { ku })
      },
    },
    addressDo: {
      get() {
        return this.$store.getters['estimate/addressDo']
      },
      set(aDo) {
        this.$store.dispatch('estimate/SET_ADDRESS_DO', { aDo })
      },
    },
    detailInquiry: {
      get() {
        return this.$store.getters['estimate/detailInquiry']
      },
      set(detailInquiry) {
        this.$store.dispatch('estimate/SET_DETAIL_INQUIRY', { detailInquiry })
      },
    },
    email: {
      get() {
        return this.$store.getters['estimate/email']
      },
      set(email) {
        this.$store.dispatch('estimate/SET_EMAIL', { email })
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.values.check.lifeCycle = true
    })
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
    .component {
        height: 100%;
        &__inner {
            height: 100%;
            .wrap-location {
                height: 130px;
                padding-top: 40px;
                float: right;
                @media (max-width: $screen-mobile) {
                    height: 90px;
                    padding-top: 20px;
                }
                .location-si {
                    width: 100px;
                    margin-right: 10px;
                    @media (max-width: $screen-mobile) {
                        width: 80px;
                        margin-right: 5px;
                    }
                }
                .location-ku {
                    width: 100px;
                    margin-right: 10px;
                    @media (max-width: $screen-mobile) {
                        width: 80px;
                        margin-right: 5px;
                    }
                }
                .location-do {
                    width: 100px;
                    @media (max-width: $screen-mobile) {
                        width: 80px;
                        margin-right: 5px;
                    }
                }
            }
            .wrap-inquiry-type {
                height: 100%;
                padding-top: 20px;
                &__inner {
                    padding: 15px 0;
                    height: 100%;
                    @media (max-width: $screen-mobile) {
                        padding: 0;
                    }
                    .wrap-button {
                        float: left;
                        width: 33.3%;
                        height: 100%;
                        text-align: center;
                        @media (max-width: $screen-mobile) {
                            width: 100%;
                            margin-bottom: 10px;
                            clear: both;
                        }
                        .paint {
                            width: 200px;
                            height: 50px;
                            font-size: 20px;
                            @media (max-width: $screen-mobile) {
                                width: 100%;
                            }
                        }
                        .window {
                            width: 200px;
                            height: 50px;
                            font-size: 20px;
                            @media (max-width: $screen-mobile) {
                                width: 100%;
                            }
                        }
                        .door-class {
                            width: 200px;
                            height: 50px;
                            font-size: 20px;
                            @media (max-width: $screen-mobile) {
                                width: 100%;
                            }
                        }
                        .door {
                            width: 200px;
                            height: 50px;
                            font-size: 20px;
                            @media (max-width: $screen-mobile) {
                                width: 100%;
                            }
                        }
                        .fan {
                            width: 200px;
                            height: 50px;
                            font-size: 20px;
                            @media (max-width: $screen-mobile) {
                                width: 100%;
                            }
                        }
                        .etc {
                            width: 200px;
                            height: 50px;
                            font-size: 20px;
                            @media (max-width: $screen-mobile) {
                                width: 100%;
                            }
                        }
                    }
                }
            }
            .wrap-inquiry-detail {
                height: 130px;
                padding-top: 40px;
                @media (max-width: $screen-mobile) {
                    height: 90px;
                    padding-top: 20px;
                }
                .detail-inquiry-text-area {

                }
            }
            .wrap-email {
                height: 130px;
                padding-top: 40px;
                @media (max-width: $screen-mobile) {
                    height: 90px;
                    padding-top: 20px;
                }
            }
            .wrap-phone-number {
                height: 130px;
                padding-top: 40px;
                @media (max-width: $screen-mobile) {
                    height: 90px;
                    padding-top: 20px;
                }
            }
            .wrap-attach-file {
                height: 130px;
                padding-top: 40px;
                @media (max-width: $screen-mobile) {
                    height: 90px;
                    padding-top: 20px;
                }
            }
        }
    }

</style>
