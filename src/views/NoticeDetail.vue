<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="notice-detail"
    >
      <div class="notice-detail__inner">
        <div class="index-box">
          <div class="index-box__inner">
            <div
              v-show="values.notice.beforeTitle"
              class="before-notice"
            >
              <span class="before">
                이전글
              </span>
              <div class="before-title hhr-ellipsis">
                <span
                  class="before-title__contents hhr-ellipsis"
                  @click="callNotice(values.notice.beforeIndex)"
                >
                  {{ values.notice.beforeTitle }}
                </span>
              </div>
            </div>
            <div
              v-show="values.notice.nextTitle"
              class="next-notice hhr-ellipsis"
            >
              <span class="next">
                다음글
              </span>
              <div class="next-title hhr-ellipsis">
                <span
                  class="next-title__contents hhr-ellipsis"
                  @click="callNotice(values.notice.nextIndex)"
                >
                  {{ values.notice.nextTitle }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <hhr-clear-both />
        <div
          class="wrap-go-to-list"
          @click="goToNoticeList"
        >
          <p class="go-to-list">
            목록으로
          </p>
        </div>
        <hhr-clear-both />
        <div class="header">
          <div class="number">
            <span>{{ values.notice.index }}</span>
          </div>
          <div class="title hhr-ellipsis">
            <span class="hhr-ellipsis">{{ values.notice.title }}</span>
          </div>
          <div class="registered-date">
            <span>{{ values.notice.registeredDate }}</span>
          </div>
        </div>
        <hhr-clear-both />
        <div class="body">
          <div class="body__inner">
            {{ values.notice.contents }}
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'

export default {
  name: 'NoticeDetail',
  components: {
    HhrClearBoth,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
        notice: {},
      },
    }
  },
  mounted() {
    const noticeIndex = this.getParams()
    this.callNotice(noticeIndex)
  },
  methods: {
    getParams() {
      return this.$route.params.noticeIndex
    },
    goToNoticeList() {
      this.$router.push('/Notice')
    },
    callNotice(noticeIndex) {
      console.log('noticeIndex: ', noticeIndex)
      this.$store.dispatch('notice/CALL_NOTICE', { noticeIndex })
        .then(() => {
          // this.notice = response.notice
          this.values.notice = {
            index: 1,
            title: '첫번째 게시물 제목입니다',
            beforeTitle: '이전게시물입니다.긴글테스트.이전게시물입니다.긴글테스트.이전게시물입니다.긴글테스트.이전게시물입니다.긴글테스트.이전게시물입니다.긴글테스트.이전게시물입니다.긴글테스트.',
            beforeIndex: 0,
            nextTitle: '이전게시물입니다',
            nextIndex: 2,
            registeredDate: '2020-01-01',
            contents: '첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.첫번째 게시물 내용입니다.',
          }
          this.values.check.lifeCycle = true
        })
    },
  },
}
</script>

<style lang="scss" scoped>
    .notice-detail {
        &__inner {
            max-width: 700px;
            margin: 0 auto;
            .index-box {
                margin-top: 20px;
                height: 112px;
                &__inner {
                    width: 100%;
                    height: 112px;
                    margin-bottom: 20px;
                    border-bottom: 1px solid $hhr-opacity-deep-gray;
                    .before-notice {
                        cursor: pointer;
                        padding-left: 20px;
                        width: 100%;
                        height: 50%;
                        transition: 0.3s;
                        .before {
                            display: inline-block;
                            width: 80px;
                            line-height: 56px;
                            vertical-align: middle;
                            @media (max-width: $screen-mobile) {
                                max-width: 50px;
                            }
                        }
                        .before-title {
                            display: inline-block;
                            width: calc(100% - 100px);
                            line-height: 56px;
                            vertical-align: middle;
                            @media (max-width: $screen-mobile) {
                                width: calc(100% - 70px);
                            }
                            &__contents {
                                width: 580px;
                            }
                        }
                        &:hover {
                            background-color: $hhr-opacity-deep-gray;
                        }
                    }
                    .next-notice {
                        cursor: pointer;
                        padding-left: 20px;
                        width: 100%;
                        height: 50%;
                        transition: 0.3s;
                        .next {
                            display: inline-block;
                            width: 80px;
                            line-height: 56px;
                            vertical-align: middle;
                            @media (max-width: $screen-mobile) {
                              max-width: 50px;
                            }
                        }
                        .next-title {
                            display: inline-block;
                            width: calc(100% - 100px);
                            line-height: 56px;
                            vertical-align: middle;
                            @media (max-width: $screen-mobile) {
                                width: calc(100% - 70px);
                            }
                            &__contents {
                                width: 580px;
                            }
                        }
                        &:hover {
                            background-color: $hhr-opacity-deep-gray;
                        }
                    }
                }
            }
            .wrap-go-to-list {
                position: relative;
                height: 70px;
                .go-to-list {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    @media (max-width: $screen-mobile) {
                        padding-left: 30px;
                    }
                }
            }
            .header {
                margin-top: 15px;
                height: 60px;
                border-top: 1px solid $hhr-opacity-deep-gray;
                border-bottom: 1px solid $hhr-opacity-deep-gray;
                @media (max-width: $screen-mobile) {
                    padding-left: 5px;
                    padding-right: 5px;
                }
                .number {
                    float: left;
                    width: 70px;
                    text-align: center;
                    @media (max-width: $screen-mobile) {
                        width: 50px;
                    }
                    span {
                        line-height: 56px;
                        vertical-align: middle;
                    }
                }
                .title {
                    float: left;
                    width: calc(100% - 220px);
                    text-align: center;
                    @media (max-width: $screen-mobile) {
                        width: calc(100% - 150px);
                    }
                    span {
                        width: inherit;
                        line-height: 56px;
                        vertical-align: middle;
                    }
                }
                .registered-date {
                    float: left;
                    text-align: center;
                    width: 150px;
                    @media (max-width: $screen-mobile) {
                        width: 100px;
                    }
                    span {
                        line-height: 56px;
                        vertical-align: middle;
                    }
                }
            }
            .body {
                padding: 20px;
                &__inner {
                    min-height: 500px;
                }
            }
        }
    }

</style>
