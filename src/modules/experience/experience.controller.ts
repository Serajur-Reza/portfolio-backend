import catchAsync from "../../middlewares/catchAsync";
import { experienceServices } from "./experience.service";

const getExperiencesController = catchAsync(async (req, res) => {
  const data = await experienceServices.getExperiencesService();
  return res.status(200).json({
    success: true,
    data,
  });
});

const getSingleExperienceController = catchAsync(async (req, res) => {
  const data = await experienceServices.getSingleExperienceService(
    req.params.id
  );
  return res.status(200).json({
    success: true,
    data,
  });
});

const createExperienceController = catchAsync(async (req, res) => {
  const data = await experienceServices.createExperienceService(req.body);
  return res.status(200).json({
    success: true,
    data,
  });
});

const updateExperienceController = catchAsync(async (req, res) => {
  const data = await experienceServices.updateExperienceService(
    req.params.id,
    req.body
  );
  return res.status(200).json({
    success: true,
    data,
  });
});

const deleteExperienceController = catchAsync(async (req, res) => {
  const data = await experienceServices.deleteExperienceService(req.params.id);
  return res.status(200).json({
    success: true,
    data,
  });
});

export const experienceControllers = {
  getExperiencesController,
  getSingleExperienceController,
  createExperienceController,
  updateExperienceController,
  deleteExperienceController,
};
