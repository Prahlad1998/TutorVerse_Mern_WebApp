import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
// import {DatePicker,LocalizationProvider} from '@mui/x-date-pickers';

const FirstStep = ({ data, setData }) => {
  return (
    <>
   
      <TextField
        id="standard-basic"
        label="Name"
        type="text"
        variant="standard"
        style={{
          width: "25%",
          margin: 10,
        }}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
        value={data.name}
      />
      <TextField
        id="standard-basic"
        label="Email"
        type="email"
        required
        variant="standard"
        style={{
          width: "25%",
          margin: 10,
        }}
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
        value={data.email}
      />
      <TextField
        id="standard-basic"
        label="Password"
        type="password"
        variant="standard"
        style={{
          width: "25%",
          margin: 10,
        }}
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
        value={data.password}
      />
      <TextField
        id="standard-basic"
        label="Confirm Password"
        type="password"
        variant="standard"
        style={{
          width: "25%",
          margin: 10,
        }}
        onChange={(e) => {
          setData({ ...data, confirmpassword: e.target.value });
        }}
        value={data.confirmpassword}
      />
      <TextField
        id="standard-basic"
        label="Contact No"
        type="number"
        variant="standard"
        style={{
          width: "25%",
          margin: 10,
        }}
        onChange={(e) => {
          setData({ ...data, contactno: e.target.value });
        }}
        value={data.contactno}
      />
     
        <InputLabel id="demo-simple-select-standard-label"
        style={{
          margin: 10,
        }}>Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Gender"
          onChange={(e) => {
            setData({ ...data, gender: e.target.value });
          }}
          value={data.gender}
          style={{
            color: "blue",
            width: "25%",
            margin: 10,
          }}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
    </>
  );
};

export default FirstStep;
