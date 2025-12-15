import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    isMain: { type: Boolean, default: false },
    isSubMain: { type: Boolean, default: false },
    title: { type: String, required: true },
    subheading: { type: String },
    date: { type: String },
    meta: { type: String },
    imageSrc: { type: String },
    imageAlt: { type: String },
    contentMarkdown: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("News", newsSchema);
