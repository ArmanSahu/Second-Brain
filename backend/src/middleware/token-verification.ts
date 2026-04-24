import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../service/token.js";
import type { Types } from "mongoose";


export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.token;
    if(!token){
        return res.status(401).json({
            message: "token not found , please login again"
        });
    }
    try{
        const decoded = verifyToken(token);
        req.user = {
            userId: decoded.userId
        }
        return next();

    }catch(error){
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}