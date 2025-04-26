import mongoose from "mongoose";

const connectDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongodb connect")
    } catch (error) {
        console.error("mongodb connection failed",error)
        process.exit(1)
    }
}


export default connectDB;