import { Router } from "express";
import {
  postBlog,
  findBlogs,
  findSingleBlogs,
} from "../controllers/blog.controller.js";

const router = Router();

router.route("/blogs").post(postBlog);
router.route("/blogs").get(findBlogs);
router.route("/blog/:id").get(findSingleBlogs);
export default router;
