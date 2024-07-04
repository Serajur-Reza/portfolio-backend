import { experience } from "./experience.modal";

const getExperiencesService = async () => {
  const result = await experience.find();
  return result;
};

const getSingleExperienceService = async (id: any) => {
  const result = await experience.findById(id);
  return result;
};

const createExperienceService = async (body: any) => {
  const result = await experience.create(body);
  return result;
};

const updateExperienceService = async (id: any, body: any) => {
  const result = await experience.findByIdAndUpdate({ id }, body);
  return result;
};

const deleteExperienceService = async (id: any) => {
  const result = await experience.deleteOne({ id });
  return result;
};

export const experienceServices = {
  getExperiencesService,
  getSingleExperienceService,
  createExperienceService,
  updateExperienceService,
  deleteExperienceService,
};
