module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/whole_style.scss";
        `
      }
    }
  },
  devServer: { disableHostCheck: true },
  productionSourceMap: false
}
