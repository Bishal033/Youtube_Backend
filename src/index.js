// require ("dotenv").config({path : "./.env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
     path: "./.env"
})

connectDB()







/*Connecting to the database and starting the server*/
/*
import express from "express";

const app = express();

;(async () =>{
    try { 
        await mongoose.connect(`${process.env.MOGODB_URI}/${DB_Name}`);
        app.on("error", (error) => {
            console.log("Error in DB connection", error);
            throw error;
        });
app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
});

        console.log("DB connected successfully");
    } catch (error) {
        console.log("Error in DB connection", error);
        throw error;
    }
})()
    */