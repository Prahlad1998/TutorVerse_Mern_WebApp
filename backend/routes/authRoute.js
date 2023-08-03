const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  loginUser,
  userdetails,
  admindetails,
} = require("../controller/authCotroller");
const {
  registerTuor,
  verifyEmailOTP,
  findmatchedtuitions,
  registerTutorbyadmin,
  updatetutorprofile,
} = require("../controller/tutorController");
const {
  registerUser,
  verifyStudentOtp,
  findmatchedtutors,
  searchedtutorsmanually,
  updatprofile,
  registerUserbyadmin,
  deleteUser,
} = require("../controller/userController");
const {
  createPost,
  postdetails,
  updatepost,
  deletePost,
} = require("../controller/postController");
const {
  adminlogin,
  createAdmin,
  getallusers,
  getalltutors,
  getallposts,
  getallCity,
  getallSub,
  getallStand,
} = require("../controller/admincontroller");
const { sendOTPtomail } = require("../email/sendEmail");
const {
  sendOTPmiddleware,
  sendOTPmiddlewareStudent,
} = require("../middleware/sendEmailMiddleware");
const otpverify = require("../helpers/verifyOTP");
const {
  createCity,
  deleteCity,
} = require("../controller/Modify/cityController");
const {
  createSub,
  deleteSub,
} = require("../controller/Modify/subjecController");
const { createStand, deleteStand } = require("../controller/Modify/standardController");

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
//get request

router.get("/", sendOTPmiddleware, test);
router.post("/otp", sendOTPmiddleware);
//post request

//Tutor Route
router.post("/registertutor", sendOTPmiddleware, registerTuor);
router.post("/otpverify", verifyEmailOTP);
router.post("/sendotp", sendOTPtomail);
router.post("/matchedtuitions", findmatchedtuitions);

// Student Route
router.post("/registerUser", sendOTPmiddlewareStudent, registerUser);
router.post("/studentotpverify", verifyStudentOtp);
router.post("/createpost", createPost);
router.post("/postdetails", postdetails);
router.post("/matchedtutors", findmatchedtutors);
router.post("/searchedtutorsmanually", searchedtutorsmanually);
//Student Patch
router.put("/updateaccount", updatprofile);
//Post patch
router.put("/updatepost", updatepost);

//Route for Tutor and Student
router.post("/login", loginUser);
router.post("/userdetails", userdetails);

//Router for admin
//post
router.post("/adminlogin", adminlogin);
router.post("/createadmin", createAdmin);
router.post("/admindetails", admindetails);

router.post("/createnewstudent", registerUserbyadmin);
router.post("/createnewtutor", registerTutorbyadmin);
router.post("/createCity", createCity);
router.post("/createSub", createSub);
router.post("/createStand", createStand);
//get
router.get("/getallusers", getallusers);
router.get("/getalltutors", getalltutors);
router.get("/getallposts", getallposts);
router.get("/getallCities", getallCity);
router.get("/getAllSubjects",getallSub);
router.get("/getAllStandards",getallStand);

//Update
router.put("/updatetutoraccount", updatetutorprofile);

//action by id
router.delete("/users/:id", deleteUser);
router.delete("/post/:id", deletePost);
router.delete("/city/:id", deleteCity);
router.delete("/sub/:id", deleteSub);
router.delete("/stand/:id", deleteStand);

router.all("*", (req, res, next) => {
  res.json({
    status:'fail',
    message:'not a valid Path'
  })
  next();
});
module.exports = router;
