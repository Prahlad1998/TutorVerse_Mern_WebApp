import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import FirstStep from "../components/Forms/firstStep";
import SecondStep from "../components/Forms/secondStep";
import ThirdStep from "../components/Forms/thirdStep";
import FourthOTP from "../components/Forms/fourthOTP";
import { toast } from "react-hot-toast";
import axios from "axios";
import TimerTutor from "./TimerOtp";
import Navbar from "../components/Navbar";

const Tutor = () => {
  const navigate = useNavigate();
  const [otpverify, setOtpverify] = useState(true);
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    contactno: "",
    gender: "",
    highestqualification: "",
    subjects: "",
    preflanguages: "",
    prefmode: "",
    city: "",
    locality: "",
    pin: "",
    address: "",
    isokfirst: false,
    isoksecond: false,
    isokthird: false,
    isokfourth: false,
    otp: "",
    verified: false,
  });
  const showSteps = () => {
    switch (step) {
      case 1:
        return <FirstStep data={data} setData={setData} />;
      case 2:
        return <SecondStep data={data} setData={setData} />;
      case 3:
        return <ThirdStep data={data} setData={setData} />;
      case 4:
        return <FourthOTP data={data} setData={setData} />;

      default:
        break;
    }
  };
  const handleSubmit = async () => {
    if (step === 1) {
      if (data.name === "" || data.name.length < 1) {
        toast.error("You must have a name");
      } else if (
        data.email === "" ||
        data.password === "" ||
        data.contactno === ""
      ) {
        toast.error(
          "You must have a valid Email, Password and a valid contact number"
        );
      } else if (!(data.password === data.confirmpassword)) {
        toast.error("ConfirmPassword should be match with Password");
      } else {
        setStep(step + 1);
        data.isokfirst = true;
        console.log(data);
      }
    } else if (step === 2) {
      if (
        !data.highestqualification ||
        !data.preflanguages ||
        !data.prefmode ||
        !data.subjects
      ) {
        toast.error("You must have to fill the required details");
      } else {
        data.isoksecond = true;
        setStep(step + 1);
        console.log(data);
      }
    } else if (step === 3) {
      if (data.city === "" || data.address === "" || data.locality === "") {
        toast.error("You must have to fill the required details");
      } else {
        data.isokthird = true;

        const {
          name,
          email,
          password,
          confirmpassword,
          contactno,
          gender,
          highestqualification,
          subjects,
          preflanguages,
          prefmode,
          city,
          locality,
          pin,
          address,
          otp,
          verified,
        } = data;

        // const userEmail=data.email;
        // call the otp creation function
        try {
          const responds = await axios.post("/registertutor", {
            name,
            email,
            password,
            confirmpassword,
            contactno,
            gender,
            highestqualification,
            subjects,
            preflanguages,
            prefmode,
            city,
            locality,
            pin,
            address,
            otp,
            verified,
          });
          console.log(responds);
          if (!(responds.data.status === "success")) {
            toast.error(responds.data.message);
          } else {
            toast.success(responds.data.message);
            setStep(step + 1);
            console.log(data);
          }
        } catch (err) {
          setStep(step);
          toast.error(err.message);
          console.log("Something Error !", err);
        }
      }
    } else if (step === 4) {
      if (data.otp === "") {
        toast.error("Please enter the OTP");
      } else {
        let { email, otp } = data;
        try {
          const responds = await axios.post("/otpverify", {
            email,
            otp,
          });
          console.log(responds);
          console.log(responds.data.status);
          if (!(responds.data.status === "success")) {
            data.otp="";
            toast.error(responds.data.message);
            setOtpverify(false);
            console.log(data);
            setStep(4);
          } else {
            toast.success(responds.data.message);
            setData({});
            navigate("/login");
          }
        } catch (error) {
          toast.error("Verifiaction Failed !");
        }
      }
    }
  };
  const resendOtp = async () => {
    try {
      const {
        name,
        email,
        password,
        confirmpassword,
        contactno,
        gender,
        highestqualification,
        subjects,
        preflanguages,
        prefmode,
        city,
        locality,
        pin,
        address,
        otp,
        verified,
      } = data;
      const responds = await axios.post("/registertutor", {
        name,
        email,
        password,
        confirmpassword,
        contactno,
        gender,
        highestqualification,
        subjects,
        preflanguages,
        prefmode,
        city,
        locality,
        pin,
        address,
        otp,
        verified,
      });

      console.log(responds);
      if (!(responds.data.status === "success")) {
        toast.error("Something wrong ,OTP could not be sent");
      } else {
        toast.success(responds.data.message);
        setStep(4);
        setOtpverify(true);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Resend failed");
    }
  };

  const stepperTitle = [
    "Personal Information",
    "Qualifiction",
    "Address",
    "Verification",
  ];
  return (
    <>
     <Navbar/>
      <Box
        sx={{
          border: "solid 1px black",
          display: "flex",
          flexDirection: "column",
          margin: 10,
        }}
      >
        <Stepper
          alternativeLabel
          orientation="horizental"
          activeStep={step - 1}
          style={{
            margin: 30,
          }}
        >
          {stepperTitle.map((e) => (
            <Step>
              <StepLabel>{e}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {showSteps(step)}
        <div>
          {step > 1 && step < 4 && (
            <Button
              variant="outlined"
              style={{
                width: "10%",
                margin: 10,
              }}
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
          )}

          {/* the next and Save Button */}
          {otpverify && (
            <>
           
            <Button
              variant="contained"
              style={{
                width: "10%",
                margin: 10,
              }}
              onClick={handleSubmit}
            >
              {step === 1 || step === 2 || step === 3 ? "Next" : "Submit"}
            </Button>
          {step===4? <TimerTutor setOtpverify={setOtpverify} data={data} setData={setData} />:''}
            </>
          )}

          {/* the Resend Button */}

          {!otpverify && (
          <>
          <p style={{
            margin:10,
            color:'red'
          }}>Wrong otp, Resend Again </p>
          <br/>
          <Button
              variant="outlined"
              style={{
                width: "10%",
                margin: 10,
              }}
              onClick={resendOtp}
            >
              Resend OTP
            </Button>
          </>
            
          )}
        </div>
      </Box>
    </>
  );
};

export default Tutor;
