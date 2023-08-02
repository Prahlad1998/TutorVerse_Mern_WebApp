import React, { useContext } from "react";
import { postContext } from "../../context/postContext";
import { DataContext } from "../../../../../context/dataContext";
import { Grid, Stack, Typography } from "@mui/material";

const ViewDetailsPost = () => {
  const { allposts } = useContext(DataContext);
  const { rowId } = useContext(postContext);
  const matchPost = allposts.find(({ _id }) => _id === rowId);
  let verifyStatus=matchPost.verified?'Verified':'Not verified'
  // let matchStudent = Object.values(allstudents).find((student,i) => {
  //   let indexOfObj;
  //   if(student._id===rowId){
  //     indexOfObj=i;
  //   }
  //   return indexOfObj;
  //   // student._id === rowId) ? student : null;
  // });
  console.log(matchPost);
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Post Details
          </Typography>
          <Stack direction="row">
            <Typography width={120}>ID:</Typography>
            <Typography marginLeft={3}>{matchPost._id}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={120}>Subject:</Typography>
            <Typography marginLeft={3}>{matchPost.subject}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={120}>Standard:</Typography>
            <Typography marginLeft={3}>{matchPost.standard}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={120}>Preferred Mode:</Typography>
            <Typography marginLeft={3}>{matchPost.prefmode}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={100}>Preferred Time:</Typography>
            <Typography marginLeft={3}>{matchPost.preftime}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            User Details
          </Typography>
          <Stack direction="row">
            <Typography width={120}>Name:</Typography>
            <Typography marginLeft={3}>{matchPost.name}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={120}>Gender:</Typography>
            <Typography marginLeft={3}>{matchPost.gender}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={120}>Email:</Typography>
            <Typography marginLeft={3}>{matchPost.email}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={120}>Contact No:</Typography>
            <Typography marginLeft={3}>{matchPost.contactno}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={12} marginBottom={3}>
          <Typography variant="h6" gutterBottom>
            Other Details
          </Typography>
          <Stack direction="row">
            <Typography width={120}>Created At:</Typography>
            <Typography marginLeft={3}>{matchPost.createdAt}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={120}>Created By:</Typography>
            <Typography marginLeft={3}>{matchPost.createdBy}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography width={120}>Verified:</Typography>
            <Typography marginLeft={3}>{verifyStatus}</Typography>
          </Stack>
          
          {/* <Stack direction="row">
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
          </Stack> */}
          </Grid>
      </Grid>
    </>
  );
};

export default ViewDetailsPost;
