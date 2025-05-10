import express from 'express'
import { getPersonalisation } from '../Controllers/personalisation-1-controller.js'

const personalisationRouter = express.Router()

personalisationRouter.post('/', getPersonalisation)

export default personalisationRouter