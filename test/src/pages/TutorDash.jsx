import axios from "axios";
import React from "react";
import { useState, useEffect,useRef  } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/dataContext";

import ResponsiveDrawer from "../components/tutorDashboard/drawer";




const TutorDash = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const tempFunc=useRef(); 

 
  const fetch = async () => {
    try {
      const responds = await axios.post("/userdetails", {
        token: window.localStorage.getItem("token"),
      });
      
      console.log(responds);
      if (responds.data.status === "fail") {
        navigate("/login");
      } else {
        setBody(responds.data.data);
      }
      // console.log(responds.data.data);
    } catch (error) {
      console.log("Error occured", error);
    }
  };
  tempFunc.current=fetch;
 
  useEffect(() => {
    tempFunc.current();
    // setBody(() => fetch());
  },[]);
  
  return (
    <>
    <DataContext.Provider value={{body,setBody}}>
       <ResponsiveDrawer data={body}/>
    </DataContext.Provider>
    </>
  );
};

export default TutorDash;
