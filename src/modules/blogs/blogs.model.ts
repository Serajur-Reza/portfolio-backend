import { Schema, model } from "mongoose";

const blogsSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

export const blog = model("Blogs", blogsSchema);
