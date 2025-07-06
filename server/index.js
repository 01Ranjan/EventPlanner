import dotenv from 'dotenv';
dotenv.config();

import cros from 'cors'

import express from 'express'

 
import morgan from 'morgan'
 
import AuthRouter from "./src/routes/authrouter.js"
import connectDb from "./src/config/db.js"
const app=express();


app.use(cros({origin:"http://localhost:5173",credentials:true}))


app.use(express.json());
 
app.use(morgan("dev"))



app.use("/auth",AuthRouter)


app.get("/",(req,res)=>{
    res.json({message:"index tak pauch gaya hu"})
  
})

 app.use((err,req,res,next)=>{
     const errMessage=err.message || "internal server error"
     const errCode = err.statusCode || 500
     res.status(errCode).json({message:errMessage})
 })
 

 
let port =process.env.PORT || 5000

app.listen(port,()=>{
    console.log("server started at port", port);
  connectDb();  
})

 