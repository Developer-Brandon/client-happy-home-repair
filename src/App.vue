<template>
  <div id="app">
    <div class="container">
      <hhr-header />
      <router-view />
      <hhr-footer />
    </div>
  </div>
</template>

<script>
import hhrHeader from '@/components/main/Header.vue';
import hhrFooter from '@/components/main/Footer.vue';

export default {
  name: 'App',
  // metaInfo: {
  //   meta: [
  //     { hid: 'og:url', property: 'og:url', content: '' },
  //     { property: 'og:site_name', content: '해피홈리페어' },
  //     { property: 'og:type', content: 'website' },
  //     { hid: 'og:title', property: 'og:title', content: '해피홈리페어: 주택내장수리 전문업체' },
  //     {
  //       hid: 'og:description',
  //       property: 'og:description',
  //       content: '창호, 방충망, 샤시수리 전문 해피 홈 리페어입니다.\n주택내장 수리는 해피홈리페어\n010-9018-5553',
  //     },
  //     {
  //       hid: 'og:image',
  //       property: 'og:image',
  //       content: 'https://dk-projects-images.s3.ap-northeast-2.amazonaws.com/hhr_ad.png',
  //     },
  //   ],
  // },
  components: {
    hhrHeader,
    hhrFooter,
  },
};
</script>

<style lang="scss">
    // 위에 scss에는 scoped 채우면 안됩니다
    #app {
        font-family: 'Arita', serif;
        .container {
            overflow-x: hidden;
            overflow-y: auto;
            max-width: 100%;
            margin: 0;
        }
    }

    // CUSTOM HAMBURGER BUTTON
    .bm-burger-button {
      width: 34px;
      height: 27px !important;
      left: 15px !important;
      top: 18px !important;
      cursor: pointer;
    }

    .bm-burger-bars {
      background-color: #4296ff !important;
    }

    .bm-menu {
      background-color: #1567de !important;
    }

    .bm-item-list {
      color: #4296ff !important;
      margin-left: 10%;
      font-size: 16px !important;
    }

    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }

    .bm-item-list > * > span {
      font-family: 'TmonTium';
      margin-left: 10px;
      font-weight: 700;
      color: #4296ff !important;
    }

    .bm-cross {
      background: #4296ff !important;
    }
</style>
