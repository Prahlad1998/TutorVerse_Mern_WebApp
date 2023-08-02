
const otpverify=async(req,res)=>{
    const {otp}=req.body;
    console.log(req.body);
    console.log(process.env.OTP);
    if(otp===process.env.OTP){
        console.log('otp veryfied')
        res.json({
            status:'ok',
            message:'OTP verified'
        })
    }else{
        console.log('Otp not veryfied');
        res.json({
            status:'fail',
            message:'OTP in not matching'
        })
    }
}
module.exports=otpverify;
