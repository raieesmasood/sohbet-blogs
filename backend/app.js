import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Blog API routes
app.use("/api/blogs", blogRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Server Error",
  });
});

export default app;
