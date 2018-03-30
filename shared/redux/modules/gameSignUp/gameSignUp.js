import { SubmissionError } from 'redux-form'
import { dataToFormData } from '../../../utils/fileUtils'
import { POST } from '../../../api/request'

// Action Types
export const SUBMIT_FORM = '@gameSignUpModule/SUBMIT_FORM'

// Async Redux form fetch
export const submitForm = (data) => (
  POST({
    url: 'http://localhost:8080/api/submitGameForm',
    body: dataToFormData(data)
  })
    .then((payload) => {
      return Promise.resolve(payload)
    })
    .catch(({ error: { name, reason }, message }) => {
      throw new SubmissionError({
        _error: message,
        [name]: reason
      })
    })
)

// Reducers
const initialState = {}

export default (state = initialState, { type, data }) => {
  switch (type) {
    default:
      return state
  }
}
