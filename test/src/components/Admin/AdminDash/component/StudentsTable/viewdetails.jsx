import React, { useContext } from "react";
import { DataContext } from "../../../../../context/dataContext";
import { userContext } from "../../context/userContext";
import { Grid, Stack, Typography } from "@mui/material";

const Viewdetails = () => {
  const { allstudents } = useContext(DataContext);
  const { rowId } = useContext(userContext);
  const matchStudent = allstudents.find(({ _id }) => _id === rowId);
  const Personal = ["name", "email", "contactno", "gender"];
  let verifyStatus=matchStudent.verified?'Verified':'Not verified'
  // let matchStudent = Object.values(allstudents).find((student,i) => {
  //   let indexOfObj;
  //   if(student._id===rowId){
  //     indexOfObj=i;
  //   }
  //   return indexOfObj;
  //   // student._id === rowId) ? student : null;
  // });
  console.log(matchStudent);
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Personal Details
          </Typography>
          <Stack direction="row">
            <Typography width={100}>ID:</Typography>
            <Typography marginLeft={3}>{matchStudent._id}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Name:</Typography>
            <Typography marginLeft={3}>{matchStudent.name}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Email:</Typography>
            <Typography marginLeft={3}>{matchStudent.email}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Contact No:</Typography>
            <Typography marginLeft={3}>{matchStudent.contactno}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Gender:</Typography>
            <Typography marginLeft={3}>{matchStudent.gender}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Academic Details
          </Typography>
          <Stack direction="row">
            <Typography width={100}>School/college:</Typography>
            <Typography marginLeft={3}>{matchStudent.school}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Medium:</Typography>
            <Typography marginLeft={3}>{matchStudent.medium}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Board:</Typography>
            <Typography marginLeft={3}>{matchStudent.board}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Standard:</Typography>
            <Typography marginLeft={3}>{matchStudent.standard}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Stream:</Typography>
            <Typography marginLeft={3}>{matchStudent.stream}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Address Details
          </Typography>
          <Stack direction="row">
            <Typography width={100}>City:</Typography>
            <Typography marginLeft={3}>{matchStudent.city}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Locality:</Typography>
            <Typography marginLeft={3}>{matchStudent.locality}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Address:</Typography>
            <Typography marginLeft={3}>{matchStudent.address}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Pin:</Typography>
            <Typography marginLeft={3}>{matchStudent.pin}</Typography>
          </Stack>
          </Grid>
          <Grid item lg={12} xs={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Others
          </Typography>
          <Stack direction="row">
            <Typography width={100}>Created By:</Typography>
            <Typography marginLeft={3}>{matchStudent.createdBy}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Created At:</Typography>
            <Typography marginLeft={3}>{matchStudent.createdAt}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Verified:</Typography>
            <Typography marginLeft={3}>{verifyStatus}</Typography>
          </Stack>
          </Grid>
          
      </Grid>
    </>
  );
};

export default Viewdetails;
