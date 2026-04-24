import { verifyToken } from "../service/token.js";
export const validateToken = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({
            message: "token not found , please login again"
        });
    }
    try {
        const decoded = verifyToken(token);
        req.user = {
            userId: decoded.userId
        };
        return next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};
//# sourceMappingURL=token-verification.js.map