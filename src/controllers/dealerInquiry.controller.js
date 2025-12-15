import DealerInquiry from "../models/dealerInquiry.model.js"
import {asyncHandler} from "../middlewares/asyncHandler.js"

export const createDealerInquiry = asyncHandler(async (req, res) => {
  const payload = {
    businessName: req.body.businessName,
    businessWebsite: req.body.businessWebsite,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    phone: req.body.phone,
    comments: req.body.comments,

    ip: req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket.remoteAddress,
    userAgent: req.headers["user-agent"] || "",
  };

  const doc = await DealerInquiry.create(payload);

  res.status(201).json({
    success: true,
    message: "Thank you! we will reach you out soon.",
    data: {
      id: doc._id,
      createdAt: doc.createdAt,
    },
  });
});

// Optional listing (admin)
export const getDealerInquiries = asyncHandler(async (req, res) => {
  const page = Math.max(parseInt(req.query.page || "1", 10), 1);
  const limit = Math.min(Math.max(parseInt(req.query.limit || "20", 10), 1), 100);
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    DealerInquiry.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    DealerInquiry.countDocuments(),
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