<template>
  <div id="app">
    <div
      class="container"
      :class="{'removeWholeScroll':modalLifeCycle,'createWholeScroll':!modalLifeCycle ,
               'modal-has-opened':modalLifeCycle, 'modal-has-close':!modalLifeCycle}"
    >
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
  data() {
    return {
      values: {
        check: {
          modal: {
            lifeCycle: false,
          },
        },
      },
    }
  },
  computed: {
    modalLifeCycle() {
      return this.$store.getters['app/getModalState']
    },
  },
  methods: {
    noScroll() {
      window.scrollTo(0, 0)
    },
    createWholeScroll() {
    // firefox, chrome
      document.documentElement.style.overflow = 'auto'
      // ie only
      document.body.scroll = 'yes'
    },
    removeWholeScroll() {
    // firefox, chrome
      window.removeEventListener('scroll')
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
            &.modal-has-opened {
                -ms-overflow-style: none;
                overflow-y: hidden;
                &::-webkit-scrollbar {
                    display: none;
                    width: 0;
                    background: transparent;
                }
            }
            &.modal-has-close {
                height: 100%;
                overflow-y: auto;
            }
        }
    }
</style>
