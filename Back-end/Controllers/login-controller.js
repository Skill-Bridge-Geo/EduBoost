import UserSchema from '../Models/user-schema.js'
import bcrypt from 'bcrypt'
import { generateAccessToken, generateRefreshToken } from '../Utils/jwt-utils.js'
import dotenv from 'dotenv'
dotenv.config()

export const loginUser = async (req, res) => {
    const { email, password, rememberMe } = req.body

    
    if (!email || !password) {
        return res.status(400).json({ message: `Both email and password are required` })
    }

    try {        
        const user = await UserSchema.findOne({ email })

        if (!user) {
            return res.status(401).json({ message: `Not found email or password` })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({ message: `Invalid email or password` })
        }

        const accessToken = generateAccessToken(user._id)
        const refreshToken = generateRefreshToken(user._id, rememberMe)

        res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        path: '/',
        maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000,
        })

        return res.status(200).json({ message: `Login successful`, accessToken })
    } catch (err) {
        return res.status(500).json({ message: `Error during login`, err })
    }
}
