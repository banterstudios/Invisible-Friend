import multer from 'multer'
import { successMessage, errorMessage } from '../../utils/messages'
import { allowedImageTypes, allowedAudioTypes } from '../../../shared/consts/forms/gameSignUpForm'
import {
  INVALID_AUDIO_TYPE,
  INVALID_IMAGE_TYPE,
  INVALID_GAME_NAME,
  FIELD_GAME_NAME_VALIDATION
} from '../../../shared/consts/forms'
import gameSubmitFormModel from '../../models/submitGameForm'

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
  AUDIO_DROP_ZONE: 'audioDropZone',
  GAME_NAME: 'gameName'
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

// ADD IN SUPPORT FOR TEXT -> GAMENAME
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
          reason: INVALID_IMAGE_TYPE
        }
      }))
    }

    if (!req.files[FIELDS.AUDIO_DROP_ZONE]) {
      return res.status(400).json(errorMessage({
        error: {
          name: FIELDS.AUDIO_DROP_ZONE,
          reason: INVALID_AUDIO_TYPE
        }
      }))
    }

    if (!req.body[FIELDS.GAME_NAME] || FIELD_GAME_NAME_VALIDATION(req.body[FIELDS.GAME_NAME])) {
      return res.status(400).json(errorMessage({
        error: {
          name: FIELDS.GAME_NAME,
          reason: INVALID_GAME_NAME
        }
      }))
    }

    const data = {
      gameName: req.body[FIELDS.GAME_NAME],
      imageUrl: req.files[FIELDS.IMAGE_DROP_ZONE][0].path,
      audioUrl: req.files[FIELDS.AUDIO_DROP_ZONE][0].path
    }

    gameSubmitFormModel.create(data, (error, data) => {
      if (error) {
        return res.status(400).json(errorMessage({ message: 'failed to save details' }))
      }

      return res.status(200).json(successMessage({ data }))
    })
  })
}
