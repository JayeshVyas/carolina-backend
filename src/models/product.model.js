import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    sku: { type: String, required: true, unique: true },
    productNumber: { type: String },

    name: { type: String, required: true },
    image: { type: String, required: true },

    rating: { type: Number, min: 0, max: 5, default: 0 },

    width: { type: String },
    length: { type: String },
    height: { type: String },

    windRating: { type: String },

    price: { type: Number, required: true },

    category: { type: String },
    categoryType:{ type: String },

    description: { type: String },
    alt_text_main: { type: String },

    hotSeller: { type: Boolean, default: false },
    bestUse: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);