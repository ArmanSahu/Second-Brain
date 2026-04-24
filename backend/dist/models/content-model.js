import mongoose, { Document, model, Schema } from 'mongoose';
export const cType = ["image", "audio", "article", "video"];
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