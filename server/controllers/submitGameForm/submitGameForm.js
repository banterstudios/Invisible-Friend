import multer from 'multer'
import { successMessage, errorMessage } from '../../utils/messages'
import { allowedImageTypes, allowedAudioTypes } from '../../../shared/consts/forms/gameSignUpForm'

const fileFilter = (req, { mimetype }, cb) => {
  if (allowedImageTypes.includes(mimetype) || allowedAudioTypes.includes(mimetype)) {
    return cb(null, true)
  }

  return cb(null, false)
}

const multerOptions = {
  dest: '../../uploads/tmp/',
  fileFilter
}

const upload = multer(multerOptions).fields([{ name: 'picture', maxCount: 1 }, { name: 'audio', maxCount: 1 }])

export default (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      res.status(406).json(errorMessage({ message: 'Problem uploading files', error }))
    } else {
      res.status(200).json(successMessage({ data: {} }))
    }
  })
}
