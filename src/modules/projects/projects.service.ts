import { projects } from "./project.modal";

const getProjectsService = async () => {
  const result = await projects.find();
  return result;
};

const getSingleProjectService = async (id: any) => {
  const result = await projects.findById(id);
  return result;
};

const createProjectService = async (body: any) => {
  const result = await projects.create(body);
  return result;
};

const updateProjectService = async (id: any, body: any) => {
  const result = await projects.findByIdAndUpdate({ id }, body);
  return result;
};

const deleteProjectService = async (id: any) => {
  const result = await projects.deleteOne({ id });
  return result;
};

export const projectsServices = {
  getProjectsService,
  getSingleProjectService,
  createProjectService,
  updateProjectService,
  deleteProjectService,
};
