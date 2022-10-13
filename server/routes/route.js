import { Router } from "express";
import { userSignup,userLogin } from "../controller/user-controller.js";

const router= Router();

router.post('/signup' ,userSignup);
router.post('/login',userLogin)

export default router;