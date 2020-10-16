<template>
  <div>
    <!-- TODO: gray button 디자인 후 src 삽입-->
    <img
      v-if="!toggle"
      class="up-and-down-arrow-icon"
      alt="위아래화살표아이콘"
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
