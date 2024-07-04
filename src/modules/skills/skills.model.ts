import { Schema, model } from "mongoose";

const skillSchema = new Schema({
  name: { type: String },
});

const skillsSchema = new Schema({
  role: { type: String, default: "owner" },
  core: [{ type: String }],
  moderate: [{ type: String }],
});

export const skills = model("Skills", skillsSchema);
