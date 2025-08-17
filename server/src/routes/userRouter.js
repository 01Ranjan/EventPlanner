import express from "express"
import multer from "multer";
import { GetProfil } from "../controllers/usercontroller.js";
import { Proctect } from "../middlewares/authmiddleware.js";
import { UpdateUser } from "../controllers/authcontroller.js";

 
const router=express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/profile",Proctect,GetProfil)
router.put("/update",Proctect,upload.single("picture"),UpdateUser)
export default router

