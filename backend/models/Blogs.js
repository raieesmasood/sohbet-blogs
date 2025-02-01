import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      // trim: true,
    },
    blog: {
      type: String,
      required: true,
    },
    archives:{
      type: String,
    },
    author: {
      type: String,
    },
    datePosted: {
      type: Date,
    },
  },
  // { timestamps: true }
);

// Enable full-text search on title and content
blogSchema.index({ title: "text", blog: "text" });


const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
