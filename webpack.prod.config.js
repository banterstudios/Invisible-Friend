const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SCSSVars = require(path.resolve(__dirname, 'shared/consts/themes/index.js'))

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/server/views/index.handlebars'),
  filename: 'views/index.handlebars',
  inject: 'body',
  minify: {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true
  }
})

const cleanWebpackBuild = new CleanWebpackPlugin(['build'], {
  root: __dirname,
  verbose: true,
  dry: false,
  exclude: ['.gitkeep']
})

const CopyWebpackPluginConfig = new CopyWebpackPlugin([{
  from: 'shared/assets/images/',
  to: 'assets/images/'
}])

const filteredScssVars = Object.entries(SCSSVars).reduce((obj, [key, value]) => {
  if (!key.includes('Query')) {
    obj[key] = value
  }

  return obj
}, {})

module.exports = {
  entry: [
    'babel-polyfill',
    './shared/index.js',
    './shared/styles/index.scss'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'js/app.[hash].js',
    publicPath: '/static'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      // Pre-loaders
      {
        test: /\.scss/,
        enforce: 'pre',
        loader: 'import-glob'
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
                syntax: 'scss',
                vars: filteredScssVars
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
          name: 'assets/[path][name].[hash].[ext]',
          context: './shared/assets'
        }
      }
    ]
  },
  plugins: [
    cleanWebpackBuild,
    HTMLWebpackPluginConfig,
    CopyWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],

  devtool: 'cheap-module-source-map'
}
