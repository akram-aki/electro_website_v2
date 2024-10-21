import Router from "express";
import { addUser, loginUser, getUser, addEvent, test } from "./controller.js";
const router = Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/getUser", getUser);
router.post("/addevent", addEvent);
router.get("/", test);
export default router;
