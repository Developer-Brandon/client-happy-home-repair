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
          <p class="word font-regular">
            <a href=""><span>*</span>&nbsp;블로그 보고 결정할게요</a>
          </p>
        </div>
        <div class="estimate__contents">
          <form name="estimateForm">
            <fieldset>
              <div class="group-of-form">
                <label class="hhr-labeling">
                  <span class="hhr-labeling-title">&nbsp;지역&nbsp;<span class="hhf-red">*</span>&nbsp;&nbsp;</span>
                  <select
                    id="locateType"
                    class="hhr-select"
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
                </label>
                <br />
                <label class="hhr-labeling">
                  <span class="hhr-labeling-title">&nbsp;문의 유형&nbsp;<span class="hhf-red">*</span>&nbsp;&nbsp;</span>
                  <select
                    id="estimateType"
                    class="hhr-select"
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
                </label>
                <br />
                <label
                  id="estimate-detail"
                  class="hhr-labeling"
                >
                  <span class="hhr-labeling-title">&nbsp;문의 상세&nbsp;</span>
                  <br />
                </label>
                <textarea
                  for="estimate"
                  class="hhr-textarea estimate-detail"
                ></textarea>
                <br />
                <label class="hhr-labeling">
                  <span class="hhr-labeling-title">&nbsp;이메일&nbsp;</span>
                  <br />
                  <input
                    class="hhr-input email"
                    type="email"
                  />
                </label>
                <br />
                <label class="hhr-labeling">
                  <span class="hhr-labeling-title"> &nbsp;연락처&nbsp;
                    <span class="hhf-red">*</span></span>
                  <br />
                  <input
                    class="hhr-input tel"
                    type="tel"
                  />
                </label>
                <br />
                <!-- TODO: 이미지 업로드 관련되서는, 어떻게 처리할 건지 먼저 생각해보자 -->
                <!--<div></div>-->
              </div>
              <div class="group-of-buttons">
                <button type="button">
                  취소
                </button>
                <button type="button">
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

export default {
  name: 'Estimate',
  data() {
    return {
      values: {
        locationList: [
          {
            uid: 1,
            title: '서울',
            value: 'seoul',
          },
          {
            uid: 2,
            title: '경기도',
            value: 'keongKiDo',
          },
        ],
        estimateList: [
          {
            uid: 1,
            title: '샤시수리',
            value: 'shashiRepair',
          },
          {
            uid: 2,
            title: '방충망',
            value: 'windowProtector',
          },
          {
            uid: 3,
            title: 'ABS도어',
            value: 'ABSdoor',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
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
                width: 400px;
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
                      @media (max-width: $screen-mobile) {
                        font-size: 15px;
                      }
                    }
                }
                &__contents {
                    form {
                        fieldset {
                            .group-of-form {
                                .hhr-labeling {
                                    .hhr-select {
                                        float: right;
                                    }
                                    .estimate-detail {
                                        height: 80px;
                                        margin-bottom: 10px;
                                    }
                                    .email {
                                    }
                                    .tel {
                                    }
                                    .image-attachement {
                                    }
                                }
                            }

                            .group-of-buttons {
                                padding-top: 30px;
                                padding-bottom: 30px;
                                @media (max-width: $screen-mobile) {
                                    padding-top: 20px;
                                    padding-bottom: 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
