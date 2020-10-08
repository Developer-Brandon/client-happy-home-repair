<template>
  <div>
    <img
      v-if="!toggle"
      class="up-and-down-arrow-icon"
      alt="위아래화살표아이콘"
      src="@/assets/images/icons/icon-up-and-down-gray-arrow.png"
    />
    <img
      v-else-if="toggle"
      class="up-and-down-arrow-icon"
      alt="위아래화살표아이콘"
      src="@/assets/images/icons/icon-up-and-down-arrow.png"
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
