import dotenv from "dotenv";
dotenv.config();
import cros from "cors";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectDb from "./src/config/db.js";
import AuthRouter from "./src/routes/authrouter.js";
import UserRouter from "./src/routes/userRouter.js";
import cloudinary from "./src/config/cloudinary.js";

const app = express();

app.use(cros({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.use(cookieParser())

app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
//app.use("/admin",AdminRouter);

app.get("/", (req, res) => {
  res.json({ message: "index tak pauch gaya hu" });
});

app.use((err, req, res, next) => {
  const errMessage = err.message || "internal server error";
  const errCode = err.statusCode || 500;
  res.status(errCode).json({ message: errMessage });
});

let port = process.env.PORT || 5000;

app.listen(port, async() => {
  console.log("server started at port", port);

  try {
     await connectDb();
    await cloudinary.api.resources({ max_results: 1 });
    console.log("Cloudinary Connected");
  } catch (error) {
    console.log(error);
    process.exit(1)
    
  }
});
