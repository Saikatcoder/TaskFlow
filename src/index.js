import app from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./db/db_Connect.js";



dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 3000;

connectDB().then(()=>{
    app.listen(PORT,()=>console.log(`servere is runing on port ${PORT}`))
}).catch((err)=>{
    console.error("mongodb connection error", err);
    process.exit(1)
})
