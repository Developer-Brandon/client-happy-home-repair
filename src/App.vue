<template lang="html">
  <div id="app">
    <div class="container">
      <hhr-header />
      <router-view />
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
        .container {
            overflow-x: hidden;
            overflow-y: auto;
            max-width: 100%;
            margin: 0;
        }
    }
</style>
