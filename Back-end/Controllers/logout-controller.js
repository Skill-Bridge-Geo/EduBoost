export const logoutUser = (req, res) => {
    res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    path: '/',
    })
    return res.status(200).json({ message: 'Logged out successfully' })
}
