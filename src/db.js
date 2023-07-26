import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost/merndb")

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://0.0.0.0:27017/merndb')
        console.log(">>> DB is connected")
    }catch(error){
        console.log(error)
    }
}