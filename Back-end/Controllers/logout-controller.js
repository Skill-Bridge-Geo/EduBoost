export const logoutUser = (req, res) => {
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict'
    })
    console.log(req.user)
    return res.status(200).json({ message: 'Logged out successfully' })
}
