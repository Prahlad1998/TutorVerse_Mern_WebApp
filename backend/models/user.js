const mongoose =require('mongoose');

const {Schema}=mongoose;

const userSchema = new Schema({
   role:{
      type:String,
      default:'student'
   },
     name:{
        type:String,
       
     },
     email:{
        type:String,
        unique:true
     },
     password:{
        type:String
     },
     confirmpassword:{
      type:String,
     },
     contactno:{
      type:Number
     },
     gender:{
      type:String
     },
     school:{
      type:String,
     },
     medium:{
      type:String
     },
     board:{
      type:String
     },
     standard:{
      type:String
     },
     stream:{
      type:String
     },
     locality:{
      type:String
     },
     pin:{
      type:String
     },
     address:{
      type:String
     },
     otp:{
      type:Number,
     },
     verified:{
      type:Boolean,
      default:false,
     },
     city:{
      type:String
     },
     createdAt:{
      type:Date,
      default:Date.now
     },
     createdBy:{
      type:String,
      default:'byuser'
     }

})

const UserModel=mongoose.model('User',userSchema);
module.exports=UserModel;

