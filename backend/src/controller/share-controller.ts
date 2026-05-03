import type { Request, Response } from "express";
import crypto from 'node:crypto';
import { LinkModel } from "../models/Link-model.js";
import { Content } from "../models/content-model.js";
import type mongoose from "mongoose";


export const share = async(req: Request, res: Response) => {
    const { share } = req.body;
    if(!req.user?.userId){
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    
    const userId = req.user.userId

   try{
        if(share){
            const existingLink = await LinkModel.findOne({
                userId
            });
            if(existingLink){
                const link = `https://second-brain-cx11.vercel.app/brain/share/${existingLink.hash}`
                return res.status(200).json({
                    message: "existing sharable link",
                    link
                });
            }
            const hash = crypto.randomBytes(16).toString('hex');
            const newLink = await LinkModel.create({
                hash,
                userId
            });
            
            const link = `https://second-brain-cx11.vercel.app/brain/share/${newLink.hash}`

            return res.status(201).json({
                message: "new link created",
                link
            });
        }else{
            const existingLink =  await LinkModel.findOneAndDelete({
                userId
            });
            if(!existingLink){
                return res.status(404).json({
                    message: "sharable link not found"
                });
            }
            return res.status(200).json({
                message: "deleted sharable link",
                link: null
            });
        }
   }catch(error){
    return res.status(500).json({
        message: "Internal server error",
        error
    })
   }
}




export const getContent = async(req: Request, res: Response) => {
    const contentLink = req.params.shareId;
    type PopulatedUser = {
        _id: mongoose.Types.ObjectId;
        username: string;
    };
    if(!contentLink){
        return res.status(400).json({
            message: "Invalid request"
        });
    }
    try{
        const linkData = await LinkModel.findOne({
            hash: contentLink
        }).populate<{ userId: PopulatedUser }>("userId","username");

        if(!linkData){
            return res.status(404).json({
                message: "invalid link"
            })
        }
        const contents = await Content.find({
            userId: linkData.userId._id
        }).sort({
            createdAt: -1
        }).lean();

        return res.status(200).json({
            message: "successful",
            contents,
            username: linkData.userId.username
        });
    }catch(error){
        return res.status(500).json({
            message: "Internal server error",
            error
        })
    }
}