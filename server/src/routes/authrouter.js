import express from "express"
 

import { RegesterUser,LoginUser,LogoutUser,UpdateUser } from "../controllers/authcontroller.js";
 

const router =express.Router();//express ek class hai aur router ek object hai


router.post("/regester",RegesterUser)
router.post("/login",LoginUser)
router.get("/logout",LogoutUser)
 

export default router;