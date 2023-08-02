import { useState } from "react";
import axios from "axios";
import React from "react";
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    role: "",
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { role, email, password } = data;
    if (role === "" || email === "" || password === "") {
      return toast.error("Please filled the details !");
    }
    console.log(data);
    try {
      const responds = await axios.post("/login", {
        role,
        email,
        password,
      });
      if (responds.data.status === "fail") {
        console.log(responds);
        toast.error(responds.data.message);
      } else {
        console.log(responds);
        setData({});
        toast.success(responds.data.message);
        window.localStorage.setItem("token", responds.data.token);
        window.localStorage.setItem("loggedInas", true);
        switch (role) {
          case "tutor":
            navigate("/tutordash");
            break;
          case "student":
            navigate("/studentdash");
            break;

          default:
            break;
        }

        // if (role === "tutor") {

        // } else {
        //   navigate("/studentdash");
        // }
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
  return (
    <>
     <Navbar/>
      <div
        style={{
          margin: 30,
        }}
      >
        <form
          onSubmit={loginUser}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 20,
            width: "70%",
          }}
        >
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Login As :
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => setData({ ...data, role: e.target.value })}
              value={data.role}
            >
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="tutor"
                control={<Radio />}
                label="Tutor"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            style={{
              width: "50%",
              margin: "10px",
            }}
            size="small"
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <TextField
            style={{
              width: "50%",
              margin: "10px",
            }}
            size="small"
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            style={{
              width: "10%",
              margin: "10px",
            }}
            variant="contained"
            size="small"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
