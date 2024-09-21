import { Router } from "express";
import { signUp, signIn, refreshToken } from "../controllers/auth-controller";

const router = Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/refresh").post(refreshToken);

export default router;
