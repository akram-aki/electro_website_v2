import Router from "express";
import { addUser, getUser } from "./controller.js";
const router = Router();

router.post("/register", addUser);
router.post("/login", getUser);
export default router;
