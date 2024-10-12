const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../configs/config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: function () {
      return !this.googleId;
    },
  },
  password: {
    type: String,
    required: function () {
      return !this.googleId;
    },
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  googleId: String,
  profileUrl: String,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  otp: String,
  otpExpire: Date,
  isPhoneVerified: Boolean,
  phoneVerificationCode: String,
  isEmailVerified: Boolean,
  emailVerificationCode: String,
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateOTP = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  this.otp = otp;
  this.otpExpire = Date.now() + config.resetPasswordExpire;
  return otp;
};

userSchema.methods.verifyOTP = function (enteredOtp) {
  return enteredOtp === this.otp && this.otpExpire > Date.now();
};

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.jwtSecret,
    { expiresIn: config.jwtExpiresIn }
  );
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;