import Router from "express";
import {
  addUser,
  loginUser,
  fetchEvents,
  getUser,
  addEvent,
  test,
} from "./controller.js";
const router = Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/getUser", getUser);
router.post("/addevent", addEvent);
router.get("/fetchEvents", fetchEvents);
export default router;
