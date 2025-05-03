import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

// Function for generate access token
export const generateAccessToken = (userId) => {
    const payload = { userId }
    const secretKey = process.env.SECRET
    const expiresIn = '1h'

    return jwt.sign(payload, secretKey, { expiresIn })
}

// function for generate refresh token 
export const generateRefreshToken = (userId, remeberMe) => {
    const payload = { userId }
    const secretKey = process.env.REFRESH_SECRET
    const expiresIn = remeberMe ? '7d' : '1d'

    return jwt.sign(payload, secretKey, { expiresIn })
}