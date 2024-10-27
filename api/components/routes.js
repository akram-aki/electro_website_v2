import Router from "express";
import {
  addUser,
  loginUser,
  fetchEvents,
  getUser,
  addEvent,
  addProject,
  fetchProjects,
} from "./controller.js";
const router = Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/getUser", getUser);
router.post("/addevent", addEvent);
router.post("/addproject", addProject);
router.get("/fetchEvents", fetchEvents);
router.get("/fetchProject", fetchProjects);
export default router;
