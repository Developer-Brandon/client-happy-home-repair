<template>
  <transition name="component-fade">
    <div
      v-show="stateOfBlogListAreCalled"
      class="all-products-announce"
    >
      <div class="all-products-announce__inner">
        <h2 class="big-title font-semi-bold">
          <span class="hhr-blue font-bold title">직접</span>,
          시공 후기를 살펴보고
          결정하세요
        </h2>
        <div class="hhr-blue-small-divider"></div>
        <p class="small-title font-semi-bold">
          약 <span
            class="hhr-blue font-bold title"
          >1,000</span>여 건이 넘는 포스팅
          보러가기
        </p>
        <div class="all-products-list">
          <div class="all-products-list__inner">
            <div class="ready-page">
              <p>준비중인 기능입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntroduceAllProducts',
  computed: {
    stateOfBlogListAreCalled() {
      return this.$store.getters['home/blogListViewState']
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Class
    .all-products-announce {
        padding: 50px 0;
        height: 600px;
        @media (max-width: $screen-mobile) {
            padding: 40px 0;
        }
        &__inner {
            width: 100%;
            max-width: $screen-desktop;
            margin: 0 auto;
            @media (max-width: $screen-mobile) {
                max-width: $screen-mobile;
                padding-left: 15px;
                padding-right: 15px;
            }
            .big-title {
                text-align: center;
                margin-bottom: 10px;
                @media (max-width: $screen-mobile) {
                    font-size: 15px;
                    margin-bottom: 10px;
                }
                .title {
                    font-size: 30px;
                    @media (max-width: $screen-mobile) {
                        font-size: 20px;
                    }
                }
            }
            .small-title {
                text-align: center;
                font-size: 15px;
            }
            .all-products-list {
                &__inner {
                    // 네이버 블로그에서 사진과 글귀
                    /*width: 580px;*/
                    width: 100%;
                    height: 100%;
                    .ready-page {
                        margin: 0 auto;
                        p {
                            margin-top: 100px;
                            text-align: center;
                            font-size: 30px;
                            @media (max-width: $screen-mobile) {
                                font-size: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
