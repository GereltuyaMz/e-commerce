import { Router } from "express";
import { createCart, getCarts } from "../controllers/cart-controller";

const router = Router();

router.post("/", createCart);
router.get("/", getCarts);

export default router;
