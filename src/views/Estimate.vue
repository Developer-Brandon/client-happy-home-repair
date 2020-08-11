<template lang="html">
  <div class="sections">
    <section class="sections__inner">
      <section class="estimate">
        <div class="estimate__title">
          <p class="word font-semi-bold">
            견적 문의하기
          </p>
        </div>
        <div class="estimate__contents">
          <form name="estimateForm">
            <fieldset>
              <div class="group-of-form">
                <label class="labeling">1.&nbsp;지역&nbsp;&nbsp;
                  <select
                    id="locateType"
                    name="locate-type"
                  >
                    <option
                      selected="selected"
                      disabled="disabled"
                      value=""
                    >선택하기
                    </option>
                    <option
                      v-for="(item, index) in values.locationList"
                      :key="index"
                      :value="item.value"
                    >{{ item.title }}
                    </option>
                  </select>
                </label>
                <br />
                <label class="labeling">2.&nbsp;문의 유형&nbsp;&nbsp;
                  <select
                    id="estimateType"
                    name="estimate-type"
                  >
                    <option
                      selected="selected"
                      disabled="disabled"
                      value=""
                    >선택하기
                    </option>
                    <option
                      v-for="(item, index) in values.estimateList"
                      :key="index"
                      :value="item.value"
                    >{{ item.title }}
                    </option>
                  </select>
                </label>
                <br />
                <label class="labeling">3.&nbsp;문의 상세&nbsp;&nbsp;
                  <br />
                  <input type="text" />
                </label>
                <br />
                <label class="labeling">4.&nbsp;이메일&nbsp;&nbsp;
                  <input type="email" />
                </label>
                <br />
                <label class="labeling">5.&nbsp;연락처&nbsp;&nbsp;
                  <input type="tel" />
                </label>
                <br />
                <!-- 이미지 관련되서는, 어떻게 처리할 건지 먼저 생각해보자 -->
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
    .labeling {
        font-size: 18px;
        line-height: 30px;
        vertical-align: center;
        select {
            background: none;
            height: 20px;
            line-height: 20px;
            option {
                line-height: 20px;
            }
        }
    }

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
            padding: 100px 20px;
            max-width: $contents-width;
            margin: 0 auto;
            @media (max-width: $screen-mobile) {
                padding-left: 10px;
                padding-right: 10px;
                max-width: $screen-mobile;
            }
            .estimate {
                margin: 0 auto;
                padding: 35px;
                border-radius: 15px;
                background-color: $hhf-light-white;
                width: 400px;
                height: 800px;
                &__title {
                    @include title-common-style;
                    font-size: 30px;
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>
