import React from "react";
import {Button} from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";



const Home = () => {
  const mailSend=async (e)=>{
    e.preventDefault();
    const {data}=await axios.get("/sendmail");
    if(!data.error){
      toast.success('Mail has sent successfully');
    }else{
      toast.error('Mail is not sent');
    }

  }
  return (
    <>
     <Navbar/>
    <Button onClick={mailSend}>
      Send Mail
    </Button>
    
    </>
  );
};

export default Home;
