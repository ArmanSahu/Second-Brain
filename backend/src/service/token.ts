import jwt, { type JwtPayload } from 'jsonwebtoken';
import type { UserType } from '../models/user-model.js';


export const generateToken = (user: UserType) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({
        userId: user._id
    },process.env.JWT_SECRET,{
        expiresIn: '7d'
    }) 
}

export const verifyToken = (token: string) =>  {
    if(!process.env.JWT_SECRET){
        throw new Error("JWT_SECRET is not defined");
    }
    return jwt.verify(token,process.env.JWT_SECRET) as JwtPayload;
}

