import { Router } from "express";
import {
	createProduct,
	getProduct,
	getProducts,
} from "../controllers/product-controller";

const router = Router();

router
	.get("/", getProducts)
	.post("/", createProduct)
	.get("/:productId", getProduct);

export default router;
