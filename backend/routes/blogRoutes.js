import express from "express";
import { body } from "express-validator";
import {
  getAllBlogs,
  searchBlogs,
  getBlogById,
  getBlogByTitle,
  getBlogsByArchive,
  createBlog,
  updateBlog,
  deleteBlog
} from "../controllers/blogControllerr.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/search", searchBlogs);
router.get("/archive/:archive", getBlogsByArchive);
router.get("/title/:title", getBlogByTitle);
router.get("/:id", getBlogById);

router.post(
  "/",
  body("title").notEmpty().withMessage("Title is required"),
  body("blog").notEmpty().withMessage("Content is required"),
  body("archives").notEmpty().withMessage("Archives are required"),
  createBlog
);

router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
