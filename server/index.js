import dotenv from 'dotenv';

dotenv.config();
import express from 'express'
import AuthRouter from "./src/routes/authrouter.js"
import connectDb from "./src/config/db.js"

const app=express();

app.use("/auth",AuthRouter)


app.get("/",(req,res)=>{
    res.json({message:"index tak pauch gaya hu"})
  
})

 
 
let port =process.env.PORT || 5000

app.listen(port,()=>{
    console.log("server started at port", port);
    
})

connectDb();