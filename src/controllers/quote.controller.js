import QuoteRequest from "../models/quoteRequest.model.js"
import {asyncHandler} from "../middlewares/asyncHandler.js"

export const createQuoteRequest = asyncHandler(async (req, res) => {
  const doc = await QuoteRequest.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    zipCode: req.body.zipCode,
    buildingType: req.body.buildingType,
    timeline: req.body.timeline,
    projectDetails: req.body.projectDetails,
    contactByTextOrEmail: req.body.contactByTextOrEmail,
    recaptchaToken: req.body.recaptchaToken,

    ip: req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket.remoteAddress,
    userAgent: req.headers["user-agent"] || "",
  });

  res.status(201).json({
    success: true,
    message: "Quote request received",
    data: {
      id: doc._id,
      createdAt: doc.createdAt,
    },
  });
});

// optional admin listing
export const getQuoteRequests = asyncHandler(async (req, res) => {
  const page = Math.max(parseInt(req.query.page || "1", 10), 1);
  const limit = Math.min(Math.max(parseInt(req.query.limit || "20", 10), 1), 100);
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    QuoteRequest.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    QuoteRequest.countDocuments(),
  ]);

  res.json({
    success: true,
    data: items,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});



export const deleteQuoteRequest = async (req, res) => {
  try {
    const deletedQuoteRequest = await QuoteRequest.findOneAndDelete({ _id: req.params.id });

    if (!deletedQuoteRequest) return res.status(404).json({ message: "QuoteRequest not found" });

    res.status(200).json({ message: "QuoteRequest deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Failed to delete blog", error: error.message });
  }
};