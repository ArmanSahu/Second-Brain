import mongoose from 'mongoose';
import { MONGO_URI } from '../config/config.js';


export async function connectToDb(){
    try{
        await mongoose.connect(MONGO_URI);
        console.log("connect to db")
    }catch(error){
        console.log("connection to db failed "+ error);
        process.exit(1);
    }
}