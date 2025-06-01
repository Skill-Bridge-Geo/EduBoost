import UserSchema from "../Models/user-schema.js";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../Utils/jwt-utils.js";

const saltRounds = 10;

export const registerUser = async (req, res) => {
  // Request body
  const { email, password } = req.body;
  // If in data isn't email or password it will show this message
  if (!email || !password) {
    return res.status(400).json({ message: "All info are required" });
  }
  // Searching existing user in database and adding with hashed password
  try {
    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new UserSchema({ email, password: hashedPassword });

    await newUser.save();
    // Remove password from the user object before sending the response

    console.log({newUser})

    const accessToken = generateAccessToken(newUser._id);
    const refreshToken = generateRefreshToken(newUser._id);



    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
    });

    const userWithoutPassword = {
      ...newUser.toObject(),
      password: undefined,
      accessToken
    };

    return res
      .status(201)
      .json({ message: "Register successful", user: userWithoutPassword });
  } catch (error) {
    return res.status(500).json({ message: "Error with adding user", error });
  }
};
