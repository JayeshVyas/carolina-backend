import mongoose from "mongoose";

const DealerInquirySchema = new mongoose.Schema(
  {
    businessName: { type: String, trim: true, required: true, minlength: 2, maxlength: 120 },
    businessWebsite: { type: String, trim: true, maxlength: 200 },

    firstName: { type: String, trim: true, required: true, minlength: 2, maxlength: 60 },
    lastName: { type: String, trim: true, required: true, minlength: 2, maxlength: 60 },

    email: { type: String, trim: true, lowercase: true, required: true, maxlength: 120 },
    address: { type: String, trim: true, required: true, minlength: 5, maxlength: 200 },

    city: { type: String, trim: true, required: true, minlength: 2, maxlength: 80 },
    state: { type: String, trim: true, required: true, minlength: 2, maxlength: 80 },

    zip: { type: String, trim: true, required: true, minlength: 3, maxlength: 15 },
    phone: { type: String, trim: true, required: true, minlength: 7, maxlength: 25 },

    comments: { type: String, trim: true, maxlength: 2000 },

    // Metadata
    ip: { type: String, trim: true },
    userAgent: { type: String, trim: true },
    status: { type: String, enum: ["new", "reviewed", "approved", "rejected"], default: "new" },
  },
  { timestamps: true }
);

DealerInquirySchema.index({ createdAt: -1 });

export default mongoose.model("DealerInquiry", DealerInquirySchema);
