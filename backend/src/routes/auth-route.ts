import { Router } from "express";
import { login, signup, currentUser } from "../controllers/auth-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/current-user").get(authentication, currentUser);
router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
