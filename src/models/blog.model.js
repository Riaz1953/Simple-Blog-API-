import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title must required"],
    },
    description: {
      type: String,
      required: [true, "Description must required"],
    },
    author: {
      type: String,
    },
  },
  { timestamps: true },
);
export const Blog = mongoose.model("Blog", blogSchema);
