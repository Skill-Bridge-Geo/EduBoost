import express from 'express'
import { registerUser } from '../Controllers/register-controller.js'

const registerRouter = express.Router()

registerRouter.post('/', registerUser)

export default registerRouter
