import type { Request, Response } from "express";
import { User, type UserType } from "../models/user-model.js";
import { generateToken } from "../service/token.js";



export const signup = async(req: Request, res: Response) => {
    const {username,password} = req.body;
   
    try{
        const existingUser: UserType|null =  await User.findOne({
            username
        });
        if(existingUser){
            return res.status(409).json({
                message: "username already exists"
            })
        }

        const user = await User.create({
            username,
            password
        });

        console.log(user);

        return res.status(200).json({
            message: "user created successfully",
        });
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
            
        });
    }
}    


export const login = async(req: Request, res: Response) => {
    const {username,password} = req.body;
    try{
        const existingUser: UserType = await User.findOne({
            username
        }).select("+password");

        if(!existingUser){
            return res.status(404).json({
                message: "user with this username not found"
            })
        }
        
        const isMatch = await existingUser.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({
                message: "Incorrect password"
            });
        }

        const token = generateToken(existingUser);
        res.cookie("token",token,{
            httpOnly: true,
            maxAge: 7*24*60*60*1000,
            sameSite: true,
            secure: false
        });
        return res.status(200).json({
            message: "user signed successfully"
        })
    }catch(error){
        return res.status(500).json({
            message: "user logot successfull",
            error
        });
    }        
}

export const logout = (req: Request,res: Response) => {
    res.clearCookie("token",{
        httpOnly: true,
        secure: false,
        sameSite: true
    });

    return res.status(200).json({
        message: "user logout successful"
    });
}