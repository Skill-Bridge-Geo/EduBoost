import express from 'express'
import { loginUser } from '../Controllers/login-controller.js'

const loginRouter = express.Router()

// Login router
loginRouter.post('/', loginUser)

export default loginRouter
