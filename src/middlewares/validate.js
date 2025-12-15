function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").toLowerCase());
}
const BUILDING_TYPES = ["Carports", "Garage", "Barn", "RV Covers", "Commercial", "Custom"];
const TIMELINES = ["ASAP", "1-3 months", "3-6 months"];

function normalizePhone(phone) {
  // Keep digits and + only
  return String(phone || "").replace(/[^0-9+]/g, "").trim();
}

export function validateContactPayload(req, res, next) {
  const errors = [];

  const name = String(req.body?.name || "").trim();
  const state = String(req.body?.state || "").trim();
  const phone = normalizePhone(req.body?.phone);
  const email = String(req.body?.email || "").trim().toLowerCase();
  const message = String(req.body?.message || "").trim();

  if (name.length < 2) errors.push("Name must be at least 2 characters.");
  if (name.length > 80) errors.push("Name is too long.");

  if (state.length > 40) errors.push("State is too long.");

  if (!phone || phone.length < 7) errors.push("Phone is invalid.");
  if (phone.length > 25) errors.push("Phone is too long.");

  if (!email || !isEmail(email)) errors.push("Email is invalid.");
  if (email.length > 120) errors.push("Email is too long.");

  if (message.length < 5) errors.push("Message must be at least 5 characters.");
  if (message.length > 2000) errors.push("Message is too long.");

  // Re-assign normalized values (important)
  req.body.name = name;
  req.body.state = state;
  req.body.phone = phone;
  req.body.email = email;
  req.body.message = message;

  if (errors.length) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
}

function normalizeUrl(url) {
  const u = String(url || "").trim();
  if (!u) return "";
  if (/^https?:\/\//i.test(u)) return u;
  return `https://${u}`;
}

export function validateDealerInquiry(req, res, next) {
  const errors = [];

  const businessName = String(req.body?.businessName || "").trim();
  const businessWebsiteRaw = String(req.body?.businessWebsite || "").trim();
  const businessWebsite = normalizeUrl(businessWebsiteRaw);

  const firstName = String(req.body?.firstName || "").trim();
  const lastName = String(req.body?.lastName || "").trim();

  const email = String(req.body?.email || "").trim().toLowerCase();
  const address = String(req.body?.address || "").trim();

  const city = String(req.body?.city || "").trim();
  const state = String(req.body?.state || "").trim();

  const zip = String(req.body?.zip || "").trim();
  const phone = normalizePhone(req.body?.phone);

  const comments = String(req.body?.comments || "").trim();

  // Required checks
  if (businessName.length < 2) errors.push("Business Name must be at least 2 characters.");
  if (firstName.length < 2) errors.push("First Name must be at least 2 characters.");
  if (lastName.length < 2) errors.push("Last Name must be at least 2 characters.");

  if (!email || !isEmail(email)) errors.push("Email is invalid.");
  if (address.length < 5) errors.push("Address must be at least 5 characters.");

  if (city.length < 2) errors.push("City must be at least 2 characters.");
  if (state.length < 2) errors.push("State must be at least 2 characters.");

  if (zip.length < 3) errors.push("Zip must be at least 3 characters.");
  if (!phone || phone.length < 7) errors.push("Phone is invalid.");

  // Max length checks
  if (businessName.length > 120) errors.push("Business Name is too long.");
  if (businessWebsite.length > 200) errors.push("Business Website is too long.");
  if (firstName.length > 60) errors.push("First Name is too long.");
  if (lastName.length > 60) errors.push("Last Name is too long.");
  if (email.length > 120) errors.push("Email is too long.");
  if (address.length > 200) errors.push("Address is too long.");
  if (city.length > 80) errors.push("City is too long.");
  if (state.length > 80) errors.push("State is too long.");
  if (zip.length > 15) errors.push("Zip is too long.");
  if (phone.length > 25) errors.push("Phone is too long.");
  if (comments.length > 2000) errors.push("Comments is too long.");

  // write normalized values back
  req.body.businessName = businessName;
  req.body.businessWebsite = businessWebsite;
  req.body.firstName = firstName;
  req.body.lastName = lastName;
  req.body.email = email;
  req.body.address = address;
  req.body.city = city;
  req.body.state = state;
  req.body.zip = zip;
  req.body.phone = phone;
  req.body.comments = comments;

  if (errors.length) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
}

export function validateQuoteRequest(req, res, next) {
  const errors = [];

  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim().toLowerCase();
  const phone = normalizePhone(req.body?.phone);
  const zipCode = String(req.body?.zipCode || "").trim();

  const buildingType = String(req.body?.buildingType || "Carports").trim();
  const timelineRaw = req.body?.timeline;
  const timeline = timelineRaw === null || timelineRaw === undefined || timelineRaw === ""
    ? null
    : String(timelineRaw).trim();

  const projectDetails = String(req.body?.projectDetails || "").trim();
  const contactByTextOrEmail = Boolean(req.body?.contactByTextOrEmail);

  const recaptchaTokenRaw = req.body?.recaptchaToken;
  const recaptchaToken =
    recaptchaTokenRaw === null || recaptchaTokenRaw === undefined || recaptchaTokenRaw === ""
      ? null
      : String(recaptchaTokenRaw).trim();

  // required
  if (name.length < 2) errors.push("Name must be at least 2 characters.");
  if (!email || !isEmail(email)) errors.push("Email is invalid.");
  if (!phone || phone.length < 7) errors.push("Phone is invalid.");
  if (zipCode.length < 3) errors.push("Zip Code must be at least 3 characters.");

  // enum checks
  if (!BUILDING_TYPES.includes(buildingType)) {
    errors.push(`Building type must be one of: ${BUILDING_TYPES.join(", ")}`);
  }

  if (timeline !== null && !TIMELINES.includes(timeline)) {
    errors.push(`Timeline must be one of: ${TIMELINES.join(", ")} (or null)`);
  }

  // max lengths
  if (name.length > 80) errors.push("Name is too long.");
  if (email.length > 120) errors.push("Email is too long.");
  if (phone.length > 25) errors.push("Phone is too long.");
  if (zipCode.length > 12) errors.push("Zip Code is too long.");
  if (projectDetails.length > 2000) errors.push("Project details is too long.");

  // write back normalized values (important)
  req.body.name = name;
  req.body.email = email;
  req.body.phone = phone;
  req.body.zipCode = zipCode;
  req.body.buildingType = buildingType;
  req.body.timeline = timeline; // may be null
  req.body.projectDetails = projectDetails;
  req.body.contactByTextOrEmail = contactByTextOrEmail;
  req.body.recaptchaToken = recaptchaToken;

  if (errors.length) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
}

