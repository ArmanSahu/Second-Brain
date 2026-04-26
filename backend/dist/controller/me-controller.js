import { verifyToken } from "../service/token.js";
import { User } from "../models/user-model.js";
export const me = async (req, res) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    try {
        const decoded = verifyToken(token);
        const userdata = await User.findById(decoded.userId);
        if (!userdata) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        return res.status(200).json({
            message: "success",
            user: {
                username: userdata?.username
            }
        });
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};
//# sourceMappingURL=me-controller.js.map