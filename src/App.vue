<template>
  <div id="app">
    <div class="container">
      <hhr-header />
      <router-view id="router-view" />
      <hhr-footer />
    </div>
  </div>
</template>

<script>
import hhrHeader from '@/components/main/Header.vue'
import hhrFooter from '@/components/main/Footer.vue'

export default {
  name: 'App',
  components: {
    hhrHeader,
    hhrFooter,
  },
  methods: {
    createWholeScroll() {
      // firefox, chrome
      document.documentElement.style.overflow = 'auto'
      // ie only
      document.body.scroll = 'yes'
    },
    removeWholeScroll() {
      // firefox, chrome
      document.documentElement.style.overflow = 'hidden'
      // ie only
      document.body.scroll = 'no'
    },
  },
}
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
        width: 25px !important;
        height: 22px !important;
        left: 22px !important;
        top: 20px !important;
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
        margin: 0 auto !important;
        font-weight: 700;
        color: $hhr-deep-gray !important;
        text-align: center !important;
    }

    .bm-cross {
        background: $hhr-deep-gray !important;
    }
</style>
