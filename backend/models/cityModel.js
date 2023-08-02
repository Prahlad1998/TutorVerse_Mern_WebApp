const mongoose =require('mongoose');

const {Schema}=mongoose;

const citySchema = new Schema({
name:{
    type:String,
},
createdAt:{
    type:Date,
    default:Date.now,
}
})
const CityModel=mongoose.model('City',citySchema);
module.exports=CityModel;