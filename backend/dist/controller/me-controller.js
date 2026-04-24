import { verifyToken } from "../service/token.js";
export const me = (req, res) => {
    const token = req.cookies?.token;
    console.log(token);
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    try {
        const decoded = verifyToken(token);
        return res.status(200).json({
            message: "success",
            user: decoded
        });
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};
//# sourceMappingURL=me-controller.js.map