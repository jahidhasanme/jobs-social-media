const parseExpireTime = require('../utils/parseExpireTime');

module.exports = {
  maxAdminUsers: process.env.MAX_ADMIN_USERS || 3,
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  emailUsername: process.env.EMAIL_USERNAME,
  emailPassword: process.env.EMAIL_PASSWORD,
  fromName: process.env.FROM_NAME,
  fromEmail: process.env.FROM_EMAIL,
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
  twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER,
  resetPasswordExpire: parseExpireTime(process.env.RESET_PASSWORD_EXPIRE || '2m'),
  otpExpireDuration: parseExpireTime(process.env.OTP_EXPIRE_DURATION || '2m'),
  rateLimitDuration: parseExpireTime(process.env.RATE_LIMIT_DURATION || '1h'),
  maxAttempts: process.env.MAX_ATTEMPTS
};
