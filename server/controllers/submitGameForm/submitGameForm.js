import multer from 'multer'
import { successMessage, errorMessage } from '../../utils/messages'
import { allowedImageTypes, allowedAudioTypes } from '../../../shared/consts/forms/gameSignUpForm'
import path from 'path'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(`../../uploads/tmp`))
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`)
  }
})

const fileFilter = (req, { mimetype }, cb) => {
  if (allowedImageTypes.includes(mimetype) || allowedAudioTypes.includes(mimetype)) {
    return cb(null, true)
  }

  return cb(null, false, new Error('Only images or audio files are allowed!'))
}

const upload = multer({ storage, fileFilter })

const gameFormMulterUpload = upload.fields([{ name: 'imageDropZone', maxCount: 1 }, { name: 'audioDropZone', maxCount: 1 }])

export default (req, res) => {
  gameFormMulterUpload(req, res, (error) => {
    if (error) {
      return res.status(400).json(errorMessage({ error, message: 'failed to upload' }))
    }

    res.status(200).json(successMessage({ data: {} }))
  })
}
