import Blog from "../models/Blogs.js";
import { validationResult } from "express-validator";

// Helper function to extract date and author from string
const parseDateAndAuthor = (text) => {
  const match = text.match(/Posted on (.*?) by (.*)/);
  return match ? { datePosted: new Date(match[1]), author: match[2] } : { datePosted: null, author: "Unknown" };
};

// Fetch all blogs with pagination
export const getAllBlogs = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const blogs = await Blog.find()
      .sort({ datePosted: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalBlogs = await Blog.countDocuments();
    
    res.status(200).json({ totalBlogs, currentPage: page, totalPages: Math.ceil(totalBlogs / limit), blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch blogs by archive
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

// Fetch blog by title
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

// Fetch a blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new blog post
export const createBlog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { title, content, archives, dateAndAuthor } = req.body;
    const { datePosted, author } = parseDateAndAuthor(dateAndAuthor);

    const newBlog = new Blog({ title, content, archives, datePosted, author });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing blog post
export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a blog post
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search blogs with pagination
export const searchBlogs = async (req, res) => {
  const { keyword, archives, author, startDate, endDate, page = 1, limit = 10 } = req.query;

  if (!keyword && !archives && !author) return res.status(400).json({ error: "Provide a search term" });

  try {
    const filter = {};
    
    if (keyword) filter.$text = { $search: keyword };
    if (archives) filter.archives = archives;
    if (author) filter.author = author;
    if (startDate && endDate) filter.datePosted = { $gte: new Date(startDate), $lte: new Date(endDate) };

    const blogs = await Blog.find(filter)
      .sort({ datePosted: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalBlogs = await Blog.countDocuments(filter);

    res.status(200).json({ totalBlogs, currentPage: page, totalPages: Math.ceil(totalBlogs / limit), blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
