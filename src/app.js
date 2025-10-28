import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import blogRoutes from "./routes/blog.routes.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/products", productRoutes);

export default app;
