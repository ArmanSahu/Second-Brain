import { model, Schema } from "mongoose";
import { comparePass, hashPassword } from "../service/password.js";
const userSchema = new Schema({
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
}, {
    timestamps: true
});
userSchema.pre("save", async function () {
    if (this.isModified('password')) {
        this.password = await hashPassword(this.password);
    }
    else {
        return;
    }
});
userSchema.methods.comparePassword = async function (password) {
    return await comparePass(password, this.password);
};
export const User = model("User", userSchema);
//# sourceMappingURL=user-model.js.map