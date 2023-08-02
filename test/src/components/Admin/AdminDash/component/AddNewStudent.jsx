import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Grid,
  Typography,
 
} from "@mui/material";
import { DataContext } from "../../../../context/dataContext";

const AddNewStudent = () => {
  const navigate = useNavigate();
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
    city: "",
    createdBy:"byadmin"
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
      createdBy
    } = data;
    console.log(data);
    if(name==='' || email==='' || password==='' || contactno===''){
        return toast.error("Please filled the details");
    }
    if(school==='' || medium==='' || board==='' || standard===''){
        return toast.error("Please filled the details");
    }
    if(city==='' || address==='' || locality==='' || pin===''){
        return toast.error("Please filled the details");
    }
    try {
      const responds = await axios.post("/createnewstudent", {
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
        city,
        createdBy
      });
      console.log(responds);
      if (!(responds.data.status === "ok")) {
        toast.error(responds.data.message);
      } else {
        toast.success(responds.data.message);
        
        setTimeout(() => {
          navigate(-1);
        }, 2000);
        setTimeout(() => {
          navigate(0);
        }, 4000);
      }
    } catch (err) {
      toast.error(err.message);
      console.log("Something Error !", err);
    }
  };
  const City = ["Guwahati", "Kaziranga", "Bokakhat", "Kaliabor", "Tezpur"];
  return (
    <>
      <form
        onSubmit={registerUser}
        style={{
          width: "100%",
        }}
      >
        <Grid container spacing={4}>
          <Grid item lg={4} xs={12} md={6} style={{padding:20}}>
            <Typography variant="p"> Personal Details</Typography>
            <br />
            <TextField
              style={{
                margin: "10px",
                width: "80%",
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
                width: "80%",
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
                width: "80%",
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
                width: "80%",
              }}
              size="small"
              id="outlined-basic"
              label="Contact No"
              variant="outlined"
              value={data.contactno}
              onChange={(e) => setData({ ...data, contactno: e.target.value })}
            />

            <FormControl style={{ marginTop:10,width: "85%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Gender
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                size="small"
                onChange={(e) => {
                  setData({ ...data, gender: e.target.value });
                }}
                value={data.gender}
                style={{
                  margin: 10,
                }}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={4} xs={12} md={6} style={{padding:30,"box-shadow": "rgba(149, 157, 165, 0.1) 0px 8px 24px",borderRadius:10}}>
            <Typography variant="p">Academic Details</Typography>
            <br />
            <TextField
              style={{
                margin: "10px",
                width: "80%"
              }}
              size="small"
              id="outlined-basic"
              label="School"
              variant="outlined"
              value={data.school}
              onChange={(e) => setData({ ...data, school: e.target.value })}
            />
            <FormControl style={{ width: "85%" }}>
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

            <FormControl style={{ width: "85%" }}>
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
            <TextField
              style={{
                margin: "10px",
                width: "80%"
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
                width: "80%"
              }}
              size="small"
              id="outlined-basic"
              label="Stream"
              variant="outlined"
              value={data.stream}
              onChange={(e) => setData({ ...data, stream: e.target.value })}
            />
          </Grid>
          <Grid item lg={4} xs={12} md={6} style={{padding:20}}>
            <Typography variant="p">Address</Typography>
            <br />
            <FormControl style={{ width: "85%" }}>
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
                width: "80%"
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
                width: "80%"
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
                width: "80%"
              }}
              size="small"
              id="outlined-basic"
              label="Pin"
              variant="outlined"
              value={data.pin}
              onChange={(e) => setData({ ...data, pin: e.target.value })}
            />
            <TextField
              style={{
                margin: "10px",
                width: "80%",
              }}
              required
              size="small"
              id="outlined-basic"
              label="Created By"
              variant="outlined"
              value={data.createdBy}
              disabled
            />
            <Button
              style={{
                width: "50%",
                margin: 20,
                background: "#0B666A",
              }}
              variant="contained"
              size="medium"
              type="submit"
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AddNewStudent;
