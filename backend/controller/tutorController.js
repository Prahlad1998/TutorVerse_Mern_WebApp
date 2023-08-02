const Tutor = require("../models/tutor");
const Post = require("../models/tuitionspost");
const bcrypt = require("bcryptjs");
const { hashPassword, comparePassword } = require("../helpers/auth");
const { sendMail } = require("../email/sendEmail");

const registerTuor = async (req, res) => {
  try {
    let OTP = req.otp;
    console.log(OTP);
    let {
      name,
      email,
      password,
      contactno,
      gender,
      highestqualification,
      subjects,
      preflanguages,
      prefmode,
      city,
      locality,
      pin,
      address,
      otp,
    } = req.body;
    otp = OTP;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const tutor = await Tutor.create({
      name,
      email,
      password: encryptedPassword,

      contactno,
      gender,
      highestqualification,
      subjects,
      preflanguages,
      prefmode,
      city,
      locality,
      pin,
      address,
      otp,
    });
    console.log(tutor);
  } catch (error) {
    console.log("Something Error", error);
  }
};

const verifyEmailOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log(otp);
    let numberOtp = Number(otp);
    console.log(email, "\n", numberOtp);

    const tutorToVerify = await Tutor.findOne({
      email,
      otp: numberOtp,
    });
    if (!tutorToVerify) {
      await Tutor.deleteOne({ email });
      return res.json({
        status: "fail",
        message: "Invalid OTP,Resend and try Again",
      });
    } else
      return res.json({
        status: "success",
        message: "Registration Successful!",
      });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "fail",
      message: "Something wrong ,can not proceed for OTP verification",
      body: error,
    });
  }
};
const findmatchedtuitions = async (req, res) => {
  const { city, subjects } = req.body;
  console.log(city,subjects);
  try {
    if (city === "" || subjects === "") {
      return res.json({
        status: "fail",
        message: "Empty required data",
      });
    }
  
    const posts = await Post.find({ city, subject:subjects});
    if (posts) {
      res.json({
        status: "ok",
        message: "Tuition post are gathered successsfully",
        tuitions: posts,
      });
    }else{
      res.json({
        statsu:'fail',
        message:'No matching result found'
      })
   
    }
  }catch(error){
    res.json({
      status:'fail',
      message:'Internal Error happen'
    })
  }
};
const registerTutorbyadmin=async(req,res)=>{
  try {
    let {
      name,
      email,
      password,
      confirmpassword,
      contactno,
      gender,
      highestqualification,
      subjects,
      preflanguages,
      prefmode,
      city,
      locality,
      pin,
      address,
      otp,
      verified,
      createdBy,
    } = req.body;
    const existTutor = await Tutor.findOne({ email });
    console.log(existTutor);
    if (existTutor)
      return res.json({
        status:"fail",
        message: "The Email is Taken,try with different one",
      });
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await Tutor.create({
      name,
      email,
      password:encryptedPassword,
      confirmpassword,
      contactno,
      gender,
      highestqualification,
      subjects,
      preflanguages,
      prefmode,
      city,
      locality,
      pin,
      address,
      otp,
      verified,
      createdBy,
    });
    console.log(user);
    res.json({
      status:'ok',
      message:'New student added sucessfully!'
    })
  } catch (error) {
    console.log("Something not right", error);
    res.json({
      status:'fail',
      message:'Fail due to server problem'
    })
  }
};
const updatetutorprofile=async(req,res)=>{
  console.log(req.body);
  const {
    id,
    name,
    email,
    contactno,
    school,
    gender,
    medium,
    board,
    standard,
    stream,
    city,
    locality,
    address,
    pin,
  } = req.body;

  try {
    const result = await Tutor.updateOne(
      { _id: id },
      {
       name,
      email,
      contactno,
      school,
      gender,
      medium,
      board,
      standard,
      stream,
      city,
      locality,
      address,
      pin,
      }
    );
    if (result) {
      res.json({
        status: "ok",
        message: "Profile has been updated successfully",
      });
    } else {
      res.json({
        status: "fail",
        message: "Profile can not been updated",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status:'error',
      message:'error'
    })
  }

}

module.exports = {
  registerTuor,
  verifyEmailOTP,
  findmatchedtuitions,
  registerTutorbyadmin,
  updatetutorprofile
};
