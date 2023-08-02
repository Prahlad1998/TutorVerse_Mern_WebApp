import React, { useContext } from 'react';
import { DataContext } from '../../../../../context/dataContext';
import ActionsPost from '../PostTable/ActionsPost';
import { useLocation } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: "slno", headerName: "Sl. No", width: 50 },
    { field: "MongooseId", headerName: "Id", width: 200 },
    {
      field: "subject",
      headerName: "Subject",
      sortable: false,
      width: 100,
    },
    {
      field: "standard",
      headerName: "Standard",
      width: 80,
      sortable: false,
    },
    {
      field: "city",
      headerName: "City",
      sortable: false,
      width: 90,
    },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 130,
    },
    {
      field: "verified",
      headerName: "Status",
      width: 80,
      sortable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      renderCell: (params) => <ActionsPost rowId={params.id} />,
    },
  ];

const PostDetailsFromStudent = () => {

    const {allposts,allstudents}=useContext(DataContext);
    const location=useLocation();
    const rowId=location.state;
    console.log(rowId);
    const matchStudent = allstudents.find(({ _id }) => _id === rowId);
    console.log(matchStudent);
    const studentEmail=matchStudent.email;
    
    const filteredPost=Object.values(allposts).filter((post)=>{
        return (post.email===studentEmail);
    });
    console.log(filteredPost);
    const getDateOfCreation = (str) => {
        const modifiedDate = Date.parse(str);
        const date_time = new Date(modifiedDate);
        const createdMonth = date_time.toLocaleString("default", { month: "long" });
        const createdDate = date_time.getDate();
    
        const createdYear = date_time.getFullYear();
        const finalDate = `${createdDate} - ${createdMonth} - ${createdYear}`;
        return finalDate;
      };

    const rows = Object.values(filteredPost).map((post, i) => {
        let verifyStatus = post.verified ? "✓" : "x";
        let count = i + 1;
        return {
          slno: count,
          MongooseId: post._id,
          name: post.name,
          email: post.email,
          contactno: post.contactno,
          subject: post.subject,
          standard: post.standard,
          verified: verifyStatus,
          createdAt: getDateOfCreation(post.createdAt),
          city: post.city,
        };
      });


  return (
    <>
    <Grid container spacing={2}>
        <Grid item lg={3} xs={12} md={12}>
            <Box style={{width:'100%',
        height:100}}>
            <Typography variant='h6'>
                Student's Email
            </Typography>
            <Typography>
                {studentEmail}
            </Typography>
            </Box>
        </Grid>
        <Grid item lg={3} xs={12} md={12}>
            <Box style={{width:'100%',
        height:100}}>
            <Typography variant='h6'>
                Student's Name
            </Typography>
            <Typography>
                {matchStudent.name}
            </Typography>
            </Box>
        </Grid>
        <Grid item lg={3} xs={12} md={12}>
            <Box style={{width:'100%',
        height:100}}>
            <Typography variant='h6'>
                Number of Posts
            </Typography>
            <Typography>
                {filteredPost.length}
            </Typography>
            </Box>
        </Grid>
    </Grid>
     <Grid container>
        <Grid item lg={12} xs={12}>
            {(filteredPost.length===0)?<>
            <Typography variant='p' color='rgb(239, 98, 98)'>
                *This User has not posted any Tuition request yet.
            </Typography>
            </>:<>
            <div style={{ marginleft: 0, height: 300, width: "100%" }}>
            <DataGrid
              style={{
                marginLeft: 0,
                width: "100%",
                border: "1px solid #0B666A",
              }}
              columns={columns}
              rows={rows}
              getRowId={(row) => row.MongooseId}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              getRowSpacing={(params) => ({
                top: params.isFirstVisible ? 0 : 5,
                bottom: params.isLastVisible ? 0 : 5,
              })}
            />
          </div>
            </>}
          
        </Grid>
      </Grid>
    </>
   
  )
}

export default PostDetailsFromStudent