import catchAsync from "../../middlewares/catchAsync";
import { projectsServices } from "./projects.service";

const getProjectsController = catchAsync(async (req, res) => {
  const data = await projectsServices.getProjectsService();
  return res.status(200).json({
    success: true,
    data,
  });
});

const getSingleProjectController = catchAsync(async (req, res) => {
  const data = await projectsServices.getSingleProjectService(req.params.id);
  return res.status(200).json({
    success: true,
    data,
  });
});

const createProjectController = catchAsync(async (req, res) => {
  const data = await projectsServices.createProjectService(req.body);
  return res.status(200).json({
    success: true,
    data,
  });
});

const updateProjectController = catchAsync(async (req, res) => {
  const data = await projectsServices.updateProjectService(
    req.params.id,
    req.body
  );
  return res.status(200).json({
    success: true,
    data,
  });
});

const deleteProjectController = catchAsync(async (req, res) => {
  const data = await projectsServices.deleteProjectService(req.params.id);
  return res.status(200).json({
    success: true,
    data,
  });
});

export const projectsControllers = {
  getProjectsController,
  getSingleProjectController,
  createProjectController,
  updateProjectController,
  deleteProjectController,
};
