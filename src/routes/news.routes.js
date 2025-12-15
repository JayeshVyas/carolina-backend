import express from "express";
import {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
  uploadImage,
} from "../controllers/news.controller.js";
import upload from "../middlewares/upload.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getNews);
router.get("/:id", getNewsById);
router.post("/", verifyToken, upload.single("image"), createNews);
router.put("/:id", verifyToken, updateNews);
router.delete("/:id", verifyToken, deleteNews);
router.post("/file", verifyToken, upload.single("image"), uploadImage);

export default router;
