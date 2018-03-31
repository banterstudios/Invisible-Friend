import mongoose from 'mongoose'

const Schema = mongoose.Schema

const submitGameFormSchema = new Schema(
  {
    gameName: {type: String, required: true, max: 100},
    imageUrl: {type: String, required: true, max: 100},
    audioUrl: {type: String, required: true, max: 100}
  }
)

export default mongoose.model('submitGameForm', submitGameFormSchema)
