import { SUCCESS } from '../../consts/codes'

export const isParseable = (response) => (
  response.json()
)

export const verifyServerFormat = (response = {}) => {
  if (response && response.status === SUCCESS) {
    return Promise.resolve(response.data)
  } else {
    const error = response.data ? response.data : response
    return Promise.reject(error)
  }
}
