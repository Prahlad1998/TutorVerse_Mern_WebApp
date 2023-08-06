import React, { useState, useEffect, useContext,useRef } from "react";
import TuitionCard from "./TuitionCard";
import { DataContext } from "../../context/dataContext";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { PropagateLoader } from "react-spinners";

const MatchedTuition = () => {
  const { body } = useContext(DataContext);
  const [tuitions, setTuitions] = useState({});
  const [isloading, setIsloading] = useState(true);
  const temFunc=useRef();
  
  const findTuitions = async () => {
    if (body.city === "" || body.subjects === "") {
      return false;
    }
    try {
      const response = await axios.post("/matchedtuitions", {
        city: body.city,
        subjects: body.subjects,
      });
      console.log(response);
      if (response.data.status === "ok") {
        setTuitions(response.data.tuitions);
        setIsloading(false);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  temFunc.current=findTuitions;

  useEffect(() => {
    temFunc.current();
    
      // setTuitions(() => findTuitions());
  
  },[]);

  return (
    <>
      <Grid container xs={12} lg={12}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Matched Tuitions
          </Typography>
          <Typography Varient="p">
            We have found <strong>{tuitions.length}</strong> numbers of tuitions
            based on <strong>{body.subjects}</strong> and{" "}
            <strong>{body.city}</strong>{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row">
          {isloading ? (
            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              style={{ marginTop:10,display: "flex", justifyContent: "center" }}
            >
              <PropagateLoader color="#64CCC5" />
            </Grid>
          ) : (
            Object.values(tuitions).map((tuition) => (
              <>
                <Grid item xs={12} lg={4} md={12}>
                  <TuitionCard tuition={tuition} />
                </Grid>
              </>
            ))
          )}
      </Grid>
    </>
  );
};

export default MatchedTuition;
