import express from "express";
import { authRouter } from "../modules/auth/auth.routes";
import { skillsRouter } from "../modules/skills/skills.routes";
import { projectRouter } from "../modules/projects/projects.routes";
import { blogRouter } from "../modules/blogs/blogs.routes";
import { experienceRouter } from "../modules/experience/experience.routes";

const router = express.Router();

const routes = [
  {
    path: "/",
    route: authRouter,
  },
  {
    path: "/skills",
    route: skillsRouter,
  },
  {
    path: "/projects",
    route: projectRouter,
  },

  {
    path: "/blogs",
    route: blogRouter,
  },
  {
    path: "/experience",
    route: experienceRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
