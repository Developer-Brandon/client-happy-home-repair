<template>
  <div>
    <img
      v-if="!toggle"
      class="up-and-down-arrow-icon"
      alt="위아래화살표아이콘"
      src="@/assets/images/icons/up-and-down-icon-gray.png"
    />
    <img
      v-else-if="toggle"
      class="up-and-down-arrow-icon"
      alt="위아래화살표아이콘"
      src="@/assets/images/icons/up-and-down-icon-black.png"
    />
  </div>
</template>

<script>
export default {
  name: 'UpAndDownIcon',
  props: {
    toggle: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.up-and-down-arrow-icon {
    width: 14px !important;
    height: 16px !important;
}
</style>
