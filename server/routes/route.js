import { Router } from "express";
import { getProductById, getProducts } from "../controller/product-controller.js";
import { userSignup,userLogin } from "../controller/user-controller.js";

const router= Router();

router.post('/signup' ,userSignup);
router.post('/login',userLogin)
router.get('/products',getProducts)
router.get('/product/:id',getProductById);

export default router;