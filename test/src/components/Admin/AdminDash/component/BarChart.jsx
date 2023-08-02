import React,{useContext} from 'react';
import {Bar} from 'react-chartjs-2';
import {
Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend} from 'chart.js';
import { DataContext } from '../../../../context/dataContext';
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
)

const BarChart = () => {
    const Months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    const findMonthFromDate=(str)=>{
        const modifiedDate = Date.parse(str);
        const date_time=new Date(modifiedDate);
        // const createdMonth=date_time.getMonth()+1;
        const Month=date_time.toLocaleString('default', { month: 'long' })
        // const createdDate=date_time.getDate();
    
        // const createdYear=date_time.getFullYear();
    return Month;
    };
    let str='2023-07-16T04:27:31.756+00:00';
    console.log(findMonthFromDate(str));
    const {
        allposts,
        alltutors,
      } = useContext(DataContext);
      Object.values(alltutors).map((e)=>(console.log(findMonthFromDate(e.createdAt))))
    const noPostsActoMonths=Months.map((e)=>{
        let count=0;
        Object.values(allposts).map((post,i)=>{
            if(findMonthFromDate(post.createdAt)===e)count++;
            return count;
        }   
        )
        return count;
    });
    const noTutorsActoMonths=Months.map((e)=>{
        let count=0;
        Object.values(alltutors).map((tutor,i)=>{
            if(findMonthFromDate(tutor.createdAt)===e)count++;
            return count;
        }   
        )
        return count;
    })

      console.log(noPostsActoMonths);
      console.log(noTutorsActoMonths);

  return (
  <>
  <Bar
  data={{
    labels:Months,
    datasets:[{
        label:'No of Posts',
        data:noPostsActoMonths,
        backgroundColor:'#0B666A'
    },
{
    label:'No of Tutors',
    data:noTutorsActoMonths,
    backgroundColor:'#35A29F'
}],
  }}
  height={500}
  width='100%'
  options={{
    maintainAspectRatio:false,
    scales:{
        yAxes:[{
            tricks:{
                stepSize:2,
                beginAtZero:true
            }
        }]
    }
  }}

  />
  </>
  )
}

export default BarChart;