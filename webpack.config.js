const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/server/views/index.handlebars'),
  alwaysWriteToDisk: true,
  filename: 'index.handlebars',
  inject: 'body'
})

const HTMLWebpackHardDiskPlugin = new HtmlWebpackHarddiskPlugin({
  outputPath: path.join(__dirname, '/build/views')
})

const CopyWebpackPluginConfig = new CopyWebpackPlugin([{
  from: 'client/assets/images/',
  to: 'assets/images/'
}, {
  from: 'client/assets/fonts/',
  to: 'assets/fonts/'
}])

module.exports = {
  entry: [
    'babel-polyfill',                                                                                                                                                                                                                                       
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './client/index.js',
    './client/styles/index.scss'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'js/app.js',
    publicPath: '/static'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      // Pre-loaders
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.scss/,
        loader: 'import-glob',
        enforce: 'pre'
      },
      // Loaders
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?-autoprefixer&sourceMap&minimize',
            'postcss-loader',
            'sass-loader?sourceMap',
            {
              loader: '@epegzz/sass-vars-loader',
              options: {
                files: [
                  path.resolve(__dirname, 'client/consts/themes/index.js')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|mp4|woff2)$/i,
        loader: 'file-loader',
        query: {
          name: 'assets/[path][name].[ext]',
          context: './client/assets'
        }
      }
    ]
  },
  plugins: [
    new WriteFilePlugin({
      test: /\.(jpe?g|png|gif|svg)$/
    }),
    HTMLWebpackPluginConfig,
    HTMLWebpackHardDiskPlugin,
    CopyWebpackPluginConfig,
    new ExtractTextPlugin('css/[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  devtool: 'cheap-module-eval-source-map'
}
