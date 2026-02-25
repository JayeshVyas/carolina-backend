import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import blogRoutes from "./routes/blog.routes.js";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";
import contactMessage from "./routes/contact.routes.js";
import dealerInquiryRoutes from "./routes/dealerInquiry.routes.js";
import quote from "./routes/quote.routes.js";
import news from "./routes/news.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/dealer-inquiry", dealerInquiryRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/news", news);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactMessage);
app.use("/api/quote", quote);

export default app;
