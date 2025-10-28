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

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", upload.single("image"), createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);
router.post("/file", upload.single("image"), uploadImage);



export default router;
