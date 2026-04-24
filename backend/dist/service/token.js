import jwt, {} from 'jsonwebtoken';
export const generateToken = (user) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({
        userId: user._id
    }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
};
export const verifyToken = (token) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    return jwt.verify(token, process.env.JWT_SECRET);
};
//# sourceMappingURL=token.js.map