import type { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const userSchema = z.object({
    username: z.string().min(3,"username must have 3 character").max(40,"username cannot exceed 40 character"),
    password: z.string().min(8,"password should be minimum of 8 character").max(20,"password should be maximum of 20 character").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"password must contain atleast one uppercase one lowercase one number and one special character")
});

export const validateUserData = (req: Request, res: Response, next: NextFunction) => {
    const result = userSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            message: "Bad request",
            error: result.error.flatten()
        });
    }
    
    return next();
}