import React from 'react'
import { Provider } from 'react-redux'
import { renderStatic } from 'glamor/server'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../../../shared/components/App'
import { configureStore } from '../../../shared/redux/store'
import serializeJS from 'serialize-javascript'
import gameSubmitFormModel from '../../models/submitGameForm'
import { addInitialData } from '../../../shared/redux/modules/game'

export default async (req, res) => {
  const context = {}
  const initialState = {}

  const store = configureStore(initialState)

  if (req.url.includes('/game/')) {
    try {
      const data = await gameSubmitFormModel.findOne({ gameName: req.params.id }, { __v: false, _id: false }).lean()
      store.dispatch(addInitialData(data))
    } catch (e) {}
  }

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
