'use strict'

import express from 'express'

import bodyParser from 'body-parser'

import path from 'path'

import morgan from 'morgan'

import exphbs from 'express-handlebars'

import staticRoutes from './routes'

import isDev from 'isdev'

const port = process.env.PORT || 3100

const app = express()

if (isDev) {
  const webpack = require('webpack')

  const webpackDevMiddleware = require('webpack-dev-middleware')

  const webpackHotMiddleware = require('webpack-hot-middleware')

  const webpackConfig = require('../webpack.config')

  // Use this middleware to set up hot module reloading via webpack.
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: webpackConfig.output.filename,
    noInfo: true,
    stats: {
      colors: true
    },
    historyApiFallback: true,
    publicPath: webpackConfig.output.publicPath
  }))

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    heartbeat: 10 * 1000
  }))
}

const handlebarsConfig = {
  defaultLayout: 'index',
  layoutsDir: path.join(__dirname, '../build/views')
}

app.engine('handlebars',
  exphbs(handlebarsConfig)
)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, '../build/views'))

app.set('view engine', 'handlebars')

app.use(morgan('dev'))

app.use('/static', express.static('build'))

app.use('/', staticRoutes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err,
    error: isDev ? err : {}
  })
})

app.listen(port)

module.exports = app
