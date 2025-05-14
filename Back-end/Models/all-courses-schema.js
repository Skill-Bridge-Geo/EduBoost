import mongoose from "mongoose"

const allCourseSchema = new mongoose.Schema({
  title: { type: String, required: true }, // e.g., Vue JS Scratch Course
  description: { type: String, required: true }, // e.g., what the course teaches
  studioName: { type: String, required: true }, // always "Kitani Studio"
  instructor: { type: String, required: true }, // person image shows
  priceOriginal: { type: Number, required: true }, // e.g., 32.90
  priceDiscounted: { type: Number, required: true }, // e.g., 24.92
  rating: { type: Number, required: true }, // e.g., 4.5
  reviewCount: { type: Number, required: true }, // e.g., 1.2k
  imageUrl: { type: String, required: true }, // course banner image
  tag: { type: String, required: true }, // e.g., "Best Seller"
  discountPercent: { type: Number, required: true } // e.g., 20
}, { timestamps: true })

const allCourses = mongoose.model('all-coursers', allCourseSchema)
export default allCourses
