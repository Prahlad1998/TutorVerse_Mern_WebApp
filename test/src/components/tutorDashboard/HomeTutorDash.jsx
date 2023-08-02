import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material";

import React,{useContext} from "react";
import { DataContext } from "../../context/dataContext";


// const useStyles=makeStyles((theme)=>({
// boxstyles:{
//   width: "100%",
//   height: 250,
//   padding: 30,
//   borderRadius: 20,
//   background: "#DAFFFB",
// }
// }));
const HomeTutorDash = () => {


  const {body}=useContext(DataContext);
  return (
    <>
      <CssBaseline>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box style={{ background:"#DAFFFB",
                width: "100%",
                height: 250,
                padding: 30,
                borderRadius: 20,}}>
              <Typography variant="h4">Welcome back</Typography>
              <Typography variant="h5" gutterBottom="true">
                {body.name}
              </Typography>
              <div style={{ marginTop: 20 }}>
                <Typography variant="p" fontSize={15}>
                Explore the features as a Tutor in TuotorVerse.Connect more
                    student as much possible.
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
          <Grid item xs={4}>
            <img src="../../images/pic1.jpg" alt="" />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default HomeTutorDash;
