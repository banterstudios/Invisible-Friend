import { SubmissionError } from 'redux-form'
import { dataToFormData } from '../../../utils/fileUtils'

// Action Types
export const SUBMIT_FORM = '@gameSignUpModule/SUBMIT_FORM'

// Async Redux form fetch
export const submitForm = (data) => {
  return fetch('http://localhost:8080/api/submitGameForm', {
    method: 'post',
    body: dataToFormData(data)
  }).then((res) => res.json())
    .then((payload) => {
      return Promise.resolve(payload)
    }).catch((errors) => {
      throw new SubmissionError({ errors })
    })
}

// Reducers
const initialState = {}

export default (state = initialState, { type, data }) => {
  switch (type) {
    default:
      return state
  }
}
