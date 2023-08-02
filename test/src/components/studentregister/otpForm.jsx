import React from "react";
import { Button, TextField,Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Timer from "./Timer";


const OtpForm = ({ data, setData,setIsOtp }) => {
  
  const [wrongOtp,setWrongOtp]=useState(false);
  const navigate = useNavigate();
  const handleOtpVerify = async() => {
    if (!data.otp || data.otp.length < 4 || data.otp.length > 4) {
      return toast.error("Otp Should be 6 length charcter");
    }
    let {email,otp}=data;
    try {
      const responds = await axios.post("/studentotpverify", {
        email,
        otp,
      });
      console.log(responds);
      if (!(responds.data.status === "success")) {
        data.otp="";
        toast.error(responds.data.message);
        setWrongOtp(true);
        console.log(data);
      } else {
        toast.success(responds.data.message);
        setData({});
        navigate("/login");
      }
      
    } catch (error) {
      toast.error("Verifiaction Failed !")
    }
    console.log(data);
  };

  const resendOtp=async(e)=>{
    e.preventDefault();
    const {
      name,
      email,
      password,
      contactno,
      gender,
      school,
      medium,
      board,
      standard,
      stream,
      locality,
      pin,
      address,
    } = data;
    console.log(data);
    try {
      const responds = await axios.post("/registerUser", {
        name,
        email,
        password,
        contactno,
        gender,
        school,
        medium,
        board,
        standard,
        stream,
        locality,
        pin,
        address,
      });

      console.log(responds);
      if (!(responds.data.status === "success")) {
        toast.error("Something wrong ,OTP could not be sent");
      } else {
        toast.success(responds.data.message);
        setWrongOtp(false);
        console.log(data);
      }
  }catch(error){
    console.log(error);
      toast.error("Resend failed");

  }
}
  return (
    <div style={{ width: "100%", margin: 10, gridColumn: "2/3" }}>
      <p style={{ margin: 5 }}>Verification</p>
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
        <span>Please verify your email.Enter the OTP below</span>
        <div>
          <TextField
            style={{
              width: "60%",
              margin: "10px",
            }}
            size="small"
            id="outlined-basic"
            label="OTP"
            variant="outlined"
            value={data.otp}
            onChange={(e) => setData({ ...data, otp: e.target.value })}
          />
          
          {
            wrongOtp?"":<><Button
            style={{
              width: "20%",
              margin: 20,
              background: "#116D6E",
            }}
            variant="contained"
            size="small"
            type="submit"
            onClick={handleOtpVerify}
          >
          Verify Email & Submit
          </Button>
          <Timer setWrongOtp={setWrongOtp} data={data} setData={setData} setIsOtp={setIsOtp}/></>
          }
          {
            wrongOtp?<><Button  style={{
              color:'red',
              width: "20%",
              margin: 20,
            }}
            variant="outlined"
            size="small"
            type="submit"
            onClick={resendOtp}>Resend</Button>
            <Typography variant="subtitle1" style={{color:'red'}}>Resend Again</Typography></>
            :""
          }

        </div>
      </div>
    </div>
  );
};

export default OtpForm;
