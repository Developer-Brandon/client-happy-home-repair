<template>
  <div id="app">
    <div class="container">
      <public-header />
      <router-view />
      <public-footer />
    </div>
  </div>
</template>

<script>
import publicHeader from '@/components/main/Header.vue';
import publicFooter from '@/components/main/Footer.vue';

export default {
  name: 'App',
  components: {
    publicHeader,
    publicFooter,
  },
};
</script>

<style lang="scss">
  // 위에 scss에는 scoped 채우면 안됩니다
   #app {
        font-family: 'Arita', serif;
        .container {
            max-width: 100%;
            margin: 0;
        }
   }
</style>
