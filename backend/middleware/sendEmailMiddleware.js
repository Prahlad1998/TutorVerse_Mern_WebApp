const nodemailer = require("nodemailer");
const Tutor = require("../models/tutor");
const Student=require("../models/user");
const generateOTP = require('../email/genOTP');

const sendOTPmiddleware = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const existTutor = await Tutor.findOne({ email });
    if (existTutor)
      return res.json({
        message: "The Email is Taken,try with different one",
      });
    const OTP = generateOTP();

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      // secure: false,
      // requireTLS:false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASS,
      },
    });
    transporter.sendMail(
      {
        from: 'development.pb2023@gmail.com', // sender address
        to:email, // list of receivers
        subject: "Hello ,This email is for verify OTP", // Subject line
        text: `Hello User! Your One Time Password is  ${OTP}.\n This OTP will valid only for 1 min.`, // plain text body
        // html: "<b>Hello world?</b>", // html body
      },
      function (error, info) {
        if (error) {
        console.log(error);
          return res.json({
            message: error,
          });
          
        } else {
          console.log("OTP has been sent successfully!");
          res.json({
            status: "success",
            message: "OTP has been sent successfully",
            body: info,
          });
        }
        req.otp = OTP;
        next();
      }
    );
  } catch (error) {
    console.log("Something Error on sending otp", error);
    throw new Error(error);
  }
};

const sendOTPmiddlewareStudent = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const existStudent = await Student.findOne({ email });
    console.log(existStudent);
    if (existStudent)
      return res.json({
        status:"fail",
        message: "The Email is Taken,try with different one",
      });
    
    const OTP = generateOTP();
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      // secure: false,
      // requireTLS:false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASS,
      },
    });
    transporter.sendMail(
      {
        from: 'development.pb2023@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Hello ,This email is for verify OTP", // Subject line
        text: `Hello User! Your One Time Password is \n ${OTP}.\n This OTP will valid only for 1 min.`, // plain text body
        // html: "<b>Hello world?</b>", // html body
      },

      function (error, info) {
        if (error) {
        console.log(error);
          return res.json({
            message: error,
          });
          
        } else {
          console.log("OTP has been sent successfully!");
          console.log(OTP);
          res.json({
            status: "success",
            message: "OTP has been sent successfully",
            body: info,
          });
        }
        req.otp = OTP;
        next();
      }
    );
  } catch (error) {
    console.log("Something Error on sending otp", error);
    throw new Error(error);
  }
};
module.exports = {
    sendOTPmiddleware,
    sendOTPmiddlewareStudent
};
