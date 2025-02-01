import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import blogRoutes from "../routes/blogRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/blogs", blogRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected!"))
  .catch(error => console.error("MongoDB connection failed:", error));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
