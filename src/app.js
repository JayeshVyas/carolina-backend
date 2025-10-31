import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import blogRoutes from "./routes/blog.routes.js";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

export default app;
