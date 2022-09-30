<template>
  <transition name="component-fade">
    <div
      v-show="values.lifeCycle"
      class="all-products-announce"
    >
      <div class="all-products-announce__inner">
        <h2 class="big-title font-semi-bold">
          <span class="hhr-blue font-bold title">직접</span>,
          시공 후기를 살펴보고
          결정하세요
        </h2>
        <hhr-divider
          height="1"
          color="$hhr-deep-blue"
          style="margin-top:5px;margin-bottom:5px;"
        />
        <p class="small-title font-semi-bold">
          약 <span
            class="hhr-blue font-bold title"
          >1,000</span>여 건이 넘는 포스팅
          보러가기
        </p>
        <div class="all-products-list">
          <div class="all-products-list__inner">
            <div
              v-if="values.postingsAreExisting"
              class="call-posting-success"
            >
              <!-- https://velog.io/@heelieben/403-Error-img-%ED%83%9C%EA%B7%B8-%EC%99%B8%EB%B6%80-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%9A%94%EC%B2%AD-forbidden-%EB%90%98%EB%8A%94-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95 -->
              <img
                v-for="(product, index) in blogProductList"
                :key="index"
                class="posting-image"
                referrerpolicy="no-referrer"
                :class="{'except-right-margin': judgeProductsCount(index)}"
                :src="product.imgSrc"
                :alt="product.title"
                @click="goToBlog(product.imgSrc)"
              />
            </div>
            <div
              v-else-if="!values.postingsAreExisting"
              class="call-posting-failed"
            >
              <p>포스팅이 존재하지 않습니다.</p>
            </div>
          </div>
          <span
            class="view-more-posting"
            @click="goToBlog(getBlogMainUrl())"
          >더 많은 포스팅 보러가기</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import HhrDivider from '@/components/util/HhrDivider.vue'
import MatchMedia from '@/assets/js/resolution/matchMedia'

let matchMedia

export default {
  name: 'IntroduceAllProducts',
  components: {
    HhrDivider,
  },
  data() {
    return {
      values: {
        lifeCycle: false,
        postingsAreExisting: false,
      },
    }
  },
  computed: {
    ...mapGetters('home', [
      'blogProductList',
    ]),
  },
  mounted() {
    matchMedia = new MatchMedia()
    let limit
    if (matchMedia.isMobile) {
      limit = 10
    } else {
      limit = -1
    }
    this.values.lifeCycle = this.callPostings({ limit })
      .then(() => true)
      .catch(() => false)
  },
  methods: {
    callPostings(params) {
      return new Promise((resolve) => {
        this.$store.dispatch('home/CALL_BLOG_PRODUCT_LIST', params)
          .then(() => {
            this.values.postingsAreExisting = true
            resolve()
          })
      })
    },
    goToBlog(blogUrl) {
      console.log(blogUrl)
      window.open(this.getBlogMainUrl())
    },
    judgeProductsCount(index) {
      index += 1 // 0부터 counting되는 문제 때문에 보정작업을 해줍니다.
      if (matchMedia.isMobile) { // 모바일이면..
        return index % 2 === 0
      } else { // pc면....
        return index % 5 === 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .except-right-margin {
        margin-right: 0 !important;
    }

    // @Class
    .all-products-announce {
        padding: 50px 0;
        height: auto;
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
                    width: 100%;
                    height: auto;
                    .call-posting-success {
                      margin: 0 auto;
                      padding: 40px 0 20px 0;
                      max-width: 900px;
                      @media (max-width: $screen-mobile) {
                        max-width: 290px;
                      }
                      .posting-image {
                        cursor: pointer;
                        width: 170px;
                        height: 170px;
                        margin-right: 10px;
                        margin-bottom: 10px;
                        opacity: 0.5;
                        transition: 0.3s;
                        border-radius: 5px;
                        &:hover {
                          opacity: 1;
                        }
                        @media (max-width: $screen-mobile) {
                          width: 135px;
                          height: 135px;
                        }
                      }
                    }
                    .call-posting-failed {
                        margin: 0 auto;
                        p {
                            margin-top: 100px;
                            padding-bottom: 20px;
                            text-align: center;
                            font-size: 30px;
                            @media (max-width: $screen-mobile) {
                                font-size: 15px;
                            }
                        }
                    }
                }
              .view-more-posting {
                display: block;
                font-size: 20px;
                text-align: center;
                transition: 0.3s;
                margin-bottom: 55px;
                &:hover {
                  cursor: pointer;
                  color: $hhr-blue;
                  font-weight: 700;
                }
              }
            }
        }
    }
</style>
