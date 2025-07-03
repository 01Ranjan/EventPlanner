 import mongoose from "mongoose";


 const connectDb= async()=>{
try {
    const conn= await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDb connected at", conn.connection.host);
    
    
} catch (error) {
     console.log("error in connecting db");
     process.exit(1);
     
}
 }

export default connectDb;