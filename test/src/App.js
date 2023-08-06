import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TutorDash from "./pages/TutorDash";
import Tutor from "./pages/tutor";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import StudentDash from "./pages/StudentDash";
import HomeTutorDash from "./components/tutorDashboard/HomeTutorDash";
import LeaderBoard from "./components/tutorDashboard/leaderboard";
import MatchedTuition from "./components/tutorDashboard/matchedTuition";
import Account from "./components/tutorDashboard/account";
import HomeStudentDash from "./components/StudentDash/HomeStudentDash";
import Stats from "./components/StudentDash/Stats";
import MatchedTutors from "./components/StudentDash/MatchedTutors";
import AccountDash from "./components/StudentDash/AccountDash";
import Event from "./components/StudentDash/Event";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AdminDash from "./components/Admin/AdminDash/AdminDash";
import Overview from "./components/Admin/AdminDash/overview";
import Students from "./components/Admin/AdminDash/students";
import Tutors from "./components/Admin/AdminDash/tutors";
import Posts from "./components/Admin/AdminDash/posts";
import Stuff from "./components/Admin/AdminDash/stuff";
import Office from "./components/Admin/AdminDash/office";
import DataTable from "./components/Admin/AdminDash/component/TableStudents";
import AddNewStudent from "./components/Admin/AdminDash/component/AddNewStudent";
import DataTutorTable from "./components/Admin/AdminDash/component/TutorsTable/DataTutorTable";
import AddNewTutor from "./components/Admin/AdminDash/component/TutorsTable/AddNewTutor";
import DataPostsTable from "./components/Admin/AdminDash/component/PostTable/DataPostsTable";
import AddnewPost from "./components/Admin/AdminDash/component/PostTable/AddnewPost";
import FilterTable from "./components/Admin/AdminDash/component/PostTable/FilterTable";
import PostDetailsFromStudent from "./components/Admin/AdminDash/component/StudentsTable/PostDetailsFromStudent";

// axios.defaults.baseURL = "http://localhost:5383";
axios.defaults.baseURL = "https:/tutorverse-backend.onrender.com";
// https://tutorverse-backend.onrender.com/getallposts
axios.defaults.withCredentials = true;

function App() {
  // const isloggedIn=window.localStorage.getItem("loggedIn");
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3500 }} />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tutor-register" element={<Tutor />} />
        <Route path="/tutordash" element={<TutorDash />}>
          <Route path="" element={<HomeTutorDash />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="matchedtuitions" element={<MatchedTuition />} />
          <Route path="account" element={<Account />} />
        </Route>

        <Route path="/studentdash" element={<StudentDash />}>
          <Route exact path="" element={<HomeStudentDash />} />
          <Route path="stats" element={<Stats />} />
          <Route path="matchedtutors" element={<MatchedTutors />} />
          <Route path="studentaccount" element={<AccountDash />} />
          <Route path="events" element={<Event />} />
        </Route>

        <Route path="adminlogin" element={<AdminLogin />} />

        <Route path="admindash" element={<AdminDash />}>
          <Route exact path="" element={<Overview />} />
          <Route path="students" element={<Students />}>
            <Route exact path="" element={<DataTable />} />
            <Route path="createnew" element={<AddNewStudent />}/>
            <Route path="viewpostsdetails" element={<PostDetailsFromStudent/>} />
          
          </Route>
          <Route path="tutors" element={<Tutors />}>
            <Route exact path="" element={<DataTutorTable />} />
            <Route path="createnewtutor" element={<AddNewTutor />} />
          </Route>
          <Route path="posts" element={<Posts />}>
            <Route exact path="" element={<DataPostsTable />} />
            <Route path="createnewpost" element={<AddnewPost />} />
            <Route path="filterpost" element={<FilterTable/>} />
          </Route>
          <Route path="stuff" element={<Stuff />} />
          <Route path="office" element={<Office />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
