import express from "express";
import { experienceControllers } from "./experience.controller";

const router = express.Router();

router.get("/", experienceControllers.getExperiencesController);
router.get("/:id", experienceControllers.getSingleExperienceController);

router.post("/", experienceControllers.createExperienceController);
router.patch("/:id", experienceControllers.updateExperienceController);
router.delete("/:id", experienceControllers.deleteExperienceController);

export const experienceRouter = router;
