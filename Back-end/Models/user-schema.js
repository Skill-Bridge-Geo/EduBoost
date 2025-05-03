import mongoose from "mongoose"

// User schema for mongodb 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        unique: true,
        validate: {
            validator: function (v) {
                // regex to check if contains "@"
                 return /^.+@.+\..+$/.test(v)
            },
            message: props => `${props.value} is not valid email! Email must contain "@"`
        }
    },
    password: {
        type: String,
        required: true
    },

})

const UserSchema= mongoose.model('UserSchema', userSchema)
 
export default UserSchema