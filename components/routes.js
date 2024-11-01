import Router from "express";
import {
  addUser,
  deleteProject,
  deleteEvent,
  searchProjects,
  loginUser,
  fetchEvents,
  getUser,
  addEvent,
  addProject,
  fetchProjects,
  searchEvents,
} from "./controller.js";
const router = Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.post("/addevent", addEvent);
router.post("/addproject", addProject);

router.get("/getUser", getUser);
router.get("/fetchEvents", fetchEvents);
router.get("/fetchProject", fetchProjects);
router.get("/searchEvents", searchEvents);
router.get("/searchProjects", searchProjects);

router.delete("/deleteEvent", deleteEvent);
router.delete("/deleteProject", deleteProject);

export default router;
