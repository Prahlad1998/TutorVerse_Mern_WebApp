import { Box } from "@mui/system";
import {
  ListItem,
  Stack,
  Avatar,
  Typography,
  Divider,
  Button,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import SwipeRightAltRoundedIcon from "@mui/icons-material/SwipeRightAltRounded";
const getDateOfCreation = (str) => {
  const modifiedDate = Date.parse(str);
  const date_time = new Date(modifiedDate);
  const createdMonth = date_time.toLocaleString("default", { month: "long" });
  const createdDate = date_time.getDate();

  const createdYear = date_time.getFullYear();
  const finalDate = `${createdDate} - ${createdMonth} - ${createdYear}`;
  return finalDate;
};

const TuitionCard = (props) => {
  const { tuition} = props;
  console.log(tuition.createdat);
  return (
    <>
      <Box
        style={{
          minWidth: 200,
          background: "#176B87",
          height: "auto",
          borderRadius: 20,
          padding: 30,
          margin: 10,
          color: "#ffffff",
        }}
      >
        <Stack>
          <ListItem>
            <Avatar style={{ marginRight: 10 }}>
              {tuition.subject.charAt().toUpperCase()}
            </Avatar>
            <Typography variant="h4">
              {tuition.subject.toUpperCase()}
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SwipeRightAltRoundedIcon style={{ color: "#ffffff" }} />
            </ListItemIcon>
            <ListItemText>{tuition._id}</ListItemText>
          </ListItem>
          <ListItem>
            <Typography>{tuition.city}</Typography>
            <Typography>{tuition.address}</Typography>
          </ListItem>
          <ListItem style={{ display: "flex", justifyContent: "space-around" }}>
            <Typography>{tuition.standard}</Typography>
            <Typography>{tuition.prefmode}</Typography>
            <Typography>{tuition.preftime}</Typography>
          </ListItem>
          <Divider />
          <Stack style={{ marginTop: 10 }}>
            <Typography>Student's Name : {tuition.name}</Typography>
            <div></div>
            <Typography>
              Posted at :{getDateOfCreation(tuition.createdAt)}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            style={{ background: "#DAFFFB", color: "#001C30", marginTop: 10 }}
          >
            Details
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default TuitionCard;
