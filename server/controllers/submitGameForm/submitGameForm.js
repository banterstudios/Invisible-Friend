import multer from 'multer'
import { successMessage, errorMessage } from '../../utils/messages'
import { allowedImageTypes, allowedAudioTypes } from '../../../shared/consts/forms/gameSignUpForm'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'C:/Users/NickD/Documents/projects/Invisible-Friend/server/uploads/tmp')
  },
  filename: (req, { fieldname }, cb) => {
    cb(null, `${fieldname}-${Date.now()}`)
  }
})

const fileFilter = (req, { mimetype }, cb) => {
  if (allowedImageTypes.includes(mimetype) || allowedAudioTypes.includes(mimetype)) {
    return cb(null, true)
  }

  return cb(null, false, new Error('Only images or audio files are allowed!'))
}

const FIELDS = {
  IMAGE_DROP_ZONE: 'imageDropZone',
  AUDIO_DROP_ZONE: 'audioDropZone'
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

const gameFormMulterUpload = upload.fields([{ name: FIELDS.IMAGE_DROP_ZONE, maxCount: 1 }, { name: FIELDS.AUDIO_DROP_ZONE, maxCount: 1 }])

export default (req, res) => {
  gameFormMulterUpload(req, res, (error) => {
    if (error) {
      return res.status(400).json(errorMessage({ message: 'failed to upload' }))
    }

    if (!req.files[FIELDS.IMAGE_DROP_ZONE]) {
      return res.status(400).json(errorMessage({
        error: {
          name: FIELDS.IMAGE_DROP_ZONE,
          reason: 'Invalid image type. Please submit a valid image type.'
        }
      }))
    }

    if (!req.files[FIELDS.AUDIO_DROP_ZONE]) {
      return res.status(400).json(errorMessage({
        error: {
          name: FIELDS.AUDIO_DROP_ZONE,
          reason: 'Invalid audio type. Please submit a valid audio clip.'
        }
      }))
    }

    console.log(req.files)

    res.status(200).json(successMessage({ data: {} }))
  })
}
