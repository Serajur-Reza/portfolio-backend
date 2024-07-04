import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String },
  role: { type: String, default: "owner" },
});

export const users = model("Users", userSchema);
