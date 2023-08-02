import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Timer = ({setWrongOtp,data,setData,}) => {
    const [seconds,setSeconds]=useState(59);
    const resendOtpAfterTimeExpires=async()=>{
        let {email}=data;
        try {
            const responds= await axios.post("/studentotpverify",{
                email,
                otp:null
            });
            console.log(responds);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        let timer=seconds>0 && setInterval(()=>setSeconds(seconds-1),1000); 
        return ()=>clearInterval(timer);
       },[seconds]);
       if(seconds===0){

        setWrongOtp(true);
        resendOtpAfterTimeExpires();
       }
       

  return (
    <>
    <br />
    <Typography variant="p">
    OTP will expires..
    </Typography >
    <Typography variant="h6">00:{seconds<10?`0${seconds}`:seconds}</Typography>
    </>
  )
}

export default Timer;