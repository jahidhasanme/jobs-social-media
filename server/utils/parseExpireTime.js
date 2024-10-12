const parseExpireTime = (expireString) => {
    const timeValue = parseInt(expireString.slice(0, -1));
    const timeUnit = expireString.slice(-1);
  
    switch (timeUnit) {
      case 'm':
        return timeValue * 60 * 1000;
      case 'h':
        return timeValue * 60 * 60 * 1000;
      case 'd':
        return timeValue * 24 * 60 * 60 * 1000;
      default:
        throw new Error('Invalid time unit for RESET_PASSWORD_EXPIRE');
    }
  };
  
  module.exports = parseExpireTime;  