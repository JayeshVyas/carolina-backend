import NewsModel from "../models/news.model.js";
import imagekit from "../config/imagekit.js";

// Fetch all news
export const getNews = async (req, res) => {
  try {
    const news = await NewsModel.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Failed to fetch news", error: error.message });
  }
};

// Fetch single News by id (slug)
export const getNewsById = async (req, res) => {
  try {
    const News = await NewsModel.findOne({ _id: req.params.id });
    if (!News) return res.status(404).json({ message: "News not found" });
    res.status(200).json(News);
  } catch (error) {
    console.error("Error fetching News:", error);
    res.status(500).json({ message: "Failed to fetch News", error: error.message });
  }
};

// Create new News
export const createNews = async (req, res) => {
  try {
    const News = await NewsModel.create(req.body);
    res.status(201).json(News);
  } catch (error) {
    console.error("Error creating News:", error);
    res.status(400).json({ message: "Failed to create News", error: error.message });
  }
};

// Update News
export const updateNews = async (req, res) => {
  try {
    const News = await NewsModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });

    if (!News) return res.status(404).json({ message: "News not found" });

    res.status(200).json(News);
  } catch (error) {
    console.error("Error updating News:", error);
    res.status(400).json({ message: "Failed to update News", error: error.message });
  }
};

// Delete News
export const deleteNews = async (req, res) => {
  try {
    const deletedNews = await NewsModel.findOneAndDelete({ _id: req.params.id });

    if (!deletedNews) return res.status(404).json({ message: "News not found" });

    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    console.error("Error deleting News:", error);
    res.status(500).json({ message: "Failed to delete News", error: error.message });
  }
};

// Upload image
export const uploadImage = async (req, res) => {
  try {
    let imageUrl = "";

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const uploadResponse = await imagekit.upload({
      file: req.file.buffer.toString("base64"),
      fileName: req.file.originalname,
      folder: "news",
    });

    imageUrl = uploadResponse.url;

    res.status(200).json({ url: imageUrl });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Image upload failed", error: error.message });
  }
};
