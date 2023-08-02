const Admin = require("../models/admin");
const User = require("../models/user");
const Post = require("../models/tuitionspost");
const Tutor = require("../models/tutor");
const City = require("../models/cityModel");
const Sub = require("../models/subModel");
const Stand=require('../models/standModel');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "THE_ROCKET_IS_A_UGLIEST_DOG_IN_THIS_MILKYWAY";

const createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    if (username === "" || password === "") {
      return res.json({
        status: "fail",
        message: "Empty Credential",
      });
    }
    const exist = await Admin.findOne({ username });
    console.log(exist);
    if (exist) {
      return res.json({
        status: "fail",
        message: "Try With different username",
      });
    }
    const admin = await Admin.create({ username, password });
    return res.json({
      status: "ok",
      message: "Admin crearted successfully",
      admin,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "error",
      message: "Internal Error happen ",
    });
  }
};

const adminlogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === "" || password === "") {
      return res.json({
        status: "fail",
        message: "Empty credential",
      });
    }
    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return res.json({
        status: "fail",
        message: "Wrong credentials",
      });
    } else {
      const token = jwt.sign({ username: admin.username }, JWT_SECRET);
      console.log(token, "Admin Token ");

      return res.json({
        status: "ok",
        token: token,
        message: "Admin logged in successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      status: "fail",
      message: "Server error",
      error,
    });
  }
};
const getallusers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    if (users) {
      res.json({
        status: "ok",
        message: "users collected successfully",
        users,
      });
    } else {
      res.json({
        status: "fail",
        message: "Not collected",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

const getalltutors = async (req, res) => {
  try {
    const tutors = await Tutor.find().sort({ createdAt: -1 });
    if (tutors) {
      res.json({
        status: "ok",
        message: "users collected successfully",
        tutors,
      });
    } else {
      res.json({
        status: "fail",
        message: "Not collected",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

const getallposts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    if (posts) {
      res.json({
        status: "ok",
        message: "users collected successfully",
        posts,
      });
    } else {
      res.json({
        status: "fail",
        message: "Not collected",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
const getallCity = async (req, res) => {
  try {
    const cities = await City.find();

    if (cities) {
      res.json({
        status: "ok",
        message: "Cities collected successfully",
        cities,
      });
    } else {
      res.json({
        status: "fail",
        message: "Not collected",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
const getallSub = async (req, res) => {
  try {
    const subjects = await Sub.find();
    console.log(subjects);
    if (subjects) {
      res.json({
        status: "ok",
        message: "Subjects collected successfully",
        subjects,
      });
    } else {
      res.json({
        status: "fail",
        message: "Not collected",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
const getallStand = async (req, res) => {
    try {
      const standards = await Stand.find();
      console.log(standards);
      if (standards) {
        res.json({
          status: "ok",
          message: "standards collected successfully",
          standards,
        });
      } else {
        res.json({
          status: "fail",
          message: "Not collected",
        });
      }
    } catch (error) {
      res.json({
        message: error,
      });
    }
  };
module.exports = {
  adminlogin,
  createAdmin,
  getallusers,
  getalltutors,
  getallposts,
  getallCity,
  getallSub,
  getallStand
};
