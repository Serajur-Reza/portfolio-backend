import { users } from "./auth.model";

const loginService = async (body: any) => {
  const { email, password } = body;

  if (email === "rezainfinity54@gmail.com" && password === "1234") {
    return { message: "successfully logged in", token: "obc" };
  } else {
    throw new Error("invalid credentials");
  }
};

const createUserService = async (body: any) => {
  const result = await users.create(body);
  return result;
};

export const authServices = {
  loginService,
  createUserService,
};
