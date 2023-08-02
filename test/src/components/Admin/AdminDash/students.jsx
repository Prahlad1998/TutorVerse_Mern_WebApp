import React from "react";
import {
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Button, Grid, Typography} from "@mui/material";
import DataTable from "./component/TableStudents";
import AddIcon from "@mui/icons-material/Add";
import AddNewStudent from "./component/AddNewStudent";
import PostDetailsFromStudent from "./component/StudentsTable/PostDetailsFromStudent";

const Students = () => {
  const location = useLocation();
  let addNewScreen =
    location.pathname === "/admindash/students/createnew" ? true : false;
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
            {addNewScreen ? "Create new Student" : "Students List"}
          </Typography>
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
              <Link to="createnew">
                <Button
                  xs={{ width: "50%" }}
                  variant="contained"
                  style={{ padding: 10, background: "#0B666A" }}
                >
                  <AddIcon fontSize="small" xs={0} />
                  Student
                </Button>
              </Link>
            </>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20, padding: 30 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Routes>
            <Route exact path="/" element={<DataTable />} />
            <Route path="/createnew" element={<AddNewStudent />} />
            <Route path="/viewpostsdetails" element={<PostDetailsFromStudent/>} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default Students;
