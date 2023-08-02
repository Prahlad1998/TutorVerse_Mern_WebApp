const mongoose =require('mongoose');

const {Schema}=mongoose;

const standSchema = new Schema({
name:{
    type:String,
},
createdAt:{
    type:Date,
    default:Date.now,
}
})
const StandModel=mongoose.model('Stand',standSchema);
module.exports=StandModel;