const webpack = require('webpack')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/whole_style.scss";
        `,
      },
    },
  },
  devServer: { disableHostCheck: true },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        _: 'lodash',
        'window.jQuery': 'jquery',
        Promise: 'es6-promise',
      }),
    ],
  },
}
