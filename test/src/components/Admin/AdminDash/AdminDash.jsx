import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import AdminDrawer from "./AdminDrawer";
import { DataContext } from "../../../context/dataContext";

const AdminDash = () => {
  const [username, setUsername] = useState("");
  const [isloading, setLoading] = useState(true);
  const [allstudents, setAllstudents] = useState([]);
  const [alltutors, setAlltutors] = useState([]);
  const [allposts, setAllposts] = useState([]);
  const [allCity,setAllCity]=useState([]);
  const [allSub,setAllSub]=useState([]);
  const [allStand,setAllStand]=useState([]);

  const navigate = useNavigate();
  const [highestqualification, setHighestqualification] = useState([
    "B.Sc",
    "B.A",
    "B.Com",
    "BCA",
    "B.Tech",
    "M.A",
    "M.Sc",
    "MCA",
    "M.Com",
    "M.Tech",
    "Phd",
    "others",
  ]);

  //Declare the Empty array
  let city=[];
  let subjects=[];
  let standard=[];

  const getAllstudents = async () => {
    try {
      const response = await axios.get("/getallusers");
      console.log(response);
      if (response.data.status === "ok") {
        setAllstudents(response.data.users);
        
      }
   
    } catch (error) {
      console.log(error);
    }
  };
  const getAlltutors = async () => {
    try {
      const response = await axios.get("/getalltutors");
      console.log(response);
      if (response.data.status === "ok") {
        setAlltutors(response.data.tutors);
   
      }
    
    } catch (error) {
      console.log(error);
    }
  };
  const getAllposts = async () => {
    try {
      const response = await axios.get("/getallposts");
      console.log(response);
      if (response.data.status === "ok") {
        setAllposts(response.data.posts);
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAdmin = async () => {
    try {
      const response = await axios.post("/admindetails", {
        token: window.localStorage.getItem("tokenAdmin"),
      });
      console.log(response);
      let responseUsername = response.data.admin.username;
      if (response.data.status === "fail") {
        toast.error("Please login! Only authorized access is possible");
        navigate("/adminlogin");
        setLoading(false);
      } else {
        setUsername(responseUsername);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error occured", error);
      navigate("/adminlogin");
      toast.error("Access deny,Please login");

      setLoading(false);
    }
  };
  const getAllcities = async () => {
    try {
      const response = await axios.get("/getallCities");
      console.log(response);
      if (response.data.status === "ok") {
        setAllCity(response.data.cities);
     
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllSubjects = async() => {
    try {
      const response = await axios.get("/getAllSubjects");
      console.log(response);
      if (response.data.status === "ok") {
        setAllSub(response.data.subjects);
       
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllStandards = async() => {
    try {
      const response = await axios.get("/getAllStandards");
      console.log(response);
      if (response.data.status === "ok") {
        setAllStand(response.data.standards);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setUsername(() => fetchAdmin());
  }, []);
  useEffect(() => {
    setAllstudents(() => getAllstudents());
  }, []);
  useEffect(() => {
    setAlltutors(() => getAlltutors());
  }, []);
  useEffect(() => {
    setAllposts(() => getAllposts());
  }, []);
  useEffect(() => {
    setAllCity(() => getAllcities());
  }, []);
  useEffect(()=>{
    setAllSub(()=> getAllSubjects());
  },[]);
  useEffect(()=>{
    setAllStand(()=> getAllStandards());
  },[]);

  //Filling The Array

  Object.values(allCity).map(e=>city.push(e.name));

  Object.values(allSub).map(e=>subjects.push(e.name));

  Object.values(allStand).map(e=>standard.push(e.name));
  return (
    <>
      <DataContext.Provider
        value={{
          username,
          setUsername,
          allstudents,
          setAllstudents,
          allposts,
          alltutors,
          setAllposts,
          setAlltutors,
          standard,
          allStand,
          subjects,
          allSub,
          city,
          allCity,
          highestqualification,
          setHighestqualification,
        }}
      >
        {isloading ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <PropagateLoader color={"#64CCC5"} />
            </div>
          </>
        ) : (
          <>
            {" "}
            <AdminDrawer />
          </>
        )}
      </DataContext.Provider>
    </>
  );
};

export default AdminDash;
