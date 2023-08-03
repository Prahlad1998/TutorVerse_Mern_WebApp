import React from "react";
import {
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import AddNewTutor from "./component/TutorsTable/AddNewTutor";
import AddIcon from "@mui/icons-material/Add";

import DataTutorTable from "./component/TutorsTable/DataTutorTable";

const Students = () => {

  const location = useLocation();
  let addNewTutorScreen =
    location.pathname === "/admindash/tutors/createnewtutor" ? true : false;
  // const [addNewScreen,setAddNewScreen]=useState(false);
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
            {addNewTutorScreen ? "Create new Tutors" : "Tutors List"}
          </Typography>
          {addNewTutorScreen? (
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
              <Link to="createnewtutor">
                <Button
                  xs={{ width: "50%" }}
                  variant="contained"
                  style={{ padding: 10, background: "#0B666A" }}
                >
                  <AddIcon fontSize="small" xs={0} />
                  Tutor
                </Button>
              </Link>
            </>
          )}
        </Grid>
        <div style={{marginBottom:30}}>
          {addNewTutorScreen?<><Typography variant="p" color='#EF6262'>* Before filling up the form,Make sure the Email and Contact no are correct and valid.
            </Typography></>:''}
          </div>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 20, padding: 30 }}>
        <Grid item xs={12} md={12} lg={12}>
          
          <Routes>
            <Route exact path="/" element={<DataTutorTable />} />
            <Route path="/createnewtutor" element={<AddNewTutor/>} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default Students;
