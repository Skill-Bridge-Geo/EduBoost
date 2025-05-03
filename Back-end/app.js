import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

// Routers
import registerRoute from './Routes/register-router.js'
import loginRouter from './Routes/login-router.js'
import logoutRouter from './Routes/logout-router.js'

// Environment variables
dotenv.config()


const app = express()
const PORT = process.env.PORT || 3000

const corsOptions = {
    origin: "*", 
    credentials: true, 
} 

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ebuqkja.mongodb.net/`

// Routes to access
app.use('/register', registerRoute)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)

// Database connection
mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
        console.log("Error", error.message)
        process.exit(1)
    })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})