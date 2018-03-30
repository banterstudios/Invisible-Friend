import mongoose from 'mongoose'

const host = process.env.HOST
const port = process.env.DBPORT
const name = process.env.NAME

const url = `mongodb://${host}:${port}/${name}`

mongoose.Promise = global.Promise

const createDBConnection = async () => {
  try {
    await mongoose.connect(url)

    console.log(`Connected to ${name} db`)

    return Promise.resolve()
  } catch (error) {
    console.log(`Failed to connect to db on: ${url}`)

    return Promise.reject(error)
  }
}

const closeDBConnection = () => {
  let models = mongoose.connection.models
  Object.keys(models).forEach(key => {
    delete models[key]
  })
  mongoose.connection.close()
}

module.exports = {
  createDBConnection,
  closeDBConnection
}
