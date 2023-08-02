import React ,{ useState, useEffect }  from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResponsiveDrawerStudent from "../components/StudentDash/DrawerStudent";
// import { toast } from "react-hot-toast";

const StudentDash = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const [posts, setPosts] = useState([]);


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
  
  const fetchPosts = async() => {
    try {
      const response = await axios.post("/postdetails", {
        token: window.localStorage.getItem("token"),
      });
      console.log(response);
      if (response.data.status === "ok") {
       setPosts(response.data.posts);
      } else {
        console.log("No data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setPosts(()=>fetchPosts()) ;
  },[posts.createdat]);
  useEffect(() => {
    setBody(() => fetch());
  }, []);
  return (
    <>
    <ResponsiveDrawerStudent data={body} posts={posts}/>
    </>
  );
};

export default StudentDash;
