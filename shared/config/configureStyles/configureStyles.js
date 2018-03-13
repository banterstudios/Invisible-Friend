import { rehydrate } from 'glamor'

const configureStyles = () => {
  if (process.browser) {
    const initialStyleIds = (window.__INITIAL_STYLE_IDS__ || '')
    rehydrate(initialStyleIds)
  }
}

export default configureStyles
