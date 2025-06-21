import mongoose from 'mongoose'

const instructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  imageUrl: { type: String, required: true }
})

const Instructor = mongoose.model('Instructors', instructorSchema)
export default Instructor
