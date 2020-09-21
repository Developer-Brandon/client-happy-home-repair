<template>
  <transition name="page-fade">
    <div v-if="values.check.lifeCycle">
      <p style="text-align:center;padding:40px;">준비중인 기능입니다.</p>
    </div>
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
