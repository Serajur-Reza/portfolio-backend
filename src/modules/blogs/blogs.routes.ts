import express from "express";
import { blogControllers } from "./blogs.controller";

const router = express.Router();

router.get("/", blogControllers.getBlogsController);
router.get("/:id", blogControllers.getSingleBlogController);

router.post("/", blogControllers.createBlogController);
router.patch("/:id", blogControllers.updateBlogController);
router.delete("/:id", blogControllers.deleteBlogController);

export const blogRouter = router;
