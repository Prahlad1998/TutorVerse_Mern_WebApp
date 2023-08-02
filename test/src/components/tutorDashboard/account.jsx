import React,{useContext} from "react";
import { DataContext } from "../../context/dataContext";
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import InterpreterModeRoundedIcon from "@mui/icons-material/InterpreterModeRounded";
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';

const Account = (props) => {
  const {body}=useContext(DataContext);
  return (
    <>
      <CssBaseline>
        <Grid container spacing={2} rowSpacing={3}>
          <Grid item xs={12} md={4}>
            <Box
              style={{
                background: "#DAFFFB",
                width: "100%",
                height: 250,
                padding: 30,
                borderRadius: 20,
              }}
            >
              <Typography variant="h4">{body.name}</Typography>
              <ListItem disablePadding>
                <MilitaryTechRoundedIcon />
                <ListItemText>{body.role}</ListItemText>
              </ListItem>
              <Typography variant="h6">{body.subjects}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              style={{
                background: "#DAFFFB",
                width: "100%",
                height: 250,
                padding: 30,
                borderRadius: 20,
              }}
            >
              <Typography variant="h5">About</Typography>
              <Typography variant="p" gutterBottom="true">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                nobis.
              </Typography>
              <div style={{ marginLeft: 10, marginTop: 20 }}>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <LocationOnRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>{body.locality}</ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <MailRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>{body.email}</ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <CallRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>{body.contactno}</ListItemText>
                </ListItem>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              style={{
                background: "#DAFFFB",
                width: "100%",
                height: 250,
                padding: 30,
                borderRadius: 20,
              }}
            >
              <Typography variant="h5">Educational Qualification</Typography>
              <div style={{ marginLeft: 10, marginTop: 20 }}>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <SchoolRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>{body.highestqualification}</ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <LanguageRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>{body.preflanguages}</ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <InterpreterModeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>Online, Offline</ListItemText>
                </ListItem>
              </div>
            </Box>
          </Grid>
          <Grid container direction="column" item xs={12} md={6}>
            <Box
              style={{
                background: "#DAFFFB",
                width: "100%",
                height: 250,
                padding: 30,
                borderRadius: 20,
              }}
            >
              <Typography variant="h5" gutterBottom='true'>Pricing</Typography>
              <ListItem disablePadding>
                  <ListItemIcon>
                    <LabelImportantRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>High School : ₹300-₹400</ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <LabelImportantRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>Higher Secondary : ₹400-₹600</ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <LabelImportantRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>Degree : ₹500-₹800</ListItemText>
                </ListItem>
                <div style={{marginLeft:50,marginTop:30}}>
                <Typography variant="p" > * Prices are negotiable</Typography>
                </div>
               
            </Box>
          </Grid>
        </Grid>
        {/* <Grid container spacing={2} rowSpacing={20}>
        
        </Grid> */}
      </CssBaseline>
    </>
  );
};

export default Account;
