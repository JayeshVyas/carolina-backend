import express from "express";
import rateLimit from "express-rate-limit";
import { createContact, getContacts } from "../controllers/contact.controller.js";
import { validateContactPayload } from "../middlewares/validate.js";

const router = express.Router();

// Basic anti-spam rate limit (per IP)
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests. Please try later." },
});

router.post("/", contactLimiter, validateContactPayload, createContact);

// Optional admin listing endpoint
router.get("/", getContacts);

export default router;
