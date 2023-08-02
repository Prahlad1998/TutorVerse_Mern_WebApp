import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import {
  Button,
  Grid,
  Typography,
  Stack
} from "@mui/material";
import DataPostsTable from "./component/PostTable/DataPostsTable";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddnewPost from "./component/PostTable/AddnewPost";
import FilterTable from "./component/PostTable/FilterTable";


const Posts = () => {

  const location = useLocation();
  let addNewScreen =
    location.pathname === "/admindash/posts/createnewpost" ? true : false;

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            marginTop: 15,
            marginBottom: 10,
            background: "rgb(53, 162, 159,.1)",
            padding: 15,
            borderRadius: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" gutterBottom>
            {addNewScreen ? "Create new Post" : "Lists of Posts"}
          </Typography>
          <Stack direction='row' spacing={2}>
          {addNewScreen ? (
            <>
              <Link to="">
                <Button
                  style={{
                    padding: 10,
                    background: "#EF6262",
                    color: "#ffffff",
                  }}
                >
                  Cancel
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="filterpost">
                <Button
                  xs={{ width: "50%" }}
                  variant="contained"
                  style={{ padding: 10, background: "#35A29F" }}
                >
                   < FilterAltIcon fontSize="small"/>
                  Filter
                </Button>
              </Link>
              <Link to="createnewpost">
                <Button
                  xs={{ width: "50%" }}
                  variant="contained"
                  style={{ padding: 10, background: "#0B666A" }}
                >
                  <AddIcon fontSize="small" xs={0} />
                  Post
                </Button>
              </Link>
              
            </>
          )}
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20, padding: 30 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Routes>
            <Route exact path="/" element={<DataPostsTable />} />
            <Route path="/createnewpost" element={<AddnewPost />}/>
            <Route path="/filterpost" element={<FilterTable/>}/>
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default Posts;
