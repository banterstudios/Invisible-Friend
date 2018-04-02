import update from 'immutability-helper'

// Action Types
export const ADD_INITIAL_DATA = '@game/ADD_INITIAL_DATA'

// Action creators
export const addInitialData = (data) => ({
  type: ADD_INITIAL_DATA,
  data
})

// Reducers
const initialState = {
  data: null
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case ADD_INITIAL_DATA:
      return update(state, {
        data: {
          $set: data
        }
      })

    default:
      return state
  }
}
