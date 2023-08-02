import React, { useContext, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import {
Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend} from 'chart.js';
import {FormControl,Select,InputLabel,MenuItem} from '@mui/material';
import { DataContext } from '../../../../context/dataContext';
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
)

const BarChartSub = () => {
    const {allposts,subjects,standards}=useContext(DataContext);
    console.log(subjects[0]);
    const [barChartSub,setBarChartSub]=useState(subjects[0]);
    const newArrayForBarChartSub=standards.map((e)=>{
        let count=0;
        Object.values(allposts).map((post)=>{
            if((post.subject===barChartSub)&&(post.standard===e)){
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
            Subjects
          </InputLabel>
          <Select
            // labelId="demo-simple-select-standard-label"
            // id="demo-simple-select-standard"
            label="City"
            onChange={(e) => setBarChartSub(e.target.value)}
            value={barChartSub}
            style={{ color: "#0B666A" }}
          >
            {subjects.map((e) => (
              <MenuItem value={e}>{e}</MenuItem>
            ))}
          </Select>
        </FormControl>
    </div>
    <Bar
    
    data={{
        labels:standards,
        datasets:[{
            label:'No of Posts in Each Classes Based on',
            data:newArrayForBarChartSub,
            backgroundColor:'#0B666A'
        }]
    }} 
    height={40}
    width='100%'
    options={{
        maintainAspectRatio:true,
        scales:{
            y:{
                beginAtZero:true,
                min:0,
                max:10,
                ticks:{
                    stepSize:2,
                }
            }
        }
      }}
    >

    </Bar>
    </>
  )
}

export default BarChartSub;