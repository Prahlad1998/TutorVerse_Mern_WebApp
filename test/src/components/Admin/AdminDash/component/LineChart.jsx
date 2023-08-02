import React, { useState, useContext } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DataContext } from "../../../../context/dataContext";
import { display } from "@mui/system";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const { allposts } = useContext(DataContext);
  const [lineChartYear, setLineChartYear] = useState("2023");
  
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const standard = [
    "class8",
    "class9",
    "class10",
    "class11",
    "class12",
    "bca",
    "BSc",
  ];
  const findMonthFromDate = (str) => {
    const modifiedDate = Date.parse(str);
    const date_time = new Date(modifiedDate);
    const Month = date_time.toLocaleString("default", { month: "long" });
    // const createdMonth=date_time.getMonth()+1;
    // const createdDate=date_time.getDate();
    // const createdYear=date_time.getFullYear();
    return Month;
  };
  const [lineChartMonth, setLineChartMonth] = useState(findMonthFromDate(new Date()));
  const findYearFromDate = (str) => {
    const modifiedDate = Date.parse(str);
    const date_time = new Date(modifiedDate);
    // const Month=date_time.toLocaleString('default', { month: 'long' })
    // const createdMonth=date_time.getMonth()+1;
    // const createdDate=date_time.getDate();
    const createdYear = date_time.getFullYear();
    return createdYear;
  };
  const newLineChartValue = standard.map((e) => {
    let count = 0;
    Object.values(allposts).map((post) => {
      let MonthsPost = findMonthFromDate(post.createdAt);
      let YearPosts = findYearFromDate(post.createdAt).toString();
      if (
        post.standard === e &&
        MonthsPost === lineChartMonth &&
        YearPosts === lineChartYear
      ) {
        count++;
      }
      return count;
    });
    return count;
  });

  return (
    <>
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            style={{ color: "#0B666A" }}
            id="demo-simple-select-standard-label"
          >
            Year
          </InputLabel>
          <Select
            // labelId="demo-simple-select-standard-label"
            // id="demo-simple-select-standard"
            label="City"
            onChange={(e) => setLineChartYear(e.target.value)}
            value={lineChartYear}
            style={{ color: "#0B666A" }}
          >
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            style={{ color: "#0B666A" }}
            id="demo-simple-select-standard-label"
          >
            Month
          </InputLabel>
          <Select
            // labelId="demo-simple-select-standard-label"
            // id="demo-simple-select-standard"
            label=""
            onChange={(e) => setLineChartMonth(e.target.value)}
            value={lineChartMonth}
            style={{ color: "#0B666A" }}
          >
            {Months.map((e) => (
              <MenuItem value={e}>{e}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Line
        width="100%"
        height={50}
        data={{
          labels: standard,
          datasets: [
            {
            label:'No of Tuitions',
              data: newLineChartValue,
              backgroundColor: "#0B666A",
              pointStyle:'circle',
              pointBackgroundColor:'#35A29F',
              borderColor: "#0B666A",
              pointBorderWidth:13,
              tension:0.5
            },
          ],
        }}
        options={{
          plugins: {
            legend: false,
          },
          scales: {
            x:{
              grid: {
                display: false,
              },
            },
            y:{
                min:0,
                max:10,
                ticks:{
                    stepSize:2,
                    callback:(value)=>value
                },
                grid:{
                    borderDash:[10]
                }
            }
          },
        }}
      ></Line>
    </>
  );
};

export default LineChart;
