import catchAsync from "../../middlewares/catchAsync";
import { skillsServices } from "./skills.service";

const upsertSkillsController = catchAsync(async (req, res) => {
  const data = await skillsServices.upsertSkillsService(req.body);
  return res.status(200).json({
    success: true,
    data,
  });
});

const getSkillsController = catchAsync(async (req, res) => {
  const data = await skillsServices.getSkillsService();
  return res.status(200).json({
    success: true,
    data,
  });
});

export const skillsControllers = {
  upsertSkillsController,
  getSkillsController,
};
