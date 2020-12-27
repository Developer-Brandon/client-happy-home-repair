const webpack = require('webpack')
// const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { VueLoaderPlugin } = require('vue-loader')
// const { MiniCssExtractPlugin } = require('mini-css-extract-plugin')

const developer = 'Brandon Lee'
const realName = 'Dokyeom Lee'
const email = 'lovefinance@naver.com'
const github = 'https://github.com/Developer-Brandon?tab=repositories'

module.exports = {
  // pages: {
  //   index: {
  //     entry: ['./src/main.js'],
  //     template: 'public/index.html',
  //     output: {
  //       filename: 'bundle.js',
  //       path: path.resolve(__dirname, './dist'),
  //       publicPath: './dist/',
  //     },
  //   },
  // },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/whole_style.scss";
        `,
      },
    },
  },
  devServer: {
    disableHostCheck: true,
  },
  productionSourceMap: false,
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
              ],
            },
          },
        },
        // {
        // test: /\.vue$/,
        // loader: 'vue-loader',
        // options: {
        //   loaders: {
        //     scss: 'vue-style-loader!css-loader!sass-loader',
        //   },
        // },
        // {
        //   test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        //   loader: 'file-loader',
        //   options: {
        //     outputPath: './dist/',
        //     name: '[name].[ext]?[hash]',
        //     limit: 10000,
        //   },
        // },
      ],
    },
    // resolve: {
    //   alias: {
    //     '@': path.join(__dirname, 'src/'),
    //   },
    //   extensions: ['*', '.js', '.vue', '.json'],
    // },
    plugins: [
      new webpack.BannerPlugin(`Developer: ${developer} (${realName})\nEmail: ${email}\nGithub: ${github}\n`),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        _: 'lodash',
        'window.jQuery': 'jquery',
        Promise: 'es6-promise',
      }),
      new CleanWebpackPlugin(),
      // new VueLoaderPlugin(),
    ],
    optimization: {
      minimize: true,
      concatenateModules: true,
    },
  },
}
