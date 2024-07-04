import express from "express";
import { projectsControllers } from "./projects.controller";

const router = express.Router();

router.get("/", projectsControllers.getProjectsController);
router.get("/:id", projectsControllers.getSingleProjectController);

router.post("/", projectsControllers.createProjectController);
router.patch("/:id", projectsControllers.updateProjectController);
router.delete("/:id", projectsControllers.deleteProjectController);

export const projectRouter = router;
