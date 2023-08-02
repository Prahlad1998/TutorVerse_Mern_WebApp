const mongoose =require('mongoose');

const {Schema}=mongoose;

const adminSchema = new Schema({
   role:{
      type:String,
      default:'admin'
   },
     username:{
        type:String,
       unique:true,
     },
     password:{
        type:String,
     },
})

const AdminModel=mongoose.model('Admin',adminSchema);
module.exports=AdminModel;

