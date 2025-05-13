import mongoose from "mongoose"

// vue schema
const vueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  studioName: { type: String, required: true },
  instructor: { type: String, required: true },
  priceOriginal: { type: Number, required: true },
  priceDiscounted: { type: Number, required: true },
  rating: { type: Number, required: true },
  reviewCount: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  tag: { type: String, required: true },
  discountPercent: { type: Number, required: true }
})

const VueSchema = mongoose.model('kitani-course', vueSchema)
export default VueSchema