import imagekit from "../config/imagekit.js";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.file;
    const uploadResponse = await imagekit.upload({
      file: file.buffer.toString("base64"),
      fileName: file.originalname,
      folder: "uploads",
    });

    res.json({
      url: uploadResponse.url,
      name: uploadResponse.name,
      fileId: uploadResponse.fileId,
    });
  } catch (error) {
    console.error("Image upload error:", error.message);
    res.status(500).json({ message: "Image upload failed", error });
  }
};
