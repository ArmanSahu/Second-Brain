import type { Document } from "mongoose";
export interface UserType extends Document {
    username: string;
    password: string;
    comparePassword: (password: string) => Promise<boolean>;
}
export declare const User: import("mongoose").Model<UserType, {}, {}, {}, Document<unknown, {}, UserType, {}, import("mongoose").DefaultSchemaOptions> & UserType & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, UserType>;
//# sourceMappingURL=user-model.d.ts.map