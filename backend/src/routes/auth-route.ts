import { Router } from "express";
import { signUp, signIn, refreshToken } from "../controllers/auth-controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.post("/signup", auth, signUp);
router.post("/signin", signIn);
router.post("/refresh", refreshToken);

export default router;
