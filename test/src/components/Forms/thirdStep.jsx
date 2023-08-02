// import { multiStepContext } from '../../StepContext';
import React from 'react'; 
import { TextField,FormControl,Select,InputLabel,MenuItem } from '@mui/material';

const ThirdStep = ({data,setData}) => {
  const City = [
    "Guwahati",
    "Kaziranga",
    "Bokakhat",
    "Kaliabor",
    "Tezpur",
  ];
  return (
    <>
<FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small-label">
                  Select City
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  style={{ background: "#ffffff" }}
                  value={data.city}
                  onChange={(e) =>
                    setData({
                      ...data,
                      city: e.target.value,
                    })
                  }
                >
                  {City.map((e) => (
                    <MenuItem value={e}>{e}</MenuItem>
                  ))}
                </Select>
              </FormControl>


        <TextField id="standard-basic" label="Locality" type="text" variant="standard" style={{
          width:'25%',
          margin:10,
        }}
        onChange={(e) => {
          setData({ ...data, locality: e.target.value });
        }}
        value={data.locality} />
        <TextField id="standard-basic" label="Pin" type="number" variant="standard" style={{
          width:'25%',
          margin:10,
        }} 
        
        onChange={(e) => {
          setData({ ...data, pin: e.target.value });
        }}
        value={data.pin}/>
        <TextField id="standard-basic" label="Address" type="text" variant="standard" style={{
          width:'25%',
          margin:10,
        }} 
        onChange={(e) => {
          setData({ ...data, address: e.target.value });
        }}
        value={data.address}/>
      
        {/* <Button variant="contained" style={{ width:'10%',
          margin:10,

        }} >Next</Button></> */}
        </>
  )
}

export default ThirdStep;