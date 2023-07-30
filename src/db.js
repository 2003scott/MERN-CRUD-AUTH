import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost/merndb")

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://0.0.0.0:27017/merndb')
        console.log(">>> Conectado a la Base de Datos")
    }catch(error){
        console.log(error)
    }
}