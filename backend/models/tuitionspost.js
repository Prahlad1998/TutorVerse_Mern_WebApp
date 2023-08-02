const mongoose =require('mongoose');

const {Schema}=mongoose;

const postSchema = new Schema({
   subject:{
    type:String,
    required:true
   },
   city:{
      type:String
   },
   standard:{
    type:String,
    required:true
   },
   prefmode:{
    type:String
   },
   preflang:{
    type:String
   },
   email:{
    type:String
   },
   contactno:{
    type:String
   },
   postid:{
    type:String
   },
   name:{
    type:String
   },
   createdAt:{
    type:Date,
    default:Date.now
   },
   preftime:{
    type:String
   },
   verified:{
    type:Boolean,
    default:false,
   },
   gender:{
      type:String
   },
   createdBy:{
      type:String,
      default:'byuser'
     }
})
const PostModel=mongoose.model('Post',postSchema);
module.exports=PostModel;