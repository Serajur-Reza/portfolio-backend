import catchAsync from "../../middlewares/catchAsync";
import { blogServices } from "./blogs.service";

const getBlogsController = catchAsync(async (req, res) => {
  const data = await blogServices.getBlogsService();
  return res.status(200).json({
    success: true,
    data,
  });
});

const getSingleBlogController = catchAsync(async (req, res) => {
  const data = await blogServices.getSingleBlogService(req.params.id);
  return res.status(200).json({
    success: true,
    data,
  });
});

const createBlogController = catchAsync(async (req, res) => {
  const data = await blogServices.createBlogService(req.body);
  return res.status(200).json({
    success: true,
    data,
  });
});

const updateBlogController = catchAsync(async (req, res) => {
  const data = await blogServices.updateBlogService(req.params.id, req.body);
  return res.status(200).json({
    success: true,
    data,
  });
});

const deleteBlogController = catchAsync(async (req, res) => {
  const data = await blogServices.deleteBlogService(req.params.id);
  return res.status(200).json({
    success: true,
    data,
  });
});

export const blogControllers = {
  getBlogsController,
  getSingleBlogController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
};
