import { successMessage } from '../../utils/messages'

export default (req, res) => {
  res.status(200).json(successMessage({ data: { test: '' } }))
}
