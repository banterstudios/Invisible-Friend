import update from 'immutability-helper'

// Action Types
export const ADD_FILES = '@dropZoneModule/ADD_FILES'

// Action Creators
export const addFiles = ({ key, files }) => ({
  type: ADD_FILES,
  data: {
    key,
    files
  }
})

// Reducers
const initialState = {}

const defaultState = {
  files: {},
  hasFiles: false
}

const getDropZone = (state, key) => (state[key] ? state[key] : { ...defaultState })

export default (state = initialState, { type, data }) => {
  switch (type) {
    case ADD_FILES:
      const { key, files } = data

      return update(state, {
        [key]: {
          $set: {
            ...getDropZone(state, key),
            files,
            hasFiles: true
          }
        }
      })

    default:
      return state
  }
}
