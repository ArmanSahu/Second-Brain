import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;
if (!port) {
    throw new Error("port not found");
}
if (!mongo_uri) {
    throw new Error("mongo url not found");
}
export const PORT = port;
export const MONGO_URI = mongo_uri;
//# sourceMappingURL=config.js.map