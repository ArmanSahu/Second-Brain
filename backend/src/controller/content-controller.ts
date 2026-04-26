import type { Request, Response } from "express";
import { Content } from "../models/content-model.js";
import mongoose from "mongoose";


export const createContent = async(req: Request, res: Response) => {
    if (!req.user?.userId) {
        return res.status(401).json({ 
            message: "Unauthorized" 
        });
    }
    const userId = req.user.userId;
    const {title,link,type,tag} = req.body
    
    try{
        const url = new URL(link);
        if(!url){
            return res.status(400).json({
                message: "Invalid url"
            });
        }
        const newContent = await Content.create({
            title,
            tag,
            type,
            link,
            userId
        });

        return res.status(201).json({
            message: "content created",
            newContent
        });
    }catch(error){
        return res.status(500).json({
            message: "Internal server error",
            error
        });
    }
}

export const getContent = async(req: Request, res: Response) => {
   if (!req.user?.userId) {
        return res.status(401).json({ 
            message: "Unauthorized" 
        });
    }
    const userId = req.user.userId;

    try{
        const contents = await Content.find({
            userId
        }).sort({
            createdAt: -1
        });
        return res.status(200).json({
            message: "successful",
            contents
        });
        
    }catch(error){
        return res.status(500).json({
            message: "Internal server error",
            error
        });
    }
}

type Params = {
    contentId: string
}

export const updateContent = async(req: Request<Params>,res: Response) => {
    if(!req.user?.userId){
        return res.status(401).json({
            message: "unauthorized"
        });
    }
    const userId = req.user.userId;
    const contentId = req.params.contentId;

    if(!contentId){
        return res.status(400).json({
            message: "Bad request"
        })
    }

    if(!mongoose.Types.ObjectId.isValid(contentId)){
        return res.status(400).json({
            message: "Invalid content"
        });
    }

    const allowedFields = ["link","title","type","tag"];
    const updates: any = {};

    for(let field of allowedFields){
        if(req.body[field] !== undefined){
            updates[field] = req.body[field];
        }
    }

    if(Object.keys(updates).length === 0){
        return res.status(400).json({
            message: "No valid fields to update"
        });
    }

    try{
        const updatedContent = await Content.findOneAndUpdate({
            _id: contentId,
            userId
        },{
            $set: updates
        },{
            new: true
        });

        if (!updatedContent) {
            return res.status(404).json({ message: "Content not found" });
        }
        
        return res.status(200).json({
            message: "content updated",
            updatedContent
        })
    }catch(error){
        return res.status(500).json({
            message: "Internal server error",
            error
        });
    }
}

export const deleteContent = async(req: Request<Params>,res: Response) => {
    if(!req.user?.userId){
        return res.status(401).json({
            message: "unauthorized"
        });
    }
    const userId = req.user.userId;
    const { contentId } = req.params;
    if(!contentId){
        return res.status(400).json({
            message: "Bad request"
        })
    }
    if(!mongoose.Types.ObjectId.isValid(contentId)){
        return res.status(400).json({
            message: "Invalid content"
        });
    }
    try{
        const deletedContent = await Content.findOneAndDelete({
            _id: contentId,
            userId
        });
        if(!deletedContent){
            return res.status(404).json({ message: "Content not found" });
        }
        return res.status(200).json({
            message: "content deleted",
            deletedContent
        });
    }catch(error){
        return res.status(500).json({
            message: "Internal server error",
            error
        });
    }
}