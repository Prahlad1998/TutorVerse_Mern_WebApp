import React, { useContext } from "react";
import { DataContext } from "../../../../../context/dataContext";
import { tutorContext } from "../../context/tutorContext";
import { Grid, Stack, Typography } from "@mui/material";

const ViewTutorDetails = () => {
  const { alltutors } = useContext(DataContext);
  const { rowId } = useContext(tutorContext);
  const matchTutor = alltutors.find(({ _id }) => _id === rowId);
  let verifyStatus=matchTutor.verified?'Verified':'Not verified'
  console.log(matchTutor);
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Personal Details
          </Typography>
          <Stack direction="row">
            <Typography width={100}>ID:</Typography>
            <Typography marginLeft={3}>{matchTutor._id}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Name:</Typography>
            <Typography marginLeft={3}>{matchTutor.name}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Email:</Typography>
            <Typography marginLeft={3}>{matchTutor.email}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Contact No:</Typography>
            <Typography marginLeft={3}>{matchTutor.contactno}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Gender:</Typography>
            <Typography marginLeft={3}>{matchTutor.gender}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Academic Details
          </Typography>
          <Stack direction="row">
            <Typography width={150}>Highest Qualification:</Typography>
            <Typography marginLeft={3}>{matchTutor.highestqualification}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={150}>Subjects:</Typography>
            <Typography marginLeft={3}>{matchTutor.subjects}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={150}>Preferred Languages:</Typography>
            <Typography marginLeft={3}>{matchTutor.preflanguages}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={150}>Preferred Mode:</Typography>
            <Typography marginLeft={3}>{matchTutor.prefmode}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Address Details
          </Typography>
          <Stack direction="row">
            <Typography width={100}>City:</Typography>
            <Typography marginLeft={3}>{matchTutor.city}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Locality:</Typography>
            <Typography marginLeft={3}>{matchTutor.locality}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Address:</Typography>
            <Typography marginLeft={3}>{matchTutor.address}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Pin:</Typography>
            <Typography marginLeft={3}>{matchTutor.pin}</Typography>
          </Stack>
          </Grid>
          <Grid item lg={12} xs={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Others
          </Typography>
          <Stack direction="row">
            <Typography width={100}>Created By:</Typography>
            <Typography marginLeft={3}>{matchTutor.createdBy}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Created At:</Typography>
            <Typography marginLeft={3}>{matchTutor.createdAt}</Typography>
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

export default ViewTutorDetails;
