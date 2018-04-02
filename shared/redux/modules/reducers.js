import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import dropZone from './dropZoneModule'
import game from './game'

const rootReducer = combineReducers({
  form: formReducer,
  dropZone,
  game
})

export default rootReducer
