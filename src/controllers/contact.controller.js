import { asyncHandler } from "../middlewares/asyncHandler.js";
import ContactMessage from "../models/contactMessage.model.js"

export const createContact = asyncHandler(async (req, res) => {
  const { name, state, phone, email, message } = req.body;

  const doc = await ContactMessage.create({
    name,
    state,
    phone,
    email,
    message,
    ip: req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket.remoteAddress,
    userAgent: req.headers["user-agent"] || "",
  });

  return res.status(201).json({
    success: true,
    message: "Thank you! we will reach you out soon.",
    data: {
      id: doc._id,
      createdAt: doc.createdAt,
    },
  });
});

// Admin-like endpoint (optional)
export const getContacts = asyncHandler(async (req, res) => {
  const page = Math.max(parseInt(req.query.page || "1", 10), 1);
  const limit = Math.min(Math.max(parseInt(req.query.limit || "20", 10), 1), 100);
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    ContactMessage.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    ContactMessage.countDocuments(),
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