import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^.+@.+\..+$/.test(v)
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true
    },

    //Profile
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    headline: { type: String, default: '' },
    language: { type: String, default: 'English' },
    link: { type: String, default: '' },
    avatarUrl: { type: String, default: '' },

    //Personalisation
    theme: { type: String, default: 'light' },
    fontSize: { type: String, default: 'medium' },
    preferredLayout: { type: String, default: 'default' },

    //Account
    isTwoFactorEnabled: { type: Boolean, default: false },
    accountStatus: { type: String, enum: ['active', 'suspended'], default: 'active' },
    createdAt: { type: Date, default: Date.now },

    //Payment Methods
    paymentMethods: [{
        cardType: String,
        last4Digits: String,
        expiration: String
    }],

    //Notifications
    notifications: {
        email: { type: Boolean, default: true },
        sms: { type: Boolean, default: false },
        push: { type: Boolean, default: true }
    },

    //Privacy
    privacy: {
        showProfilePublicly: { type: Boolean, default: true },
        shareActivityStatus: { type: Boolean, default: true },
        dataSharing: { type: Boolean, default: false }
    }
})

const UserSchema = mongoose.model('UserSchema', userSchema)

export default UserSchema
