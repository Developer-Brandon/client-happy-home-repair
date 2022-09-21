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
        <!-- Data load is finished -->
        <div
          v-if="values.check.dataLoadedEnd"
          class="when-browser-can-load-notice-list"
        >
          <ul class="notice-list notice-list-fade-in">
            <li
              v-for="(notice, index) in noticeList"
              :key="index"
              class="notice-list__item"
              @click="clickNoticeItem(notice)"
            >
              <span class="notice-list__item__left-side">{{ notice.title }}</span>
              <span class="notice-list__item__right-side">{{ notice.regDt }}</span>
            </li>
          </ul>
        </div>
        <!-- Data load is failed -->
        <div
          v-else
          class="when-browser-cant-load-notice-list"
        >
          <p>공지사항 리스트를 불러오는데에 실패하였습니다.</p>
        </div>
        <div style="margin-bottom:80px;">
          <div>
            <b-pagination
              v-model="values.currentPage"
              :per-page="values.perPage"
              :total-rows="noticeWholeCount"
              next-text=">"
              prev-text="<"
              first-number
              last-number
              style="justify-content: center !important;"
              @page-click="pageClick"
            ></b-pagination>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { EventBus } from '@/assets/js/plugin/eventBus'
import HhrPageTitle from '@/components/util/HhrPageTitle.vue'
import HhrNetwork from '@/assets/js/network/HhrNetwork'

import '@/assets/scss/_common_bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  name: 'Notice',
  components: {
    HhrPageTitle,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
          dataLoadedEnd: false,
        },
        perPage: 10, // 한 페이지당 몇개의 item을 보여줄지의 여부입니다.
        currentPage: 1,
      },
    }
  },
  computed: {
    noticeList() {
      return this.$store.getters['notice/noticeList']
    },
    noticeWholeCount() {
      return this.$store.getters['notice/noticeWholeCount']
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.callNoticeList()
        .then(() => {
          this.values.check.lifeCycle = true
          this.values.check.dataLoadedEnd = true
        })
      this.callNoitceCount()
    })
  },
  methods: {
    callNoitceCount() {
      HhrNetwork.getNoticeCount()
        .then((response) => {
          this.$store.dispatch('notice/CALL_NOTICE_WHOLE_CNT', response.data)
        })
    },
    callNoticeList(currentPage = 1) {
      return new Promise((resolve, reject) => {
        HhrNetwork.getNoticeList(currentPage)
          .then((response) => {
            this.$store.dispatch('notice/CALL_NOTICE_LIST', response.data)
              .then(() => {
                EventBus.$emit('callHhrLoadingProgress', false)
                resolve()
              })
            resolve()
          })
          .catch((error) => {
            console.log(`error 추적 : ${error}`)
            reject(error)
          })
      })
    },
    clickNoticeItem(notice) {
      this.$router.push({
        name: 'NoticeDetail',
        params: { noticeIndex: notice.noticeNo },
      })
    },
    clickCallback(pageNum) {
      console.log(pageNum)
    },
    pageClick(button, page) {
      this.currentPage = page
      this.getNoticeListByPage(page)
    },
    getNoticeListByPage(page) {
      this.callNoticeList(page)
    },
  },
}
</script>

<style lang="scss" scoped>

.pagination {

}

.page-item {
}

// @Local Util
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
      @media (max-width: $screen-mobile) {
        width: auto;
        margin: 0;
        text-align: center;
        border-left: 0 !important;
      }
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
          border-bottom: 1px solid $hhr-gray;

          &:last-child {
            border-bottom: none;
          }

          @media (max-width: $screen-mobile) {
            padding: 10px;
          }

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
