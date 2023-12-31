const otpGenerator = require("otp-generator");

const generateOTP = () => {
  const OTP = otpGenerator.generate(4, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  return OTP;
};
module.exports = generateOTP;
