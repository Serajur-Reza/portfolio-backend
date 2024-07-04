import express from "express";
import { skillsControllers } from "./skills.controller";

const router = express.Router();

router.get("/", skillsControllers.getSkillsController);

router.post("/", skillsControllers.upsertSkillsController);

export const skillsRouter = router;
