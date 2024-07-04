import catchAsync from "../../middlewares/catchAsync";
import { authServices } from "./auth.service";

const loginController = catchAsync(async (req, res) => {
  const data = await authServices.loginService(req.body);
  return res.status(200).json({
    success: true,
    data,
  });
});

const createUserController = catchAsync(async (req, res) => {
  const data = await authServices.createUserService(req.body);
  return res.status(200).json({
    success: true,
    data,
  });
});

export const authControllers = {
  loginController,
  createUserController,
};
