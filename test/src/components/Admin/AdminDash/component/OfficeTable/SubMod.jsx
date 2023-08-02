import React, { useContext, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../../../context/dataContext";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { toast } from "react-hot-toast";
import axios from "axios";
import ListSub from "./ListSub";
const SubMod = () => {
  const navigate=useNavigate();
  const [addsub, setAddsub] = useState("");
  const { subjects } = useContext(DataContext);
  const handleAddSub=async ()=>{
    if(addsub===''){
      return toast.error('Required filled is Empty');
    }
    try {
      const response= await axios.post('/createSub',{
        name:addsub,
      });
      console.log(response);
      if (!(response.data.status === "ok")) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate(0);
        }, 2000);
      }
      
    } catch (err) {
      toast.error(err.message);
      console.log("Something Error !", err);
    }
  }
  return (
    <>
      <Grid container width="100%" 
      sx={{
        background:'rgb(11, 102, 106)',
        borderRadius:1
      }}>
        <Grid
          item
          sx={{
            marginTop:2,
            marginBottom:2,
            marginLeft: 2,
            position: "relative",
            background: "#ffffff",
            "box-shadow": "rgba(255,255,255,.3) 0px 8px 24px",
            padding: 2,
            borderRadius: 2,
          }}
          lg={4}
          xs={12}
          md={12}
        >
          <div
            style={{
              position: "absolute",
              right: 10,
              bottom: 10,
            }}
          >
            <AutoStoriesIcon
              style={{
                fontSize: 80,
                color: "rgb(11, 102, 106,.8)",
                fontWeight: 100,
              }}
            />
          </div>
          <Typography variant="h6" style={{ color: "rgb(53, 162, 159)" }}>
            Total Subjects registered
            <Typography variant="h2" style={{ color: "rgb(11, 102, 106)" }}>
              {subjects.length}
            </Typography>
          </Typography>
        </Grid>
        <Grid
          lg={3}
          xs={12}
          md={12}
          sx={{
            marginTop:2,
            marginBottom:2,
            marginLeft: 2,
            position: "relative",
            background: "rgba(255,255,255)",
            "box-shadow": "rgba(255,255,255,.3) 0px 8px 24px",
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" style={{ color: "rgb(53, 162, 159)" }}>
            Add a new Subject
          </Typography>
          <TextField
            style={{
              marginTop: 20,
              marginBottom: 20,
              width: "100%",
            }}
            size="small"
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            value={addsub}
            onChange={(e) => {
              setAddsub(e.target.value);
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant=""
              size="small"
              style={{
                color: "#ffffff",
                background: "rgb(11, 102, 106)",
              }}
              onClick={handleAddSub}
            >
              Add
            </Button>
          </div>
        </Grid>
        <Grid
          lg={4}
          xs={12}
          md={12}
          sx={{
            marginTop:2,
            marginBottom:2,
            marginLeft: 2,
            position: "relative",
            background: "#ffffff",
            "box-shadow": "rgba(255,255,255,.3) 0px 8px 24px",
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" style={{ color: "rgb(53, 162, 159)" }}>
            List of Subjects
          </Typography>
          <ListSub/>
        </Grid>
      </Grid>
    </>
  );
};

export default SubMod;
