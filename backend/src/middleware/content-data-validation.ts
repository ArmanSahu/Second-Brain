import { z } from 'zod';
import { cType } from '../models/content-model.js';
import type { NextFunction, Request, Response } from 'express';


const contentSchema = z.object({
    title: z.string(),
    link: z.string(),
    type: z.enum(cType),
    tag: z.array(z.string()).optional()
})

export const validateContent = (req: Request, res: Response, next: NextFunction) => {
    const result = contentSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            message: "Bad request",
            error: result.error.flatten()
        })
    }
    req.body = result.data;
    return next();
}