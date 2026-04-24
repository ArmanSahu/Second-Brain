import mongoose, { Document, model,Schema } from 'mongoose';

export const cType = ["image","audio","article","video"];

export interface ContentType extends Document{
    title: string,
    link: string,
    type: "image" | "audio" | "article" | "video",
    tag: mongoose.Types.ObjectId[],
    userId: mongoose.Types.ObjectId
}

const contentSchema = new Schema<ContentType>({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: cType
    },
    tag: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
});



export const Content = model<ContentType>('Content',contentSchema);