const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cache = require('memory-cache');
const config = require('../../configs/config');
const User = require('../../models/v1/User');
const sendEmail = require('../../utils/sendEmail');
const sendSMS = require('../../utils/sendSMS');

exports.register = async (req, res) => {
  const { name, email, phoneNumber, password, confirm_password, role, profileUrl } = req.body;

  if (password !== confirm_password) {
    return res.status(400).json({ success: false, error: 'Passwords do not match' });
  }

  try {
    let user = await User.findOne({ $or: [{ email }, { phoneNumber }] });

    if (user) {
      return res.status(400).json({ success: false, error: 'User already exists' });
    }

    if (role === 'admin') {
      const adminUserCount = await User.countDocuments({ role: 'admin' });
      if (adminUserCount >= config.maxAdminUsers) {
        return res.status(400).json({ success: false, error: 'Maximum users limit reached for admin' });
      }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profileUrl,
    });
    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({ success: true, data: userResponse });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.login = async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }] });

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, error: 'Invalid credentials' });
    }

    const token = user.generateAuthToken();

    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const rateLimitKey = (identifier) => `forgotPasswordRateLimit_${identifier}`;

exports.forgotPassword = async (req, res) => {
  const { email, phoneNumber, method } = req.body;
  const identifier = email || phoneNumber;
  const cacheKey = rateLimitKey(identifier);

  try {
    let requestCount = cache.get(cacheKey) || 0;

    if (requestCount >= config.maxAttempts && method === 'sms') {
      return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
    }

    const user = await User.findOne({ $or: [{ email }, { phoneNumber }] });

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpire = Date.now() + config.otpExpireDuration;

    await user.save({ validateBeforeSave: false });

    if (method === 'email') {
      const message = `Your OTP code for password reset is: ${otp}`;
      try {
        await sendEmail({
          email: user.email,
          subject: 'Password Reset OTP',
          message,
        });

        cache.put(cacheKey, requestCount + 1, config.rateLimitDuration);

        res.status(200).json({ success: true, data: 'OTP sent via email' });
      } catch (err) {
        user.otp = undefined;
        user.otpExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return res.status(500).json({ success: false, error: 'Email could not be sent' });
      }
    } else if (method === 'sms') {
      const smsMessage = `Your OTP code for password reset is: ${otp}`;
      try {
        await sendSMS({
          phoneNumber: user.phoneNumber,
          message: smsMessage,
        });

        cache.put(cacheKey, requestCount + 1, config.rateLimitDuration);

        res.status(200).json({ success: true, data: 'OTP sent via SMS' });
      } catch (err) {
        user.otp = undefined;
        user.otpExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return res.status(500).json({ success: false, error: 'SMS could not be sent' });
      }
    } else {
      return res.status(400).json({ success: false, error: 'Invalid method' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.verifyOTP = async (req, res) => {
  const { otp } = req.body;

  try {
    const user = await User.findOne({ 
      otp, 
      otpExpire: { $gt: Date.now() } 
    });

    if (!user) {
      return res.status(400).json({ success: false, error: 'Invalid or expired OTP' });
    }

    user.resetPasswordToken = Math.random().toString(36).substring(2, 10);
    user.resetPasswordExpire = Date.now() + config.resetPasswordExpire;

    await user.save();

    res.status(200).json({ success: true, data: 'OTP verified', resetToken: user.resetPasswordToken });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ success: false, error: 'Invalid or expired token' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    user.otp = undefined;
    user.otpExpire = undefined;

    await user.save();

    res.status(200).json({ success: true, data: 'Password reset successful' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const rateLimitKeyForOtp = (phoneNumber) => `sendOtpRateLimit_${phoneNumber}`;

exports.sendOtpPhone = async (req, res) => {
  const { phoneNumber } = req.body;
  const cacheKey = rateLimitKeyForOtp(phoneNumber);

  try {
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    let requestCount = cache.get(cacheKey) || 0;

    if (requestCount >= config.maxAttempts) {
      return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.phoneVerificationCode = otp;
    await user.save({ validateBeforeSave: false });

    await sendSMS({
      phoneNumber: user.phoneNumber,
      message: `Your OTP for phone verification is: ${otp}`,
    });

    cache.put(cacheKey, requestCount + 1, config.rateLimitDuration);

    res.status(200).json({ success: true, message: 'OTP sent to your phone number' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.sendOtpEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.emailVerificationCode = otp;
    await user.save({ validateBeforeSave: false });

    await sendEmail({
      email: user.email,
      subject: 'Email Verification OTP',
      message: `Your OTP for email verification is: ${otp}`,
    });

    res.status(200).json({ success: true, message: 'OTP sent to your email address' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.verifyPhone = async (req, res) => {
  const { phoneNumber, code } = req.body;

  try {
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    if (user.phoneVerificationCode !== code) {
      return res.status(400).json({ success: false, error: 'Invalid verification code' });
    }

    user.isPhoneVerified = true;
    user.phoneVerificationCode = undefined;
    await user.save();

    res.status(200).json({ success: true, data: 'Phone number verified successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.verifyEmail = async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    if (user.emailVerificationCode !== code) {
      return res.status(400).json({ success: false, error: 'Invalid verification code' });
    }

    user.isEmailVerified = true;
    user.emailVerificationCode = undefined;
    await user.save();

    res.status(200).json({ success: true, data: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
