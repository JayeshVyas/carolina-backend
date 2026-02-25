import Product from "../models/product.model.js";
import imagekit from "../config/imagekit.js";

export const getProducts = async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const createProduct = async (req, res) => {
  try {
    let imageUrl = "";

    // If an image file is uploaded, send to ImageKit
    if (req.file) {
      const uploadResponse = await imagekit.upload({
        file: req.file.buffer.toString("base64"),
        fileName: req.file.originalname,
        folder: "products",
      });
      imageUrl = uploadResponse.url;
    }else if(req.body.image){
      imageUrl = req.body.image;
    }

    const newProduct = await Product.create({
      ...req.body,
      image: imageUrl || "",
    });

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ message: "Failed to create product", error });
  }
};

export const updateProduct = async (req, res) => {
  const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  await Product.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "Product deleted" });
};
