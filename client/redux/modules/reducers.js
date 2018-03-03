import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import dropZone from './dropZoneModule'

const rootReducer = combineReducers({
  form: formReducer,
  dropZone
})

export default rootReducer
