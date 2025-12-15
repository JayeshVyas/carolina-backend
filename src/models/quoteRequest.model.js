import mongoose from "mongoose";

const QuoteRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      maxlength: 120,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      minlength: 7,
      maxlength: 25,
    },
    zipCode: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 12,
    },

    buildingType: {
      type: String,
      enum: ["Carports", "Garage", "Barn", "RV Covers", "Commercial", "Custom"],
      required: true,
      default: "Carports",
    },

    timeline: {
      type: String,
      enum: ["ASAP", "1-3 months", "3-6 months"],
      default: null,
    },

    projectDetails: { type: String, trim: true, maxlength: 2000 },

    contactByTextOrEmail: { type: Boolean, default: false },

    // if you integrate real captcha later
    recaptchaToken: { type: String, default: null },

    // metadata
    ip: { type: String, trim: true },
    userAgent: { type: String, trim: true },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

QuoteRequestSchema.index({ createdAt: -1 });
export default  mongoose.model("QuoteRequest", QuoteRequestSchema);
