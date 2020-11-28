<template>
  <section
    class="wrap-loading-progress"
    :class="{
      'show': values.visible,
      'hide': !values.visible,
    }"
  >
    <div class="dim"></div>
    <loading-progress
      :progress="values.progressCircle.progress"
      :indeterminate="values.progressCircle.indeterminate"
      :counter-clockwise="values.progressCircle.counterClockwise"
      :hide-background="values.progressCircle.hideBackground"
      size="64"
      rotate
      fill-duration="2"
      rotation-duration="1"
    />
  </section>
</template>

<script>
export default {
  name: 'HhrLoadingProgress',
  data() {
    return {
      values: {
        visible: false,
        progressCircle: {
          progress: 0,
          indeterminate: true,
          counterClockwise: false,
          hideBackground: false,
        },
      },
    }
  },
  methods: {
    show(visible) {
      this.values.visible = visible
    },
  },
}
</script>

<style lang="scss">
    // @Local Utils
    .show {
        display: block;
    }

    .hide {
        display: none;
    }

    // @Classes
    .wrap-loading-progress {
        position: fixed;
        overflow: auto;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 0;
        text-align: center;
        -webkit-transition: opacity .2s ease-in;
        -moz-transition: opacity .2s ease-in;
        -o-transition: opacity .2s ease-in;
        transition: opacity .2s ease-in;
        z-index: 3;
        &:before {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            content: "";
            font-size: 0;
            width: 0;
            height: 100%;
        }
        .dim {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-color: rgba(0, 0, 0, .5);
        }
        .vue-progress-path {
            .progress {
                stroke: $hhr-blue;
            }
        }
    }
</style>
