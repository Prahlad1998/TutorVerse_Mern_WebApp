import {
  Grid,
  Box,
  Avatar,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Divider,
  Chip,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import axios from "axios";
import { toast } from "react-hot-toast";
import {useNavigate} from 'react-router-dom';

const AccountDash = (props) => {
  // const [isloader,setLoader]=useState(false);
  const navigate=useNavigate();
  const CityForSearch = [
    "Guwahati",
    "Kaziranga",
    "Bokakhat",
    "Kaliabor",
    "Tezpur",
  ];
  const { data } = props;
  console.log(props);
  const [update, setUpdate] = useState({
    id: data._id,
    name: data.name,
    email: data.email,
    contactno: data.contactno,
    school: data.school,
    gender: data.gender,
    medium: data.medium,
    board: data.board,
    city: data.city,
    locality: data.locality,
    address: data.address,
    pin: data.pin,
  });
  const handleUdateProfile = async () => {
    const {
      id,
      name,
      email,
      contactno,
      school,
      gender,
      medium,
      board,
      city,
      locality,
      address,
      pin,
    } = update;
    const response = await axios.put("/updateaccount", {
      id,
      name,
      email,
      contactno,
      school,
      gender,
      medium,
      board,
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
  };

  return (
  <>
      <Grid container spacing={2}>
        <Grid item md={12} xs={12} lg={12}>
          <Box
            style={{
              borderRadius: 10,
              padding: 10,
              boxShadow: "#64CCC5 0px 8px 24px",
              width: "100%",
              background: "#DAFFFB",
              height: "100px",
            }}
          >
            <ListItem>
              <Avatar
                src={require("./images/avatar_3.jpg")}
                style={{
                  position: "relative",
                  top: 10,
                }}
                sx={{ width: 100, height: 100 }}
              />
              <ListItemText style={{ margin: 20 }}>
                <Typography
                  variant="h6"
                  style={{ fontWeight: "500", letterSpacing: 1 }}
                >
                  {data.name}
                </Typography>
                <Typography>{data.gender}</Typography>
              </ListItemText>
            </ListItem>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            style={{
              marginTop: 20,
              borderRadius: 10,
              padding: 10,
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              width: "100%",
              // background:'#DAFFFB',
              height: "auto",
            }}
          >
            <Stack>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography variant="p">
                Lives At : {data.locality}
                <br />
                Address : {data.address} {data.pin}
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Box
            style={{
              marginTop: 20,
              borderRadius: 10,
              padding: 10,
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              width: "100%",
              // background:'#DAFFFB',
              height: "auto",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>
            <Stack direction="row" spacing={4}>
              <div>
                <Typography variant="p">
                  Studies At : {data.school}
                  <br />
                  Board : {data.board}
                </Typography>
              </div>
              <div>
                <Typography variant="p">
                  Standard: {data.standard}
                  <br />
                  Medium : {data.medium}
                </Typography>
              </div>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Divider style={{ margin: 30 }}>
        <Chip
          label="Edit Profile"
          style={{ background: "#176B87", color: "#ffffff", cursor: "pointer" }}
        />
      </Divider>
      <Grid container>
        <Grid item>
          {/* <Typography variant="h6">Edit</Typography> */}
          <Typography variant="p" gutterBottom>
            {" "}
            <span>
              <EditRoundedIcon />
            </span>
            Dashboard/{data.name}/Edit
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={4}>
          <TextField
            style={{
              margin: "10px",
            }}
            size="small"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={update.name}
            onChange={(e) => setUpdate({ ...update, name: e.target.value })}
          />
          <TextField
            style={{
              margin: "10px",
            }}
            size="small"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={data.email}
            onChange={(e) => setUpdate({ ...update, email: e.target.value })}
          />
          <TextField
            style={{
              margin: "10px",
            }}
            size="small"
            id="outlined-basic"
            label="School"
            variant="outlined"
            value={update.school}
            onChange={(e) => setUpdate({ ...update, school: e.target.value })}
          />

          <InputLabel
            id="demo-simple-select-standard-label"
            size="small"
            style={{
              margin: 5,
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
              setUpdate({ ...data, gender: e.target.value });
            }}
            value={update.gender}
            style={{
              margin: 10,
            }}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} lg={4}>
          <InputLabel
            id="demo-simple-select-standard-label"
            size="small"
            style={{
              margin: 5,
            }}
          >
            Medium
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            size="small"
            label="medium"
            onChange={(e) => {
              setUpdate({ ...data, medium: e.target.value });
            }}
            value={update.medium}
            style={{
              margin: 10,
            }}
          >
            <MenuItem value={"assamese"}>Assamese</MenuItem>
            <MenuItem value={"english"}>English</MenuItem>
            <MenuItem value={"hindi"}>Hindi</MenuItem>
          </Select>

          <InputLabel
            id="demo-simple-select-standard-label"
            size="small"
            style={{
              margin: 5,
            }}
          >
            Board
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            size="small"
            label="medium"
            onChange={(e) => {
              setUpdate({ ...update, board: e.target.value });
            }}
            value={update.board}
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

          <InputLabel
            id="demo-simple-select-standard-label"
            size="small"
            style={{
              margin: 5,
            }}
          >
            City
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            size="small"
            label="medium"
            onChange={(e) => {
              setUpdate({ ...update, city: e.target.value });
            }}
            value={update.city}
            style={{
              margin: 10,
            }}
          >
            {CityForSearch.map((e) => (
              <MenuItem value={e}>{e}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            style={{
              margin: "10px",
            }}
            size="small"
            id="outlined-basic"
            label="Address"
            variant="outlined"
            value={update.address}
            onChange={(e) => setUpdate({ ...update, address: e.target.value })}
          />
          <TextField
            style={{
              margin: "10px",
            }}
            size="small"
            id="outlined-basic"
            label="pin"
            variant="outlined"
            value={update.pin}
            onChange={(e) => setUpdate({ ...update, pin: e.target.value })}
          />
          <TextField
            style={{
              margin: "10px",
            }}
            size="small"
            id="outlined-basic"
            label="locality"
            variant="outlined"
            value={update.locality}
            onChange={(e) => setUpdate({ ...update, locality: e.target.value })}
          />
          <br />
          <Button
            variant="contained"
            style={{ background: "#176B87" }}
            onClick={handleUdateProfile}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            style={{
              border: "1px solid #176B87",
              color: "#176B87",
              marginLeft: 5,
            }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </>)
};

export default AccountDash;
