<template>
  <div class="wrap-title">
    <p class="title font-bold">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HhrPageTitle',
  props: {
    title: String,
    default: null,
  },
}
</script>

<style lang="scss" scoped>
    .wrap-title {
        @include title-common-style;
    }
</style>
