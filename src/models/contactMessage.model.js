import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    state: { type: String, trim: true, maxlength: 40 },
    phone: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 2000,
    },

    // useful metadata
    ip: { type: String, trim: true },
    userAgent: { type: String, trim: true },
    status: { type: String, enum: ["new", "read", "archived"], default: "new" },
  },
  { timestamps: true }
);

ContactMessageSchema.index({ createdAt: -1 });

export default  mongoose.model("ContactMessage", ContactMessageSchema);