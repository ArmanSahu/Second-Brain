import mongoose, { Document, model, Schema } from 'mongoose';
export const cType = ["audio", "youtube", "twitter", "document", "instagram", "facebook", "linkedin"];
const contentSchema = new Schema({
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
}, {
    timestamps: true
});
export const Content = model('Content', contentSchema);
//# sourceMappingURL=content-model.js.map