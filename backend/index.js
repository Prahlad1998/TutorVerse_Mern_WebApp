const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const {mongoose}=require('mongoose');

const app=express();
app.use(express.json());

//db connection
dotenv.config({ path: './.env'});

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("db connected successfully")).catch((err)=>console.log("DB is not connected!!!!",err))


//middleware
app.use((req,res,next)=>{
    console.log("Hello from middleware");
    next();
})
app.use('/', require('./routes/authRoute'))


const port=5383;
app.listen(port,()=>{
    console.log(`App is running at ${port}`);
});