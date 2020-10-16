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
              <span
                class="before-title"
                @click="callNotice(values.notice.beforeIndex)"
              >
                {{ values.notice.beforeTitle }}
              </span>
            </div>
            <div
              v-show="values.notice.nextTitle"
              class="next-notice"
            >
              <span class="next">
                다음글
              </span>
              <span
                class="next-title"
                @click="callNotice(values.notice.nextIndex)"
              >
                {{ values.notice.nextTitle }}
              </span>
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
          <div class="title">
            <span>{{ values.notice.title }}</span>
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
            beforeTitle: '이전게시물입니다',
            beforeIndex: 0,
            nextTitle: '다음게시물입니다',
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
                height: 100px;
                &__inner {
                    width: 100%;
                    height: 100%;
                    padding-bottom: 20px;
                    .before-notice {
                        display: table;
                        cursor: pointer;
                        padding-left: 20px;
                        width: 100%;
                        height: 50%;
                        transition: 0.3s;
                        span {
                            display: table-cell;
                            vertical-align: middle;
                        }
                        .before {
                            width: 80px;
                        }
                        .before-notice {
                            cursor:default;
                            line-height: 56px;
                            vertical-align: middle;
                        }
                        &:hover {
                            background-color: $hhr-opacity-deep-gray;
                        }
                    }
                    .next-notice {
                        display: table;
                        cursor: pointer;
                        width: 100%;
                        height: 50%;
                        padding-left: 20px;
                        transition: 0.3s;
                        span {
                            display: table-cell;
                            vertical-align: middle;
                        }
                        .next {
                            width: 80px;
                        }
                        .next-notice {
                            cursor:default;
                            line-height: 56px;
                            vertical-align: middle;
                        }
                        &:hover {
                            background-color: $hhr-opacity-deep-gray;
                        }
                    }
                }
            }
            .wrap-go-to-list {
                height: 15px;
                cursor: pointer;
            }
            .header {
                margin-top: 15px;
                height: 60px;
                border-top: 2px solid $hhr-opacity-deep-gray;
                border-bottom: 2px solid $hhr-opacity-deep-gray;
                .number {
                    float: left;
                    width: 70px;
                    text-align: center;
                    span {
                        cursor:default;
                        line-height: 56px;
                        vertical-align: middle;
                    }
                }
                .title {
                    float: left;
                    text-align: center;
                    width: calc(100% - 220px);
                    span {
                        cursor:default;
                        line-height: 56px;
                        vertical-align: middle;
                    }
                }
                .registered-date {
                    float: left;
                    text-align: center;
                    width: 150px;
                    span {
                        cursor:default;
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
