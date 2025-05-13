export const logoutUser = (req, res) => {
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict'
    })
    return res.status(200).json({ message: 'Logged out successfully' })
}
