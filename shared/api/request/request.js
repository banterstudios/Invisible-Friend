import 'whatwg-fetch'

import { verifyServerFormat, isParseable } from '../requestUtils'

const request = ({ url, ...rest }) => (
  fetch(url, rest)
    .then(isParseable)
    .then(verifyServerFormat)
    .catch((error) => Promise.reject(error))
)

export const GET = (params) => request({ method: 'GET', ...params })
export const POST = (params) => request({ method: 'POST', ...params })
export const PUT = (params) => request({ method: 'PUT', ...params })
export const DELETE = (params) => request({ method: 'DELETE', ...params })
