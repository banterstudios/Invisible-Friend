import { SUCCESS, ERROR } from '../../consts'

export const successMessage = ({ data = {} }) => ({
  status: SUCCESS,
  data
})

export const errorMessage = ({ message = '', error = '' }) => ({
  status: ERROR,
  message,
  error
})
