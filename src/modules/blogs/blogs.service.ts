import { blog } from "./blogs.model";

const getBlogsService = async () => {
  const result = await blog.find();
  return result;
};

const getSingleBlogService = async (id: any) => {
  const result = await blog.findById(id);
  return result;
};

const createBlogService = async (body: any) => {
  const result = await blog.create(body);
  return result;
};

const updateBlogService = async (id: any, body: any) => {
  const result = await blog.findByIdAndUpdate({ id }, body);
  return result;
};

const deleteBlogService = async (id: any) => {
  const result = await blog.deleteOne({ id });
  return result;
};

export const blogServices = {
  getBlogsService,
  getSingleBlogService,
  createBlogService,
  updateBlogService,
  deleteBlogService,
};
