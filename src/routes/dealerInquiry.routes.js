import express from "express";
import rateLimit from "express-rate-limit"
import { validateDealerInquiry }  from "../middlewares/validate.js"
import {
  createDealerInquiry,
  deleteDealerInquiry,
  getDealerInquiries,
} from "../controllers/dealerInquiry.controller.js"
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

const dealerLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests. Please try later." },
});

router.post("/", dealerLimiter, validateDealerInquiry, createDealerInquiry);

router.get("/",verifyToken, getDealerInquiries);

router.delete("/:id",verifyToken, deleteDealerInquiry);


export default router;
