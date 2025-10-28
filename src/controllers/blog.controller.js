import Blog from "../models/blog.model.js";
import imagekit from "../config/imagekit.js"; // assuming you have configured this

// Fetch all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
  }
};

// Fetch single blog by id (slug)
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOne({ id: req.params.id });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ message: "Failed to fetch blog", error: error.message });
  }
};

// Create new blog
export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(400).json({ message: "Failed to create blog", error: error.message });
  }
};

// Update blog
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
    });

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(400).json({ message: "Failed to update blog", error: error.message });
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findOneAndDelete({ id: req.params.id });

    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Failed to delete blog", error: error.message });
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
      folder: "blogs",
    });

    imageUrl = uploadResponse.url;

    res.status(200).json({ url: imageUrl });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Image upload failed", error: error.message });
  }
};
