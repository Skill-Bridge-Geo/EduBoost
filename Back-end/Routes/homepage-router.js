import express from 'express'
import { homePageController } from '../Controllers/homepage-controller.js'

const homePageRouter = express.Router()

homePageRouter.post('/', homePageController)

export default homePageRouter