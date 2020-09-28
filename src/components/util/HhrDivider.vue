<template>
  <section>
    <div :style="style"></div>
  </section>
</template>

<script>
export default {
  name: 'HhrDivider',
  props: {
    height: {
      type: String,
      default: null,
    },
    color: { //
      type: String,
      default: null,
    },
  },
  computed: {
    style() {
      return {
        'background-color': (this.translateFakeColorToReal(this.color)),
        width: `${100}%`,
        height: `${this.height}px`,
      }
    },
  },
  methods: {
    translateFakeColorToReal(fakeColor) {
      switch (fakeColor) {
        case '$hhr-light-blue':
          return 'rgb(169, 196, 245)'
        case '$hhr-blue':
          return 'rgb(100, 149, 237)'
        case '$hhr-deep-blue':
          return 'rgb(101, 147, 245)'
        case '$hhr-gray':
          return 'rgba(211, 211, 211, 0.5)'
        case '$hhr-light-gray':
          return 'rgba(211, 211, 211, 0.1)'
        case '$hhr-deep-gray':
          return 'rgb(53,53,53)'
        case '$hhr-white':
          return 'rgb(255,255,255)'
        case '$hhr-light-white':
          return 'rgba(255,255,255,0.5)'
        case '$hhr-transparent-white':
          return 'rgba(211, 211, 211, 0.8)'
        case '$hhr-red':
          return 'rgb(300,18,27)'
        case '$hhr-deep-red':
          return 'rgb(145,18,27)'
        default:
          return 'rgb(300,18,27)'
      }
    },
  },
}
</script>
