import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    rating: { type: Number, min: 0, max: 5 },
    width: { type: String },
    length: { type: String },
    height: { type: String },
    windRating: { type: String },
    price: { type: Number },
    hotSeller: { type: Boolean, default: false },
    bestUse: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
