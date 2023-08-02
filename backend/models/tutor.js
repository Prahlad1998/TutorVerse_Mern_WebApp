const mongoose =require('mongoose');
const validator=require('validator');
const bcrypt = require('bcryptjs');
const { default: isEmail } = require('validator/lib/isEmail');
const {Schema}=mongoose;


const tutorSchema = new Schema({
     name:{
        type:String,
        required:[true,"You must have a Name"],
        maxlength:[40,'A name must have not greater than 4characters'],
        minlength:[2,'A name must have more than 2 character']

     },
     email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please provide a valid Email'],
     },
     role:{
      type:String,
      enum:['admin','tutor','student','stuff'],
      default:'tutor'
     },
     password:{
        type:String,
        required:[true,'Password is required'],
        minlength:[6,'Password should greater than 6 characters'],
        select:false,
     },
   //   confirmpassword:{
   //    type:String,
   //    required:[true,'Please confirm your Password'],
   //    validate:{
   //       validator:function(el){
   //          return el===this.password
   //       },
   //       message:'Confirm password is not same with the password'
   //      }
   //   },

     contactno:{
      type:Number
     },
     gender:{
      type:String
     },
     highestqualification:{
      type:String,
     },
     subjects:{
      type:String
     },
     preflanguages:{
      type:String
     },
     prefmode:{
      type:String
     },
     city:{
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
     createdAt:{
      type:Date,
      default:Date.now
     },
     createdBy:{
      type:String,
      default:'bytutor'
     }
})

const TutorModel=mongoose.model('Tutor',tutorSchema);
module.exports=TutorModel;
