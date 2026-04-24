import { model, Schema, type InferSchemaType } from "mongoose";
import { comparePass, hashPassword } from "../service/password.js";
import type { Document } from "mongoose";


export interface UserType extends Document {
    username: string,
    password: string,
    comparePassword: (password: string) => Promise<boolean>
} 


const userSchema = new Schema<UserType>({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 40
    },
    password: {
        type: String,
        required: true,
        select: false
    }
},{
    timestamps: true
});

userSchema.pre("save",async function(){
    if(this.isModified('password')){
        this.password = await hashPassword(this.password);
    }else{
        return;
    }
})

userSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
    return await comparePass(password,this.password);
}



export const User = model<UserType>("User",userSchema);