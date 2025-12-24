const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");
const otpLimiter = require("../middlewares/otpLimiter");

router.post("/signup", auth.signup);
router.get("/verify-email", auth.verifyEmail);
router.post("/login", auth.login);
router.post("/refresh-token", auth.refreshToken);
router.post("/logout", auth.logout);
router.post("/forgot-password", otpLimiter, auth.forgotPassword);
router.post("/verify-otp", auth.verifyOTP);
router.post("/reset-password", auth.resetPassword);



module.exports = router;
