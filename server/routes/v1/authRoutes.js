const router = require('express').Router();
const { 
  register, 
  login, 
  forgotPassword, 
  verifyOTP, 
  resetPassword, 
  sendOtpPhone, 
  sendOtpEmail, 
  verifyPhone, 
  verifyEmail 
} = require('../../controllers/v1/authController');
const { protect } = require('../../middlewares/v1/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.post('/forgot_password', forgotPassword);
router.post('/send_otp_phone', protect, sendOtpPhone);
router.post('/send_otp_email', protect, sendOtpEmail);
router.post('/verify_phone', protect, verifyPhone);
router.post('/verify_email', protect, verifyEmail);
router.post('/verify_forgot_password_otp', verifyOTP);
router.put('/reset_password/:token', resetPassword);

module.exports = router;
