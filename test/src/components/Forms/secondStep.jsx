// import { multiStepContext } from '../../StepContext';
import React from "react";
import {
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";

const SecondStep = ({ data, setData }) => {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Highest Education
        </InputLabel>
        <Select
        required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e) => {
            setData({ ...data, highestqualification: e.target.value });
          }}
          value={data.highestqualification}
          style={{
            width: "25%",
            margin: 10,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Higher Secondary"}>Higher Secondary</MenuItem>
          <MenuItem value={"B.Sc"}>B.Sc</MenuItem>
          <MenuItem value={"B.A"}>B.A</MenuItem>
          <MenuItem value={"B.Com"}>B.Com</MenuItem>
          <MenuItem value={"BCA"}>BCA</MenuItem>
          <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
          <MenuItem value={"M.A"}>M.A</MenuItem>
          <MenuItem value={"M.Sc"}>M.Sc</MenuItem>
          <MenuItem value={"MCA"}>MCA</MenuItem>
          <MenuItem value={"M.Com"}>M.Com</MenuItem>
          <MenuItem value={"M.Tech"}>M.Tech</MenuItem>
          <MenuItem value={"Phd"}>Phd</MenuItem>
          <MenuItem value={"Others"}>Others</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Teachable Subjects
        </InputLabel>
        <Select
            required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e) => {
            setData({ ...data, subjects: e.target.value });
          }}
          value={data.subjects}
          style={{
            width: "25%",
            margin: 10,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"maths"}>Mathematics</MenuItem>
          <MenuItem value={"science"}>Science</MenuItem>
          <MenuItem value={"computerscience"}>Computer Science</MenuItem>
          <MenuItem value={"chemistry"}>Chemistry</MenuItem>
          <MenuItem value={"Physics"}>Physics</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Prefered Languages
        </InputLabel>
        <Select
            required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e) => {
            setData({ ...data, preflanguages: e.target.value });
          }}
          value={data.preflanguages}
          style={{
            width: "25%",
            margin: 10,
          }}
          placeholder="Choose one"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"assamese"}>Assamese</MenuItem>
          <MenuItem value={"english"}>English</MenuItem>
          <MenuItem value={"hindi"}>Hindi</MenuItem>
          <MenuItem value={"all"}>All</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Prefered Modes
        </InputLabel>
        <Select
            required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e) => {
            setData({ ...data,  prefmode: e.target.value });
          }}
          value={data.prefmode}
          style={{
            width: "25%",
            margin: 10,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"athome"}>At Home</MenuItem>
          <MenuItem value={"online"}>Online</MenuItem>
          <MenuItem value={"both"}>Both</MenuItem>
          
        </Select>
      </FormControl>
    </>
  );
};

export default SecondStep;
