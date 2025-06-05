import express from 'express'
// Courses crud
import { homePageController } from '../Controllers/homepage-controller.js'
import { allStudiosCourses } from '../Controllers/homepage-controller.js'
import { addCourse } from '../Controllers/homepage-controller.js'
import { updateCourseById } from '../Controllers/homepage-controller.js'
import { deleteCourseById } from '../Controllers/homepage-controller.js'
// Popular instructors
import { allInstructorData } from '../Controllers/homepage-controller.js'
import { addInstructors } from '../Controllers/homepage-controller.js'
import { updateInstructorById } from '../Controllers/homepage-controller.js'
import { deleteInstructorById } from '../Controllers/homepage-controller.js'

const homePageRouter = express.Router()

// courses methods
homePageRouter.post('/', homePageController) // Debugging controller
homePageRouter.post('/allStudio', allStudiosCourses )
homePageRouter.post('/addToStudio', addCourse )
homePageRouter.put('/updateCourse/:id', updateCourseById)
homePageRouter.delete('/deleteCourse/:id', deleteCourseById)

// Instructors methods 
homePageRouter.post('/allInstructors', allInstructorData)
homePageRouter.post('/addInstructor', addInstructors)
homePageRouter.put('/updateInstructor/:id', updateInstructorById)
homePageRouter.delete('/deleteInstructor/:id', deleteInstructorById)



export default homePageRouter