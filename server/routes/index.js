import React from 'react'

import { Provider } from 'react-redux'

import { renderStatic } from 'glamor/server'

import ReactDOMServer from 'react-dom/server'

import { StaticRouter } from 'react-router'

import App from '../../client/components/App'

import express from 'express'

import { configureStore } from '../../client/redux/store'

import serializeJS from 'serialize-javascript'

const router = express.Router()

// Deal with the home page
const controller = (req, res) => {
  const context = {}
  const initialState = {}

  const store = configureStore(initialState)

  const { html, css, ids = [] } = renderStatic(() => ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  ))

  const templateData = {
    title: 'Invisible Friend',
    initialHtml: html,
    initialCSS: css,
    initialIds: serializeJS(ids),
    initialJSONState: serializeJS(store.getState(), { isJSON: true })
  }

  // Render the index.handlebars with the template data.
  res.render('index', templateData)
}

router.get([
  '/'
], controller)

module.exports = router
