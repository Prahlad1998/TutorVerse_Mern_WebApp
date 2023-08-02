const User = require("../models/user");
const Tutor = require("../models/tutor");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  let OTP = req.otp;
  try {
    let {
      name,
      email,
      password,
      contactno,
      gender,
      school,
      medium,
      board,
      standard,
      stream,
      locality,
      pin,
      address,
      otp,
      city,
      createdAt
    } = req.body;
    otp = OTP;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
      contactno,
      gender,
      school,
      medium,
      board,
      standard,
      stream,
      locality,
      pin,
      address,
      otp,
      city,
      createdAt
    });
    console.log(user);
  } catch (error) {
    console.log("Something not right", error);
  }
};

const registerUserbyadmin = async (req, res) => {
  try {
    let {
      name,
      email,
      password,
      contactno,
      gender,
      school,
      medium,
      board,
      standard,
      stream,
      locality,
      pin,
      address,
      otp,
      city,
      createdAt,
      createdBy
    } = req.body;
    const existStudent = await User.findOne({ email });
    console.log(existStudent);
    if (existStudent)
      return res.json({
        status:"fail",
        message: "The Email is Taken,try with different one",
      });
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
      contactno,
      gender,
      school,
      medium,
      board,
      standard,
      stream,
      locality,
      pin,
      address,
      otp,
      city,
      createdAt,
      createdBy
    });
    console.log(user);
    res.json({
      status:'ok',
      message:'New student added sucessfully!',
      data:user
    })
  } catch (error) {
    console.log("Something not right", error);
    res.json({
      status:'fail',
      message:'Fail due to server problem'
    })
  }
};

const verifyStudentOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log(otp);
    let NumberOtp = Number(otp);

    const UserToVerify = await User.findOne({
      email,
      otp: NumberOtp,
    });
    if (!UserToVerify) {
      await User.deleteOne({ email });
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
const findmatchedtutors = async (req, res) => {
  const { locality, subjects } = req.body;
  console.log(locality);
  console.log(subjects);
  try {
    const matchedtutors = await Tutor.find({
      locality: locality,
      subjects: { $in: subjects },
    });
    if (matchedtutors) {
      res.json({
        status: "ok",
        message: "Some Tutors are depends upon the required field",
        data: matchedtutors,
      });
    } else {
      res.json({
        status: "fail",
        message: "No Tutors Found",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: "Something not right finding the Tutors",
    });
  }
};
const searchedtutorsmanually = async (req, res) => {
  const { city, subjects } = req.body;
  console.log(req.body);
  try {
    const matchedtutors = await Tutor.find({
      city: city,
      subjects: subjects,
    });
    console.log(matchedtutors);
    if (matchedtutors) {
      res.json({
        status: "ok",
        message: "Tutors searched successfully",
        data: matchedtutors,
      });
    } else {
      res.json({
        status: "fail",
        message: "No Tutors details are found",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: "Something not right finding the Tutors",
    });
  }
};
const updatprofile = async (req, res) => {
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
    const result = await User.updateOne(
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
};
const deleteUser= async(req,res)=>{
  console.log(req.params.id);
  try {
    // console.log()
    const user= await User.findByIdAndDelete(req.params.id);
    console.log(user);
    if(!user){
      console.log("Not deleted");
      return res.json({
        status:'fail',
        message:'Sorry,can not Delete the user'
      })
    }
    console.log("Deletd successfully");
    res.json({
      status:'ok',
      message:'User deleted successfully'
    })
    
  } catch (error) {
    console.log(error);
    res.json({
      status:'fail',
      message:'Internal Error'
    })
  }
}

module.exports = {
  registerUser,
  registerUserbyadmin,
  verifyStudentOtp,
  findmatchedtutors,
  searchedtutorsmanually,
  updatprofile,
  deleteUser
};
