import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Stack, Button} from "@mui/material";
import {Link,useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const AdminLogin = () => {
  const [adminData,setAdminData]=useState({
    username:'',
    password:''
  });
  const navigate=useNavigate();
  const handleAdminLogin=async()=>{
    const {username,password}=adminData;
    if(username==='' || password===''){
      return toast.error('Please filled up the required details');
    }
    try {
      const response=await axios.post('./adminlogin',{
        username,
        password
      });
      console.log(response);
      if(response.data.status==='ok'){
        toast.success(response.data.message);
        window.localStorage.setItem("tokenAdmin", response.data.token);
        setAdminData({});
      navigate('/admindash') ;     
    }else{
      toast.error(response.data.message);
    }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }

  }
  return (
    <>
      <Grid container>
        <Grid item xs={0} lg={7}>
          <Box
            style={{
              height: "100vh",
              background: "linear-gradient(to bottom,#176B87,#64CCC5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{width:100,height:100,background:'radial-gradient(circle,rgba(255,255,255,.5),rgba(255,255,255,0))',position:'absolute',bottom:0,left:0}}></div>
            <div style={{width:100,height:100,background:'radial-gradient(circle,rgba(255,255,255,.5),rgba(255,255,255,0))',position:'absolute',top:0,left:30}}></div>
            <img src={require('../images/drawer.png')} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Box
            style={{
              height: "100vh",
              background: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
            <Stack spacing={3}>
              <Link to='/'>
              <Typography variant="h5" style={{color:'#ffffff',position:'absolute',top:10,left:10}}>TutorVerse</Typography>
              </Link>
        
              <Typography variant="h4" align="center"> Admin Login</Typography>
              <TextField
                id="standard-basic"
                label="Username"
                variant="standard"
                style={{minWidth:300,}}
                onChange={(e)=>setAdminData({...adminData,username:e.target.value})}
                value={adminData.username}
              />
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
                style={{minWidth:300,}}
                onChange={(e)=>setAdminData({...adminData,password:e.target.value})}
                value={adminData.password}
              />
              <Button variant="contained" style={{marginTop:20,background:'linear-gradient(to bottom,#176B87,#64CCC5)'}} onClick={handleAdminLogin}>Log In</Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminLogin;
