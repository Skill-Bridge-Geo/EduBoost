import express from 'express'
import { getProfile } from '../Controllers/profile-controller.js'
import { updateProfile } from '../Controllers/profile-controller.js'
import { authMiddleware } from '../Middleware/jwt-middleware.js'

const profileRouter = express.Router()

profileRouter.post('/getProfile', authMiddleware, getProfile)
profileRouter.post('/updateProfile', authMiddleware, updateProfile)

export default profileRouter