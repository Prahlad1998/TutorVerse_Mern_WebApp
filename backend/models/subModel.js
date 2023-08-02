const mongoose =require('mongoose');

const {Schema}=mongoose;

const subSchema = new Schema({
name:{
    type:String,
},
createdAt:{
    type:Date,
    default:Date.now,
}
})
const SubModel=mongoose.model('Sub',subSchema);
module.exports=SubModel;