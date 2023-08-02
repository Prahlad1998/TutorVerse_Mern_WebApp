import React, { useState } from 'react';
import { userContext } from "../../context/userContext";
import { DataContext } from "../../../../../context/dataContext";
import {Button,Grid,FormControl,Select,InputLabel,TextField,MenuItem,Typography} from "@mui/material";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const EditDetails = () => {
    const navigate=useNavigate()
const { rowId } = React.useContext(userContext);
const {allstudents,city}=React.useContext(DataContext);
const matchStudent = allstudents.find(({ _id }) => _id === rowId);
const [studenttoEdit,setStudenttoEdit]=useState(matchStudent);
const handleUpdation = async () => {
    try {
        const {
            name,
            email,
            contactno,
            gender,
            school,
            medium,
            board,
            standard,
            stream,
            city,
            locality,
            address,
            pin,
          } = studenttoEdit;
          const response = await axios.put("/updateaccount", {
          id:rowId,
            name,
            email,
            contactno,
            school,
            gender,
            medium,
            board,
            standard,
            stream,
            city,
            locality,
            address,
            pin,
          });
          console.log(response);
          if(response.data.status==='ok'){
            toast.success(response.data.message);
      
            setTimeout(() => {
              navigate(0);
            }, 2000);
            
          }else{
            toast.error(response.data.message);
          }
        
    } catch (error) {
        console.log(error);
        toast.error("Internal Error");
        
    }
    
  };

  return (
    <>
    <Grid container spacing={4}>
          <Grid item lg={12} xs={12} md={12} style={{padding:20,marginTop:20}}>
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
              value={studenttoEdit.name}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, name: e.target.value })}
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
              disabled
              variant="outlined"
              value={studenttoEdit.email}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, email: e.target.value })}
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
              value={studenttoEdit.contactno}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, contactno: e.target.value })}
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
                value={studenttoEdit.gender}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, gender: e.target.value })}
                style={{
                  margin: 10,
                }}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={12} xs={12} md={12} style={{padding:30,"box-shadow": "rgba(149, 157, 165, 0.1) 0px 8px 24px",borderRadius:10}}>
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
              value={studenttoEdit.school}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, school: e.target.value })}
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
                value={studenttoEdit.medium}
                onChange={(e) => setStudenttoEdit({ ...studenttoEdit, medium: e.target.value })}
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
                value={studenttoEdit.board}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, board: e.target.value })}
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
              value={studenttoEdit.standard}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, standard: e.target.value })}
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
              value={studenttoEdit.stream}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, stream: e.target.value })}
            />
          </Grid>
          <Grid item lg={12} xs={12} md={12} style={{padding:20}}>
            <Typography variant="p" style={{marginBottom:10}}>Address</Typography>
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
                value={studenttoEdit.city}
                onChange={(e) => setStudenttoEdit({ ...studenttoEdit, city: e.target.value })}
                style={{
                  margin: 10,
                }}
              >
                {city.map((e) => (
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
              value={studenttoEdit.locality}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, locality: e.target.value })}
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
              value={studenttoEdit.address}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, address: e.target.value })}
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
              value={studenttoEdit.pin}
              onChange={(e) => setStudenttoEdit({ ...studenttoEdit, pin: e.target.value })}
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
              onClick={handleUpdation}
            >
              Update
            </Button>
          </Grid>
        </Grid>
        </>
  )
}

export default EditDetails;