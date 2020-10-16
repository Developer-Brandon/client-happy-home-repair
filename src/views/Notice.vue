<template>
  <transition name="page-fade">
    <section
      v-if="values.check.lifeCycle"
      class="section"
    >
      <div class="section__inner">
        <hhr-page-title
          title="공지사항"
          class="notice-title notice-title-fade-in"
        />
        <!-- Data load ended -->
        <div
          v-if="values.check.dataLoadedEnd"
          class="when-browser-can-load-notice-list"
        >
          <ul class="notice-list notice-list-fade-in">
            <li
              v-for="(notice, index) in noticeList"
              :key="index"
              class="notice-list__item"
            >
              <span class="notice-list__item__left-side">{{ notice.title }}</span>
              <span class="notice-list__item__right-side">{{ notice.registeredDate }}</span>
            </li>
          </ul>
        </div>
        <!-- Data load failed -->
        <div
          v-else
          class="when-browser-cant-load-notice-list"
        >
          <p>공지사항 리스트를 불러오는데에 실패하였습니다.</p>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
// import HhrClearBoth from '@/components/util/HhrClearBoth.vue'
import HhrPageTitle from '@/components/util/HhrPageTitle.vue'

export default {
  name: 'Notice',
  components: {
    // HhrClearBoth,
    HhrPageTitle,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
          dataLoadedEnd: false,
        },
      },
    }
  },
  computed: {
    noticeList() {
      return this.$store.getters['notice/noticeList']
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.callNoticeList()
        .then(() => {
          this.values.check.lifeCycle = true
          this.values.check.dataLoadedEnd = true
        })
    })
  },
  methods: {
    callNoticeList() {
      return new Promise((resolve) => {
        this.$store.dispatch('notice/CALL_NOTICE')
          .then(() => {
            resolve()
          })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .notice-title-fade-in {
        @include primary-fade-in(2);
    }
    .notice-list-fade-in {
        @include primary-fade-in(2);
    }

    // @Classes
    .section {
        padding-top: 25px;
        &__inner {
            .notice-title {
                margin-bottom: 25px;
            }

            .when-browser-can-load-notice-list {
                width: auto;
                margin: 50px;
                @media (max-width: $screen-mobile) {
                    margin: 15px;
                }
                .notice-list {
                    width: 800px;
                    margin: 0 auto;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                    }
                    &__item {
                        padding: 10px 4px;
                        height: 70px;
                        line-height: 50px;
                        cursor: pointer;
                        transition: 0.4s;
                        &:hover {
                            border-left: 5px solid $hhr-blue;
                            background-color: $hhr-transparent-light-black;
                        }
                        &:hover .notice-list__item__left-side {
                            font-weight: 700;
                            color: $hhr-deep-gray;
                        }
                        &__left-side {
                            padding-left: 15px;
                            padding-right: 5px;
                            float: left;
                            @media (max-width: $screen-mobile) {
                                padding-left: 5px;
                                clear: both;
                            }
                        }
                        &__right-side {
                            padding-right: 15px;
                            float: right;
                            @media (max-width: $screen-mobile) {
                                display: none;
                                clear: both;
                            }
                        }
                    }
                }
            }

            .when-browser-cant-load-notice-list {
                position: relative;
                width: 100%;
                height: 300px;
                text-align: center;
                padding: 40px;
                @media (max-width: $screen-mobile) {
                    height: 200px;
                    text-align: center;
                    padding: 80px 30px;
                }
                p {
                    position: absolute;
                    top: 30%;
                    left: 38%;
                    @media (max-width: $screen-mobile) {
                        position: static;
                        top: auto;
                        left: auto;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
