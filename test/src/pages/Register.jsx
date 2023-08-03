import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import {
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  // Stepper,
  // Step,
  // StepContent,
  // StepLabel,
  // Typography,
  // Box,
} from "@mui/material";
import OtpForm from "../components/studentregister/otpForm";
import Navbar from "../components/Navbar";

const Register = () => {

  const [isOtp, setIsOtp] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    contactno: "",
    gender: "",
    school: "",
    medium: "",
    board: "",
    standard: "",
    stream: "",
    locality: "",
    pin: "",
    address: "",
    otp: "",
    city:""
  });

  const registerUser = async (e) => {
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
      city,
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
        city
      });
      console.log(responds);
      if (!(responds.data.status === "success")) {
        toast.error(responds.data.message);
      } else {
        setIsOtp(true);
        console.log(isOtp);
        toast.success(responds.data.message);
        console.log(data);
      }
    } catch (err) {
      toast.error(err.message);
      console.log("Something Error !", err);
    }
  };
  const City = [
    "Guwahati",
    "Kaziranga",
    "Bokakhat",
    "Kaliabor",
    "Tezpur",
  ];
  return (
    <>
     <Navbar/>
      <h4>Register as Student</h4>
      <form
        onSubmit={registerUser}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        <div style={{ width: "90%", margin: 10 }}>
          <p style={{ margin: 5 }}>Personal details</p>
          <div
            style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
          >
            <TextField
              style={{
                margin: "10px",
              }}
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />

            <TextField
              style={{
                margin: "10px",
              }}
              required
              size="small"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <TextField
              style={{
                margin: "10px",
              }}
              size="small"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <TextField
              style={{
                margin: "10px",
              }}
              size="small"
              id="outlined-basic"
              label="Contact No"
              variant="outlined"
              value={data.contactno}
              onChange={(e) => setData({ ...data, contactno: e.target.value })}
            />

            <FormControl>
              <InputLabel
                id="demo-simple-select-standard-label"
                size="small"
                style={{
                  margin: "10px",
                }}
              >
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                size="small"
                label="Gender"
                onChange={(e) => {
                  setData({ ...data, gender: e.target.value });
                }}
                value={data.gender}
                style={{
                  color: "blue",
                  margin: 10,
                }}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div style={{ width: "90%", margin: 10 }}>
          <p style={{ margin: 5 }}>Academic Details</p>
          <div
            style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}
          >
            <TextField
              style={{
                margin: "10px",
              }}
              size="small"
              id="outlined-basic"
              label="School"
              variant="outlined"
              value={data.school}
              onChange={(e) => setData({ ...data, school: e.target.value })}
            />

            <div style={{ display: "flex", width: "100%" }}>
              <FormControl style={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Medium
                </InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  size="small"
                  onChange={(e) => {
                    setData({ ...data, medium: e.target.value });
                  }}
                  value={data.medium}
                  style={{
                    margin: 10,
                  }}
                >
                  <MenuItem value={"assamese"}>Assamese</MenuItem>
                  <MenuItem value={"english"}>English</MenuItem>
                  <MenuItem value={"hindi"}>Hindi</MenuItem>
                </Select>
              </FormControl>

              <FormControl style={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Board
                </InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-standard-label"
                  size="small"
                  id="demo-simple-select-standard"
                  onChange={(e) => {
                    setData({ ...data, board: e.target.value });
                  }}
                  value={data.board}
                  style={{
                    margin: 10,
                  }}
                >
                  <MenuItem value={"seba"}>SEBA</MenuItem>
                  <MenuItem value={"ahsec"}>AHSEC</MenuItem>
                  <MenuItem value={"cbse"}>CBSE</MenuItem>
                  <MenuItem value={"icse"}>ICSE</MenuItem>
                  <MenuItem value={"others"}>OTHERS</MenuItem>
                </Select>
              </FormControl>
            </div>

            <TextField
              style={{
                margin: "10px",
              }}
              size="small"
              id="outlined-basic"
              label="Standard"
              variant="outlined"
              value={data.standard}
              onChange={(e) => setData({ ...data, standard: e.target.value })}
            />
            <TextField
              style={{
                margin: "10px",
              }}
              size="small"
              id="outlined-basic"
              label="Stream"
              variant="outlined"
              value={data.stream}
              onChange={(e) => setData({ ...data, stream: e.target.value })}
            />
          </div>
        </div>
        <div style={{ width: "90%", margin: 10 }}>
          <p style={{ margin: 5 }}>Address</p>
          <div
            style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}
          >
             <FormControl style={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  City
                </InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  size="small"
                  onChange={(e) => {
                    setData({ ...data, city: e.target.value });
                  }}
                  value={data.city}
                  style={{
                    margin: 10,
                  }}
                >
                  {City.map((e) => (
                    <MenuItem value={e}>{e}</MenuItem>
                  ))}
  
                </Select>
              </FormControl>

           
            <TextField
              style={{
                margin: "10px",
              }}
              size="small"
              id="outlined-basic"
              label="Locality"
              variant="outlined"
              value={data.locality}
              onChange={(e) => setData({ ...data, locality: e.target.value })}
            />
            <TextField
              style={{
                margin: "10px",
              }}
              size="small"
              id="outlined-basic"
              label="Address"
              variant="outlined"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
            <TextField
              style={{
                margin: "10px",
              }}
              size="small"
              id="outlined-basic"
              label="Pin"
              variant="outlined"
              value={data.pin}
              onChange={(e) => setData({ ...data, pin: e.target.value })}
            />
            
            {isOtp?"": <Button
              style={{
                width: "50%",
                margin: 20,
                background: "#0E2954",
              }}
              variant="contained"
              size="small"
              type="submit"
            >
              Save & Verify
            </Button>}
          </div>
        </div>
      </form>
      {isOtp ? (
        <OtpForm data={data} setData={setData} setIsOtp={setIsOtp} />
      ) : (
        ""
      )}
    </>
  );
};

export default Register;
