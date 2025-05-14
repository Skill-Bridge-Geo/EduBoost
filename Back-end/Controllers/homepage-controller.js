import allCourseSchema from "../Models/all-courses-schema.js" // kitani studio courses schema

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
