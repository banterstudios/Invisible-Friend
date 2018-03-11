import express from 'express'
import serverSideRender from '../controllers/serverSideRender'
import submitGameForm from '../controllers/submitGameForm'

const router = express.Router()

router.get([ '/', '/game/:id' ], serverSideRender)

router.post('/api/submitGameForm', submitGameForm)

module.exports = router
