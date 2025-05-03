import UserSchema from '../Models/user-schema.js'
import bcrypt from 'bcrypt'
import { generateAccessToken, generateRefreshToken } from '../Utils/jwt-utils.js'
import dotenv from 'dotenv'
dotenv.config()

export const loginUser = async (req, res) => {
    const { email, password, rememberMe } = req.body

    // Check email and password
    if (!email || !password) {
        return res.status(400).json({ message: `Both email and password are required` })
    }

    try {
        // Find user by email
        const user = await UserSchema.findOne({ email })

        // If user is not found
        if (!user) {
            return res.status(401).json({ message: `Not found email or password` })
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({ message: `Invalid email or password` })
        }

        // Test user id 
        // console.log('User ID after login:', user._id)

        // Generate JWT token
        const accessToken = generateAccessToken(user._id)
        const refreshToken = generateRefreshToken(user._id, rememberMe)

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000 // 7 days or 1 day
        })

        // Send token to client and log success message
        return res.status(200).json({ message: `Login successful`, accessToken })
    } catch (err) {
        // Error handling
        return res.status(500).json({ message: `Error during login`, err })
    }
}
