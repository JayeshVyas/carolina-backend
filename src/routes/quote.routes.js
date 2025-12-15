import express from "express";
import rateLimit from "express-rate-limit"
import { validateQuoteRequest } from "../middlewares/validate.js"
import { createQuoteRequest, getQuoteRequests } from "../controllers/quote.controller.js"

const router = express.Router();

const quoteLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, 
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests. Please try later." },
});

router.post("/", quoteLimiter, validateQuoteRequest, createQuoteRequest);

// optional admin list
router.get("/", getQuoteRequests);

export default router;
