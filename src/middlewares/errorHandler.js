export function errorHandler(err, req, res, next) {
  console.error(err);

  const status = err.statusCode || 500;
  const msg = err.message || "Server error";

  res.status(status).json({
    success: false,
    message: msg,
  });
}
