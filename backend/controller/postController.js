const Post = require("../models/tuitionspost");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "THE_ROCKET_IS_A_UGLIEST_DOG_IN_THIS_MILKYWAY";

const createPost = async (req, res) => {
  try {
    const {
      subject,
      standard,
      prefmode,
      preflang,
      email,
      contactno,
      postid,
      name,
      city,
      verified,
      createdAt,
      preftime,
      gender,
      createdBy,
    } = req.body;
    const post = await Post.create({
      subject,
      city,
      standard,
      prefmode,
      preflang,
      email,
      contactno,
      postid,
      name,
      verified,
      createdAt,
      preftime,
      gender,
      createdBy,
    });
    console.log("post created", post);
    res.json({
      status: "ok",
      message: "Post Created successfully",
      post,
    });
  } catch (error) {
    console.log("Something Error", error);
    res.json({
      status: "fail",
      message: "Can not create the post due to internal reason",
    });
  }
};

const postdetails = async (req, res) => {
  const { token } = req.body;
  console.log(token);
  try {
    if (token === null) {
      console.log("No token");
      return res.json({
        status: "fail",
        message: "no token",
      });
    }
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;
    const role = user.role;
    if (role === "tutor" || !user) {
      return res.json({
        status: "fail",
        message: "No Correct role found",
      });
    }

    const posts = await Post.find({ email: useremail });
    if (posts === null) {
      return res.json({
        status: "empty",
        message: "No Posts availabe",
      });
    } else {
      return res.json({
        status: "ok",
        message: "Collect successfully",
        posts,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
    });
  }
};
const updatepost = async (req, res) => {
  console.log(req.body);
  const {
    id,
    subject,
    city,
    standard,
    prefmode,
    email,
    contactno,
    name,
    preftime,
    gender,
    verified,
  } = req.body;

  try {
    const result = await Post.updateOne(
      { _id: id },
      {
        subject,
        city,
        standard,
        prefmode,
        email,
        contactno,
        name,
        preftime,
        gender,
        verified,
      }
    );
    if (result) {
      res.json({
        status: "ok",
        message: "Post has been updated successfully",
      });
    } else {
      res.json({
        status: "fail",
        message: "Post can not been updated",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: "error",
    });
  }
};
const deletePost= async(req,res)=>{
  console.log(req.params.id);
  try {
    // console.log()
    const postToDelete= await Post.findByIdAndDelete(req.params.id);
    console.log(postToDelete);
    if(!postToDelete){
      console.log("Not deleted");
      return res.json({
        status:'fail',
        message:'Sorry,can not Delete the user'
      })
    }
    console.log("Deletd successfully");
    res.json({
      status:'ok',
      message:'Post deleted successfully'
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
  createPost,
  postdetails,
  updatepost,
  deletePost
};
