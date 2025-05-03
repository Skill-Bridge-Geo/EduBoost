import UserSchema from '../Models/user-schema.js'
import bcrypt from 'bcrypt'

const saltRounds = 10

export const registerUser = async (req, res) => {
  // Request body 
  const { email, password } = req.body
  // If in data isn't email or password it will show this message 
  if (!email || !password) {
    return res.status(400).json({ message: 'All info are required' })
  }
  // If password length isn't required length, it will show this message  
  if (password.length < 8 || password.length > 16) {
    return res.status(400).json({ message: 'Password must be between 8 and 16 characters!' })
  }
  // Searching existing user in database and adding with hashed password
  try {
    const existingUser = await UserSchema.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered!' })
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const newUser = new UserSchema({ email, password: hashedPassword })

    await newUser.save()

    const userWithoutPassword = {
      ...newUser.toObject(),
      password: undefined,
    }

    return res.status(201).json({ message: 'Register successful', user: userWithoutPassword })
  } catch (error) {
    return res.status(500).json({ message: 'Error with adding user', error })
  }
}
