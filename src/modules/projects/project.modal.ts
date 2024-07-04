import { Schema, model } from "mongoose";

const projectsSchema = new Schema({
  name: { type: String },
  type: { type: String },
  description: { type: String },
  front: { type: String },
  back: { type: String },
  live: { type: String },
});

export const projects = model("Projects", projectsSchema);
