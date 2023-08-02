import React, { useContext } from "react";
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DataContext } from "../../../../context/dataContext";
ChartJS.register(DoughnutController, ArcElement, Tooltip, Legend);

const DonutTime = () => {
  const { allposts } = useContext(DataContext);

  const timing = ["atmorning", "atevening", "both"];

  const timingValueArray = timing.map((e) => {
    let count = 0;
    Object.values(allposts).map((post) => {
      if (post.preftime === e) {
        count++;
      }
      return count;
    });
    return count;
  });
  return (
    <>
      <Doughnut
        data={{
            labels:timing,
            datasets:[{
                label:'Preferred Timing',
                data:timingValueArray,
                backgroundColor:['rgb(11, 102, 106)','rgb(53, 162, 159)','#97FEED']
            }]
        }}
        options={{}}
      ></Doughnut>
    </>
  );
};

export default DonutTime;
