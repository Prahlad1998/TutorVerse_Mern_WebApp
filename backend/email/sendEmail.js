const nodemailer = require("nodemailer");
const generateOTP = require("./genOTP");
let otpREF;
const sendOTPtomail = async (req, res, next) => {
  const { email } = req.body;
  console.log(req.body);
  const OTP = generateOTP();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "brady.emard@ethereal.email",
      pass: "S7r4hPedT1zRDaTunX",
    },
  });
  let info = await transporter.sendMail(
    {
      from: 'Prahlad 👻" <prahladbora2016@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Hello ,This email is for verify OTP", // Subject line
      text: `Hello User! Your One Time Password is  ${OTP}.\n This OTP will valid only for 1 min.`, // plain text body
      // html: "<b>Hello world?</b>", // html body
    },
    function (error, info) {
      if (error) {
        res.json({
          message: error,
        });
        console.log(error);
      } else {
        console.log("OTP has been sent successfully!");
        res.json({
          status: "success",
          message: "OTP has been sent successfully",
          body: info,
        });
      }
      next();
    }
  );
};

module.exports = {
  sendOTPtomail,
};

// const sendMail=async(req,res)=>{
//     let testAccount = await nodemailer.createTestAccount();
//     let transporter =nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'brady.emard@ethereal.email',
//             pass: 'S7r4hPedT1zRDaTunX'
//         }
//     });
//     let info=await transporter.sendMail({
//     from: '"Prahlad 👻" <prahladbora2016@gmail.com>', // sender address
//     to: "prahladbora2015@gmail.com", // list of receivers
//     subject: "Hello ,This email is just for demo", // Subject line
//     text: "Hello world! A email for testing", // plain text body
//     // html: "<b>Hello world?</b>", // html body
//     });
//     console.log("message has sent ",info.messageId);
//     console.log(nodemailer.getTestMessageUrl(info));
//     res.json(info);
// }
