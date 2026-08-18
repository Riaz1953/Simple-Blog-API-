import { Router } from "express";
import {
  postBlog,
  findBlogs,
  findSingleBlogs,
} from "../controllers/blog.controller.js";
import { logRequest } from "../middleware/request.middleware.js";

const router = Router();

router.route("/blogs").post(logRequest, postBlog);
router.route("/blogs").get(logRequest, findBlogs);
router.route("/blog/:id").get(logRequest, findSingleBlogs);
export default router;
