import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {DotLoader} from 'react-spinners';
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SubjectIcon from "@mui/icons-material/Subject";
import ManRoundedIcon from "@mui/icons-material/ManRounded";
import WomanRoundedIcon from "@mui/icons-material/WomanRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import InterpreterModeRoundedIcon from "@mui/icons-material/InterpreterModeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TutorCard from "./tutorCard";
import axios from "axios";
import { Stack } from "@mui/system";
import { toast } from "react-hot-toast";
let axioslocality;
let FinalSubjects;

const MatchedTutors = (props) => {
  console.log(props);
  axioslocality = props.data.locality;
  console.log(axioslocality);

  let subjects = [];
  Object.values(props.posts).map((post) => subjects.push(post.subject));
  const removedDuplicates = (arr) => {
    return [...new Set(arr)];
  };
  FinalSubjects = removedDuplicates(subjects);
  const [tutors, setTutors] = useState({});
  const [isloading,setLoading]=useState(true);
  const [issearchloading,setSearchloading]=useState(false);
  const findMatchedTutors = async () => {
    try {
      console.log("Inside Try Block", axioslocality, FinalSubjects);
      const response = await axios.post("/matchedtutors", {
        locality: axioslocality,
        subjects: FinalSubjects,
      });

      console.log(response);
      if (response.data.status === "ok") {
        setTutors(response.data.data);
        setLoading(false);
      } else {
        console.log("no Data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTutors(() => findMatchedTutors());
  }, []);
  const SubjectsForSearch = [
    "English",
    "Maths",
    "Science",
    "ComputerScience",
    "Physics",
    "Chemistry",
  ];
  const CityForSearch = [
    "Guwahati",
    "Kaziranga",
    "Bokakhat",
    "Kaliabor",
    "Tezpur",
  ];
  const [manualTutorSearch, setManualTutorSearch] = useState({
    city: "",
    subjects: "",
  });
  const [manualSearchedTutor,setManualSearchedTutor]=useState({});
  const handleTutorManualSearch = async () => {
    setSearchloading(true);
    const { city, subjects } = manualTutorSearch;
    if (city === "" || subjects === "") {
      return toast.error("Please filled up the required filled");
    }

    try {
      const response = await axios.post("/searchedtutorsmanually", {
        city,
        subjects,
      });
      console.log(response);
      let arraylength=(response.data.data).length;
      if(arraylength===0){
        setSearchloading(false);
        return toast.error('No data Found');
        
      }
      if (response.data.status === "ok") {
        setManualSearchedTutor(response.data.data);
        
        toast.success(`Got ${arraylength
      } numbers of tutors`);
      setSearchloading(false);
      }
     
    } catch (error) {
      console.log('Something Error',error);
    }
  };

  return (
    <>
      <CssBaseline>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box
              style={{
                margin: 10,
                background: "#64CCC5",
                width: "100%",
                height: "auto",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <ListItem disablePadding xs={12}>
                  <ListItemIcon>
                    <LocationOnRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>City : {props.data.locality}</ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <SubjectIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Subjects :{" "}
                    {FinalSubjects.map((e) => (
                      <Chip
                        style={{ margin: 2, background: "#ffffff" }}
                        label={e}
                      />
                    ))}
                  </ListItemText>
                </ListItem>
              </div>
            </Box>
          </Grid>

          <Grid
            container
            xs={12}
            alignItems="center"
            justify="center"
            spacing={5}
            style={{marginLeft:0}}
          >
            {isloading?(<><Grid item xs={12} sm={12} md={12} lg={12} style={{display:'flex',
          justifyContent:'center'}} >
              <DotLoader color="#64CCC5"/>
            </Grid>
            </>):(Object.values(tutors).map((tutor) => (
              <>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <TutorCard tutor={tutor} />
                </Grid>
              </>
            )))}


          </Grid>
          <Grid item xs={12} md={12} style={{ marginTop: 40 }}>
            <Stack direction="row" spacing={3}>
              <SearchRoundedIcon />
              <Typography variant="h6">
                Search manually based on Lcality and specific subjects
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box
              style={{
                margin: 10,
                // background: "#",
                width: "100%",
                height: "auto",
                padding: 10,
                borderRadius: 20,
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small-label">
                  Select City
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  style={{ background: "#ffffff" }}
                  value={manualTutorSearch.city}
                  onChange={(e) =>
                    setManualTutorSearch({
                      ...manualTutorSearch,
                      city: e.target.value,
                    })
                  }
                >
                  {CityForSearch.map((e) => (
                    <MenuItem value={e}>{e}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  style={{ color: "#176B87" }}
                >
                  Select Subjects
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  style={{ background: "#ffffff" }}
                  value={manualTutorSearch.subjects}
                  onChange={(e) =>
                    setManualTutorSearch({
                      ...manualTutorSearch,
                      subjects: e.target.value,
                    })
                  }
                >
                  {SubjectsForSearch.map((e) => (
                    <MenuItem value={e.toLowerCase()}>{e}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                style={{ background: "#176B87", margin: 10 }}
                onClick={handleTutorManualSearch}
              >
                <SearchRoundedIcon />
                Search
              </Button>
            </Box>
          </Grid>

          <Grid
            container
            xs={12}
            alignItems="center"
            justify="center"
            spacing={5}
            
          >
            {Object.values(manualSearchedTutor).map((tutor) => (
              <>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <TutorCard tutor={tutor} />
                </Grid>
              </>
            ))}
            ;
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default MatchedTutors;
