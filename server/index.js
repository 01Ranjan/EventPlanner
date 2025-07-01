import express from 'express'

const app=express();


app.get("/",(req,res)=>{
    res.json({message:"mai hu server"})
  
})

app.post("/regester",(req,res)=>{
    res.send("user regester sucessfull")
    
})


app.listen(5000,()=>{
    console.log("server started at port 5000 pe");
    
})