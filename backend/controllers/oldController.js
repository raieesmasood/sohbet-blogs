import Blog from "../models/Blogs.js";
import { validationResult } from "express-validator";

// Fetch all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// fetch by archive

export const getBlogsByArchive = async (req, res) => {
  const { archive } = req.params;
  try {
    const blogs = await Blog.find({ archives: archive });
    if (!blogs.length) return res.status(404).json({ error: "No blogs found" });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching blogs by archive" });
  }
};

//fetch by title

export const getBlogByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const blog = await Blog.findOne({ title });
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the blog" });
  }
};



// Get a single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new blog
export const createBlog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing blog
export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search blogs by keyword in title or content
export const searchBlogs = async (req, res) => {
  const { keyword } = req.query;
  try {
    const blogs = await Blog.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { content: { $regex: keyword, $options: "i" } },
      ],
    });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
