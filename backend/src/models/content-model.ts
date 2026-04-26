import mongoose, { Document, model,Schema } from 'mongoose';

export const cType = ["audio","youtube","twitter","document","instagram","facebook","linkedin"];

export interface ContentType extends Document{
    title: string,
    link: string,
    type: "audio"|"youtube"|"twitter"|"document"|"instagram"|"facebook"|"linkedin",
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