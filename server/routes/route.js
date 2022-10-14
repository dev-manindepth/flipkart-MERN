import { Router } from "express";
import { getProducts } from "../controller/product-controller.js";
import { userSignup,userLogin } from "../controller/user-controller.js";

const router= Router();

router.post('/signup' ,userSignup);
router.post('/login',userLogin)
router.get('/products',getProducts)

export default router;