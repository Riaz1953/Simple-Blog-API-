import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Blog } from "../models/blog.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const postBlog = asyncHandler(async (req, res) => {
  const { title, description, author } = req.body;
  if (
    [title, description].some((fields) => {
      fields.trim() === "";
    })
  ) {
    throw new ApiError(401, "All fields Are required");
  }
  const blog = await Blog.create({
    title,
    description,
    author,
  });

  res.status(201).json(new ApiResponse(200, blog, "Blog created successfully"));
});

const findBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(new ApiResponse(200, blogs, "Blog find successfully"));
});
const findSingleBlogs = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new ApiError(400, "Blog Not found");
  }
  res.status(200).json(new ApiResponse(200, blog, "Blog find successfully"));
});

export { postBlog, findBlogs, findSingleBlogs };
