// import Webpack from 'webpack';
const webpack = require('webpack');
var Htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');
// const path from 'path';

const config = {
  // 入口文件
  entry: './src/app.js',
  // 出口文件配置
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: 'bundle.[chunkhash].js',
    chunkFilename: '[name]-[chunkhash:8].js'
  },
  devServer: {
    //historyApiFallback: true,
    hot: true,
    inline: true,
    // progress: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
          // plugins: ['transform-runtime']
        }
        // include: SRC_PATH
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.css$/,
        use: 'style-loader!css-loader',
        // include: SRC_PATH
      }, {
        test: /\.less$/,
        use: 'style-loader!css-loader!less-loader',
        // include: SRC_PATH
      }, {
        test: /\.scss$/,
        use: 'style-loader!css-loader!scss-loader',
        // include: SRC_PATH
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'url?limit=40000'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      option: {
        // 			babel: {
        // 	presets: ['es2015'],
        // 	plugins: ['transform-runtime']
        // },
        vue: {
          loaders: {
            sass: 'vue-style!css!sass?indentedSyntax',
            scss: 'vue-style!css!sass'
          }
        }
      }
    }),
    new Htmlwebpackplugin({
      title: "vue小测试",
      hash: true,
      template: './index.html',
      inject: 'body',
      filename: './index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.[hash].js'})
  ]
}

module.exports = config;
