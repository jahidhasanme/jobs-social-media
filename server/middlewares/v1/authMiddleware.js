const jwt = require('jsonwebtoken');
const User = require('../../models/v1/User');
const config = require('../../configs/config');

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, error: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: 'Not authorized' });
  }
};
