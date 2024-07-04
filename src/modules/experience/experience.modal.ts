import { Schema, model } from "mongoose";

const experienceSchema = new Schema({
  company: { type: String },
  designation: { type: String },
  description: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
});

export const experience = model("Experience", experienceSchema);
