import mongoose, { Document } from 'mongoose';
export declare const cType: string[];
export interface ContentType extends Document {
    title: string;
    link: string;
    type: "image" | "audio" | "article" | "video";
    tag: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}
export declare const Content: mongoose.Model<ContentType, {}, {}, {}, mongoose.Document<unknown, {}, ContentType, {}, mongoose.DefaultSchemaOptions> & ContentType & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ContentType>;
//# sourceMappingURL=content-model.d.ts.map