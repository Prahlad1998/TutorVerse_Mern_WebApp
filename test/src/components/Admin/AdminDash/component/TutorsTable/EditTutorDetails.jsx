import React, { useState } from 'react';
import { tutorContext } from '../../context/tutorContext';
import { DataContext } from '../../../../../context/dataContext';
import {Button,Grid,FormControl,Select,InputLabel,TextField,MenuItem,Typography} from "@mui/material";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const EditDetails = () => {
    const navigate=useNavigate()
    const[isReady,setIsReady]=useState(false);
const { rowId } = React.useContext(tutorContext);
const {alltutors,city,highestqualification,subjects}=React.useContext(DataContext);
const matchTutor = alltutors.find(({ _id }) => _id === rowId);
const [tutortoEdit,setTutortoEdit]=useState(matchTutor);
const handleUpdation = async () => {
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
          } = tutortoEdit;
          const response = await axios.put("/updatetutoraccount", {
          id:rowId,
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
              value={tutortoEdit.name}
              onChange={(e) => setTutortoEdit({ ...tutortoEdit, name: e.target.value })}
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
              value={tutortoEdit.email}
              onChange={(e) => setTutortoEdit({ ...tutortoEdit, email: e.target.value })}
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
              value={tutortoEdit.contactno}
              onChange={(e) => setTutortoEdit({ ...tutortoEdit, contactno: e.target.value })}
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
                value={tutortoEdit.gender}
              onChange={(e) => setTutortoEdit({ ...tutortoEdit, gender: e.target.value })}
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
            <FormControl style={{ width: "85%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Highest Qualifictaion
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                size="small"
                value={tutortoEdit.highestqualification}
                onChange={(e) => setTutortoEdit({ ...tutortoEdit, highestqualification: e.target.value })}
                style={{
                  margin: 10,
                }}
              >
                {highestqualification.map((e) => (
                  <MenuItem value={e}>{e}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl style={{ width: "85%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Prefered Languages
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={tutortoEdit.preflanguages}
              onChange={(e) => setTutortoEdit({ ...tutortoEdit, preflanguages: e.target.value })}
                style={{
                  margin: 10,
                }}
                placeholder="Choose one"
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"assamese"}>Assamese</MenuItem>
                <MenuItem value={"english"}>English</MenuItem>
                <MenuItem value={"hindi"}>Hindi</MenuItem>
                <MenuItem value={"all"}>All</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "85%" }}>
              <InputLabel style={{ paddingLeft: 10, marginBottom: 10 }}>
                Preferred Mode
              </InputLabel>
              <Select
                size="small"
                required
                value={tutortoEdit.prefmode}
                onChange={(e) => setTutortoEdit({ ...tutortoEdit, prefmode: e.target.value })}
                style={{
                  margin: 10,
                }}
              >
                <MenuItem value={"athome"}>At Home</MenuItem>
                <MenuItem value={"atcoaching"}>At Instituition</MenuItem>
                <MenuItem value={"online"}>Online</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "85%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Subjects
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                size="small"
                value={tutortoEdit.subjects}
              onChange={(e) => setTutortoEdit({ ...tutortoEdit, subjects: e.target.value })}
                style={{
                  margin: 10,
                }}
              >
                {subjects.map((e) => (
                  <MenuItem value={e}>{e}</MenuItem>
                ))}
              </Select>
            </FormControl>
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
                value={tutortoEdit.city}
                onChange={(e) => setTutortoEdit({ ...tutortoEdit, city: e.target.value })}
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
              value={tutortoEdit.locality}
              onChange={(e) => setTutortoEdit({ ...tutortoEdit, locality: e.target.value })}
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
              value={tutortoEdit.address}
              onChange={(e) => setTutortoEdit({ ...tutortoEdit, address: e.target.value })}
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
              value={tutortoEdit.pin}
              onChange={(e) => setTutortoEdit({ ...tutortoEdit, pin: e.target.value })}
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