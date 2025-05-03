import express from 'express'
import { logoutUser } from '../Controllers/logout-controller.js'
import { authMiddleware } from '../Middleware/jwt-middleware.js'

const logoutRouter = express.Router()

logoutRouter.post('/', authMiddleware, logoutUser)

export default logoutRouter
