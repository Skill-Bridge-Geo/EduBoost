import allCourseSchema from "../Models/all-courses-schema.js" // kitani studio courses schema
import Instructor from '../Models/instructor-schema.js' // Popular instructors schema

// debugging controller
export const homePageController = async (req, res) => {
    console.log('Home Page Controller is working')
}

export const allStudiosCourses = async (req, res) => {
    try {
        /*Show all Studio courses */
        const courses = await allCourseSchema.find() // fetch all
        res.json(courses)
    } catch (error) {
        res.status(500).json({ error: 'Server error'})
    }
    
}

export const addCourse = async (req, res) => {
    try {
        /* Add course to database*/
        const newCourse = new allCourseSchema(req.body)
        await newCourse.save()
        res.status(201).json({message: 'Course added', data: newCourse})
    } catch (error) {
        res.status(400).json({error: 'Failed to add course', details: error.message})
    }
}

export const updateCourseById = async (req, res) => {
  try {
    console.log('working update')
    /* Update course by given id*/
    const updatedCourse = await allCourseSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' })
    }

    res.status(200).json(updatedCourse)
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error })
  }
}

export const deleteCourseById = async (req, res) => {
  try {
    /* Delete course by given id */
    const deletedCourse = await allCourseSchema.findByIdAndDelete(req.params.id)

    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' })
    }

    res.status(200).json({ message: 'Course deleted successfully', data: deletedCourse })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error })
  }
}

/* 
 Popular instructors code, crud for read, add, update, delete datas. 
*/

export const allInstructorData = async (req, res) => {
    try {
        /*Show all instructors */
        const courses = await Instructor.find() // fetch all
        res.json(courses)
    } catch (error) {
        res.status(500).json({ error: 'Server error'})
    }
    
}

export const addInstructors = async (req, res) => {
  try {
    const instructor = new Instructor(req.body)
    await instructor.save()
    res.status(201).json({ message: 'Instructor added', data: instructor })
  } catch (error) {
    res.status(400).json({ error: 'Failed to add instructor', details: error.message })
  }
}


export const updateInstructorById = async (req, res) => {
  try {
    /* Update instructor by id */
    const updatedInstructor = await Instructor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!updatedInstructor) {
      return res.status(404).json({ message: 'Instructor not found' })
    }

    res.status(200).json({ message: 'Instructor updated', data: updatedInstructor })
  } catch (error) {
    res.status(500).json({ error: 'Failed to update instructor', details: error.message })
  }
}

export const deleteInstructorById = async (req, res) => {
  try {
    /* Delete instructor by id  */
    const deletedInstructor = await Instructor.findByIdAndDelete(req.params.id)

    if (!deletedInstructor) {
      return res.status(404).json({ message: 'Instructor not found' })
    }

    res.status(200).json({ message: 'Instructor deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete instructor', details: error.message })
  }
}