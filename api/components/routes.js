import Router from "express";
import { addUser, loginUser, getUser } from "./controller.js";
const router = Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/getUser", getUser);
export default router;
