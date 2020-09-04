<template>
  <ul class="hhr-simple-table">
    <li
      v-for="(object, index) in tableList"
      :key="index"
      class="hhr-simple-table__row"
    >
      <span class="introduce-box">{{ object.attribute }}</span>
      <span class="introduce-contents">{{ object.contents }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HhrSimpleRow',
  props: {
    tableList: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
    .hhr-simple-table {
        &__row {
            &:nth-child(odd) {
                .introduce-box {
                    display: inline-block;
                    width: 400px;
                    background-color: $hhr-blue;
                    color: white;
                    font-size: 20px;
                    padding: 10px 0 10px 15px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                        display: block;
                    }
                }
                .introduce-contents {
                    display: inline-block;
                    width: calc(100% - 400px);
                    font-size: 20px;
                    padding: 10px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                        display: block;
                    }
                }
            }
            &:nth-child(even) {
                .introduce-box {
                    display: inline-block;
                    width: 400px;
                    background-color: $hhr-gray;
                    color: $hhr-deep-gray;
                    font-size: 20px;
                    padding: 10px 0 10px 15px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                        display: block;
                    }
                }
                .introduce-contents {
                    display: inline-block;
                    width: calc(100% - 400px);
                    font-size: 20px;
                    padding: 10px;
                    @media (max-width: $screen-mobile) {
                        width: 100%;
                        display: block;
                    }
                }
            }
        }
    }
</style>
