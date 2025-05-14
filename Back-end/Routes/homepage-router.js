import express from 'express'
import { homePageController } from '../Controllers/homepage-controller.js'
import { allStudiosCourses } from '../Controllers/homepage-controller.js'
import { addCourse } from '../Controllers/homepage-controller.js'

const homePageRouter = express.Router()

homePageRouter.post('/', homePageController)
homePageRouter.post('/allStudio', allStudiosCourses )
homePageRouter.post('/addToStudio', addCourse )


export default homePageRouter