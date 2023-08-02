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

const DonutMode = () => {
  const { allposts } = useContext(DataContext);

  const modeplace = ["athome", "atcoaching", "online"];

  const modeValueArray = modeplace.map((e) => {
    let count = 0;
    Object.values(allposts).map((post) => {
      if (post.prefmode === e) {
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
            labels:modeplace,
            datasets:[{
                label:'Preferred Mode',
                data:modeValueArray,
                backgroundColor:['rgb(11, 102, 106)','rgb(53, 162, 159)','#97FEED']
            }]
        }}
        options={{
        maintainAspectRatio:true
        }}
      ></Doughnut>
    </>
  );
};

export default DonutMode;
