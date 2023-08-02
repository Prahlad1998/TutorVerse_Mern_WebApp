const Student = require("../models/user");
const Tutor = require("../models/tutor");
const Admin =require("../models/admin");
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");
const JWT_SECRET="THE_ROCKET_IS_A_UGLIEST_DOG_IN_THIS_MILKYWAY";
const { hashPassword, comparePassword } = require("../helpers/auth");

const test = (req, res) => {
  const otp = req.otp;
  res.json({
    message: "test is working",
    otp,
  });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //if there is name or not
    if (!name) {
      return res.json({
        error: "Must have a name!",
      });
    }
    //check if password is good
    if (!password || password < 6) {
      return res.json({
        error: "Password is required with minimum 6 chaaracter",
      });
    }
    //check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already!",
      });
    }

    const hashpassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashpassword,
    });

    return res.json(user);
  } catch (error) {
    console.log("Something not right", error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { role, email, password } = req.body;
    let User;
    switch (role) {
      case "student":
        User = Student;
        break;
      case "tutor":
        User = Tutor;
        break;
      default:
        break;
    };
    //check if user exist
    const user = await User.findOne({ email }).select('+password');
   
    if (!user) {
      return res.json({
        status:"fail",
        message:"NO User exist with this email"
      });
    }
    const match = await bcrypt.compare(password, user.password);
  
    if (match) {
      const token=jwt.sign({email:user.email,
      role:user.role},JWT_SECRET);
    
      res.json({
        status:"ok",
        token,
        message:"Login Successful"
      });
      console.log(token,  "Login Succesfull");
    } else {
      return res.json({
        status:"fail",
        message:"Wrong Password,Please type correct password"
      });
    }
  } catch (error) {
    console.log("something not wrong", error);
    res.json({
      status:'error',
      message:error,
    })
  }
};

const userdetails=async(req,res)=>{
  const {token}=req.body;
  
  try {
    if (token===null){
      console.log("No token")
      return res.json({
        status:'fail',
        message:'no token'
      })
    }
    const user=jwt.verify(token,JWT_SECRET);
    console.log(user);
    const usermail=user.email;
    const role=user.role;
    let User;
    if(role==='tutor'){
      User=Tutor;
    }else{
      User=Student;
    }
    const existuser= await User.findOne({email:usermail}).sort({ createdAt: -1 });;
    if(existuser){
      res.json({
        status:'ok',
        data:existuser
      })
    }else{
      res.json({
        status:'fail',
        message:'Token verification failed'
      })
    }
  } catch (error) {
    console.log("Something not right finding the usedetails",error);
    res.json({
      staus:'error',
      message:"Something not right finding the usedetails"
    })
  }
};
const admindetails=async(req,res)=>{
  const {token}=req.body;
  
  try {
    if (token===null){
      console.log("No token")
      return res.json({
        status:'fail',
        message:'no token'
      })
    }
    const admin=jwt.verify(token,JWT_SECRET);
    console.log(admin);
    const username=admin.username;
    const existadmin= await Admin.findOne({username:username});
    if(existadmin){
      res.json({
        status:'ok',
        admin:existadmin
      })
    }else{
      res.json({
        status:'fail',
        message:'Token verification failed'
      })
    }
  } catch (error) {
    console.log("Something not right finding the usedetails",error);
    res.json({
      staus:'error',
      message:"Something not right finding the usedetails"
    })
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  userdetails,
  admindetails
};
