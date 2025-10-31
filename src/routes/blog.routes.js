import express from "express";
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  uploadImage,
} from "../controllers/blog.controller.js";
import upload from "../middlewares/upload.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", verifyToken, getBlogs);
router.get("/:id", getBlogById);
router.post("/", verifyToken, upload.single("image"), createBlog);
router.put("/:id", verifyToken, updateBlog);
router.delete("/:id", verifyToken, deleteBlog);
router.post("/file", verifyToken, upload.single("image"), uploadImage);

export default router;
