import React, { useContext, useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Stack,
  Button,
  Typography,
  Box,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import StudentTable from "./component/OfficeTable/studentTable";
import TutorTable from "./component/OfficeTable/tutorTable";
import { DataContext } from "../../../context/dataContext";
import { toast } from "react-hot-toast";
import CityMod from "./component/OfficeTable/CityMod";
import SubMod from "./component/OfficeTable/SubMod";
import StandMod from "./component/OfficeTable/StandMod";

const Office = () => {
  const { alltutors, allstudents } = useContext(DataContext);
  const [step, setStep] = useState('city');
  const [isReady, setIsReady] = useState(false);
  const [resultOn, setResultOn] = useState(false);
  const [data, setData] = useState({
    role: "",
    email: "",
  });
  const handleSearchBasedonRole = () => {
    let serchableUser = {};
    let matchUser = [];
    if (data.role === "tutor") {
      serchableUser = alltutors;
    } else {
      serchableUser = allstudents;
    }
    matchUser = serchableUser.find(({ email }) => email === data.email);
    const status = matchUser ? true : false;
    console.log(status);

    if (status) {
      setIsReady(true);
    } else {
      toast.error("No result found,The email is not exist");
      setIsReady(false);
      setResultOn(true);
    }
  };
  const showSteps = () => {
    switch (step) {
      case 'city':
        return <CityMod />;
      case 'subject':
        return <SubMod />;
      case 'standard':
        return <StandMod />;
      default:
        break;
    }
  };
  const handleChangeStepCity = () => {
    setStep('city');
  }
  const handleChangeStepSubject = () => {
    setStep('subject');
  }
  const handleChangeStepStandard = () => {
    setStep('standard');
  }
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            background: "rgb(53, 162, 159,.1)",
            padding: 30,
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Search Tutor and Student through Email Id
          </Typography>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Search by EmailId
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => {
                setIsReady(false);
                setIsReady(false);
                setData({ ...data, role: e.target.value });
              }}
              value={data.role}
            >
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="tutor"
                control={<Radio />}
                label="Tutor"
              />
            </RadioGroup>
          </FormControl>
          <Stack direction="row">
            <TextField
              style={{
                margin: "10px",
                width: "100%",
              }}
              size="small"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={data.email}
              onChange={(e) => {
                setIsReady(false);
                setData({ ...data, email: e.target.value });
                setResultOn(false);
              }}
            />
            <Button variant="" size="small" onClick={handleSearchBasedonRole}>
              <SearchRoundedIcon
                fontSize="large"
                style={{ color: "rgb(11, 102, 106)" }}
              />
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {isReady ? (
        <>
          <Grid container>
            <Grid item>
              {data.role === "tutor" ? (
                <>
                  <TutorTable email={data.email} />
                </>
              ) : (
                <>
                  <StudentTable email={data.email} />
                </>
              )}
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {resultOn ? (
            <>
              {" "}
              <Typography variant="p" style={{ color: "rgb(239, 98, 98)" }}>
                *No Result Found
              </Typography>
            </>
          ) : (
            <></>
          )}
        </>
      )}
      <Grid
        container
        style={{
          background: "rgba(0,0,0,.02,)",
          padding: 20,
          borderRadius: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            marginTop: 20,
            background: "rgb(53, 162, 159,.1)",
            padding: 30,
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modify Cities,Subjects,Standrads
          </Typography>
        </Grid>
        <Grid item lg={4} xs={12} md={2}>
          {/* <ActionOfficeDrawer/> */}
          <Box>
            <Stack direction="row" spacing={2} sx={{
              "& button": {
                borderBottom: '1px solid rgb(255, 255, 255)',
                color: 'rgb(11, 102, 106)'
              },
              "& button:hover": {
                background: 'rgb(11, 102, 106,.1)',
                borderBottom: '1px solid rgb(11, 102, 106)'
              },
              "& button:focus": {
                color: 'rgba(255,255,255)',
                background: 'rgb(11, 102, 106)'
              },
              "& button:active": {
                color: 'rgba(255,255,255)',
                background: 'rgb(11, 102, 106)'
              },

            }}>
              {(step === 'city' ? <><Button size="large"
                onClick={handleChangeStepCity} style={{
                  color: 'rgba(255,255,255)',
                  background: 'rgb(11, 102, 106)'
                }}
              >City</Button></> : <><Button size="large"
                onClick={handleChangeStepCity}
              >City</Button></>)}

              {(step === 'subject' ? <><Button onClick={handleChangeStepSubject} size="large"

                style={{
                  color: 'rgba(255,255,255)',
                  background: 'rgb(11, 102, 106)'
                }}>Subjects</Button></> : <><Button onClick={handleChangeStepSubject} size="large" >Subjects</Button></>)}
              {(step === 'standard' ? <><Button onClick={handleChangeStepStandard} size="large" style={{
                color: 'rgba(255,255,255)',
                background: 'rgb(11, 102, 106)'
              }}>Standard</Button></> : <><Button onClick={handleChangeStepStandard} size="large" >Standard</Button></>)}

            </Stack>
          </Box>
        </Grid>

        {showSteps(step)}
      </Grid>
    </>
  );
};

export default Office;
