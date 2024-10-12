const twilio = require('twilio');
const config = require('../configs/config');

const client = twilio(config.twilioAccountSid, config.twilioAuthToken);

async function sendSMS({ phoneNumber, message }) {
  try {
    const result = await client.messages.create({
      body: message,
      from: config.twilioPhoneNumber,
      to: phoneNumber,
    });
    console.log(`SMS sent to ${result.to}: ${result.body}`);
    return result;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
}

module.exports = sendSMS;