import React from 'react'

import {
  BrowserRouter as Routes
} from 'react-router-dom'

import App from '../../components/App'

import { Provider } from 'react-redux'

import store from '../../redux/store'

const Router = () => {
  return (
    <Provider store={store}>
      <Routes>
        <App />
      </Routes>
    </Provider>
  )
}

export default Router
