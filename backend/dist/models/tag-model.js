import { model, Schema } from 'mongoose';
const tagSchema = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true
    }
});
const Tag = model('Tag', tagSchema);
//# sourceMappingURL=tag-model.js.map