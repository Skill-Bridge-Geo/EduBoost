import UserSchema from '../Models/user-schema.js'


export const getProfile = async (req, res) => {
    try {
        const userId = req.user.userId
        const user = await UserSchema.findById(userId).select('-password')

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error })
    }
}


export const updateProfile = async (req, res) => {
    try {
        const userId = req.user.userId
        const { firstName, lastName, headline, language, link } = req.body

        const updatedUser = await UserSchema.findByIdAndUpdate(
            userId,
            { firstName, lastName, headline, language, link },
            { new: true, runValidators: true }
        ).select('-password')

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json({ message: 'Profile updated successfully', user: updatedUser })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error })
    }
}
