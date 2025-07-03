import express from "express"

import { Regester,Login,Logout } from "../controllers/authcontroller.js";
import { Samp, Samp1, Samp2 } from "../middlewares/authmiddleware.js";

const router =express.Router();


router.post("/regester",Samp,Regester)
router.post("/login",Samp1,Samp2,Login)
router.post("/logout",Logout);

export default router;