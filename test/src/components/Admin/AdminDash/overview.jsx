import React, { useContext, useState } from "react";
import { DataContext } from "../../../context/dataContext";
import {
  Box,
  Divider,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import BarChart from "./component/BarChart";
import DonutTime from "./component/DonutTime";
import DonutMode from "./component/DonutMode";
import LineChart from "./component/LineChart";
import BarChartSub from "./component/BarChartSub";

const Overview = () => {
  const [cityFromUser, setCityFromuser] = useState("");
  const [chartYear, setChartYear] = useState("2023");
  const { allstudents, allposts, alltutors } = useContext(DataContext);
  const overviewData = [
    {
      name: "Students",
      total: allstudents.length,
    },
    {
      name: "Tutors",
      total: alltutors.length,
    },
    {
      name: "Posts",
      total: allposts.length,
    },
  ];
  const entity = [allstudents, allposts, alltutors];
  const entityIndexName = ["Students", "Posts", "Tutors"];
  const findNumsActoCity = (object, city) => {
    let count = 0;
    let citytosearch = city;
    if (citytosearch === "") return false;
    Object.values(object).map((e) =>
      e.city === citytosearch ? count++ : count
    );
    return count;
  };
  const CityForSearch = [
    "Guwahati",
    "Kaziranga",
    "Bokakhat",
    "Kaliabor",
    "Tezpur",
  ];

  return (
    <>
      <Grid container spacing={2}>
        {overviewData.map((data) => (
          <Grid item xs={12} md={4} lg={4}>
            <Box
              style={{
                width: "100%",
                height: "auto",
                padding: 25,
                borderRadius: 10,
                boxShadow: "rgba(53, 162, 159,.2) 0px 8px 24px",
                background:
                  "linear-gradient(to left,rgba(53, 162, 159,.4),#ffffff)",
                // background:'rgba(255,255,255,.3)'
              }}
            >
              <Typography variant="p" gutterBottom>
                Total no of :
              </Typography>
              <Divider style={{ width: "30%" }} />
              <Typography variant="h5" color={"#0B666A"}>
                {data.name}
              </Typography>
              <Typography
                variant="h2"
                color={"#0B666A"}
                style={{ fontWeight: 400 }}
              >
                <LeaderboardRoundedIcon />
                {data.total}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        marginTop={5}
        style={{
          borderRadius: 10,
          background: "#0B666A",
          color: "#97FEED",
          padding: 10,
          minHeight: 200,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          style={{
            borderRadius: 5,
            background: "rgb(53, 162, 159,.3)",
            margin: 0,
            padding: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              style={{ color: "#97FEED" }}
              id="demo-simple-select-standard-label"
            >
              City
            </InputLabel>
            <Select
              // labelId="demo-simple-select-standard-label"
              // id="demo-simple-select-standard"
              label="City"
              onChange={(e) => setCityFromuser(e.target.value)}
              value={cityFromUser}
              style={{ color: "#ffffff" }}
            >
              {CityForSearch.map((e) => (
                <MenuItem value={e}>{e}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="p">
            Select the name of City and get the result
          </Typography>
        </Grid>
        {entity.map((e, i) => {
          const numbers = findNumsActoCity(e, cityFromUser);
          return (
            <Grid item xs={12} md={6} lg={3}>
              <Box
                style={{
                  width: "100%",
                  height: 150,
                  background: "rgba(255,255,255,.2)",
                  margin: 0,
                  padding: 20,
                  borderRadius: 5,
                }}
              >
                <Typography variant="h3"> {numbers}</Typography>

                <Typography variant="h5">{entityIndexName[i]}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        spacing={2}
        marginTop={5}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: 30,
          borderRadius: 10,
        }}
      >
        <Grid
          item
          lg={12}
          xs={12}
          md={12}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h6">
            Count of newly added Tutors and Posts monthwise
          </Typography>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel style={{ color: "black" }}>Year</InputLabel>
            <Select
              label="City"
              onChange={(e) => setChartYear(e.target.value)}
              value={chartYear}
              style={{ color: "black" }}
            >
              <MenuItem value="2023">2023</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <BarChart />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        marginTop={5}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: 30,
          borderRadius: 10,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{
            background: "rgb(53, 162, 159,.1)",
            padding: 30,
            borderRadius: 5,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Preferred Time
          </Typography>
          <DonutTime />
        </Grid>

        <Grid item xs={12} md={6} lg={6} style={{ padding: 30 }}>
          <Typography variant="h6" gutterBottom>
            Preferred Mode
          </Typography>
          <DonutMode />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        marginTop={5}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: 30,
          borderRadius: 10,
        }}
      ><Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            background: "rgb(53, 162, 159,.1)",
            padding: 30,
            borderRadius: 5,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Monthwise counts of newly added posts on each classes 
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <LineChart/>
        </Grid>

      </Grid>
      <Grid
        container
        spacing={2}
        marginTop={5}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: 30,
          borderRadius: 10,
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            background: "rgb(53, 162, 159,.1)",
            padding: 30,
            borderRadius: 5,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Subjects wise count of Posts based on standard
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <BarChartSub/>
        </Grid>

      </Grid>
    </>
  );
};

export default Overview;
