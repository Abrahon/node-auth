const rateLimit = require("express-rate-limit");

// Limit OTP requests: max 5 requests per 10 minutes
const otpLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  message: "Too many OTP requests, please try again later.",
});

module.exports = otpLimiter;
