<template>
  <transition name="page-fade">
    <div v-if="values.check.lifeCycle"></div>
  </transition>
</template>

<script>
export default {
  name: 'Notice',
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.values.check.lifeCycle = true
    })
  },
}
</script>

<style scoped>

</style>
