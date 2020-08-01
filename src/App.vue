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
      width: 30px !important;
      height: 27px !important;
      left: 20px !important;
      top: 18px !important;
      cursor: pointer;
    }

    .bm-burger-bars {
      background-color: black !important;
    }

    .bm-menu {
      text-align: center !important;
      background-color: white !important;
    }

    .bm-item-list {
      color: $hhr-deep-gray !important;
      margin-left: 0 !important;
      font-size: 16px !important;
    }

    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.6em !important;
    }

    .bm-item-list > * > span {
      font-family: 'TmonTium';
      margin: 0 auto !important;
      font-weight: 700;
      color: $hhr-deep-gray !important;
      text-align: center !important;
    }

    .bm-cross {
      background: $hhr-deep-gray !important;
    }
</style>
