import express from "express";
import { register, login, getProfile } from "../controllers/users.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/profile", authenticate, getProfile);

export default router;
