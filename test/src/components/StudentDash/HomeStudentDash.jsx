import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CommitRoundedIcon from "@mui/icons-material/CommitRounded";

import CreatePost from "./CreatePost";
import AccessibleTable from "./TablePost";

const HomeStudentDash = (props) => {
  console.log(props);
  const {data}=props;
  const {posts}=props;
  const NoOfPosts=Object.keys(posts).length; 
  return (
    <>
      <CssBaseline>
        <Grid container spacing={2}>
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
              <Typography variant="h4">Welcome back</Typography>
              <Typography variant="h5" gutterBottom="true">
                {data.name}
              </Typography>
              <div style={{ marginTop: 20 }}>
                <Typography variant="p" fontSize={15}>
                  Explore the features as a Student in TuotorVerse.Earn more
                  knowledge as musch as possible connecting the Tutors.
                </Typography>
                <br />
                <Button
                  variant="contained"
                  size="small"
                  style={{ background: "#176B87", marginTop: 17 }}
                >
                  Explore
                </Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              style={{
                background: "#DAFFFB",
                width: "100%",
                height: 250,
                padding: 30,
                borderRadius: 20,
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <Typography variant="h6">Total Tuitions Post</Typography>
              <div>
                <ListItem>
                  <ListItemIcon
                    style={{
                      color: "#001C30",
                    }}
                  >
                    <CommitRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h1">{NoOfPosts}</Typography>
                  </ListItemText>
                </ListItem>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              style={{
                //   background: "#DAFFFB",
                width: "100%",
                height: "auto",
                padding: 30,
                borderRadius: 20,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <Typography variant="h5" style={{ color: "#001C30" }}>
                Post a Tuition
              </Typography>
              <form action="" style={{ display: "flex" }}>
                <div style={{ marginLeft:35, marginTop: 20 }}>
                  <CreatePost data={props.data} />
                </div>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              style={{
                // background: "#DAFFFB",
                width: "100%",
                height: "auto",
                padding: 30,
                borderRadius: 20,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <Typography variant="h5" style={{ color: "#001C30" }}>
                Join our various Events
              </Typography>
              <Box
                style={{
                  marginTop: 20,
                  background: "#64CCC5",
                  width: "100%",
                  height: "auto",
                  padding: 30,
                  borderRadius: 20,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <Typography variant="h6">Mock Test</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  numquam.
                </Typography>
                <br />
                <Button
                  variant="outlined"
                  style={{
                    marginTop: 20,
                    border: "1px solid #001C30",
                    color: "#001C30",
                  }}
                >
                  Know more
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box
              style={{
                background: "#DAFFFB",
                width: "100%",
                height: "auto",
                padding: 30,
                borderRadius: 20,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <Typography variant="h6">Your Tuition Posts</Typography>
              <AccessibleTable posts={props.posts} />
            </Box>
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default HomeStudentDash;
