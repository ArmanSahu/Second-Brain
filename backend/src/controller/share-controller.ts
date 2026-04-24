import type { Request, Response } from "express";
import crypto from 'node:crypto';
import { LinkModel } from "../models/Link-model.js";
import { Content } from "../models/content-model.js";


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
                const link = `http://localhost:3000/api/v1/brain/share/${existingLink.hash}`
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
            
            const link = `http://localhost:3000/api/v1/brain/share/${newLink.hash}`

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
                message: "deleted sharable link"
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
    if(!contentLink){
        return res.status(400).json({
            message: "Invalid request"
        });
    }
    try{
        const linkData = await LinkModel.findOne({
            hash: contentLink
        });
        if(!linkData){
            return res.status(404).json({
                message: "invalid link"
            })
        }
        const content = await Content.find({
            userId: linkData.userId
        }).populate("userId","username").lean();

        return res.status(200).json({
            message: "successful",
            content
        });
    }catch(error){
        return res.status(500).json({
            message: "Internal server error",
            error
        })
    }
}