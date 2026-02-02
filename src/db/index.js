import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MOGODB_URI}/${DB_Name}`);
        console.log(`\n MongoDB connected successfully !! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error in DB connection", error);
        process.exit(1);
    }

}

export default connectDB;