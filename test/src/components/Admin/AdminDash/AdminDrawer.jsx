import * as React from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { Breadcrumbs, Button, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import JoinInnerRoundedIcon from "@mui/icons-material/JoinInnerRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import ProfileMenu from "./component/profileMenu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import DataTable from "./component/TableStudents";
import AddNewStudent from "./component/AddNewStudent";
// import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import BusinessIcon from "@mui/icons-material/Business";
import Overview from "./overview";
import Students from "./students";
import Tutors from "./tutors";
import Posts from "./posts";
import Stuff from "./stuff";
import Office from "./office";
import DataTutorTable from "./component/TutorsTable/DataTutorTable";
import AddNewTutor from "./component/TutorsTable/AddNewTutor";
import DataPostsTable from "./component/PostTable/DataPostsTable";
import AddnewPost from "./component/PostTable/AddnewPost";
import FilterTable from "./component/PostTable/FilterTable";
import PostDetailsFromStudent from "./component/StudentsTable/PostDetailsFromStudent";
const drawerWidth = 240;

function ResponsiveDrawerStudent(props) {
  const { window } = props;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Navigate = useNavigate();
  console.log(location.pathname);
  let pathnameArray = location.pathname.split("/").slice(1);
  let paths = pathnameArray.map((curr, i, array) => {
    return array[i - 1] ? `/${array[i - 1]}/${array[i]}` : `/${array[i]}`;
  });

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6">TutorVerse</Typography>
      </Toolbar>

      <List>
        <ListItem disablePadding onClick={() => Navigate("")}>
          <ListItemButton
            selected={location.pathname === "/admindash" ? true : false}
          >
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText>Overview</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => Navigate("students")}>
          <ListItemButton
            selected={pathnameArray[1] === "students" ? true : false}
          >
            <ListItemIcon>
              <LeaderboardRoundedIcon />
            </ListItemIcon>
            <ListItemText>Students</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => Navigate("tutors")}>
          <ListItemButton
            selected={pathnameArray[1] === "tutors" ? true : false}
          >
            <ListItemIcon>
              <JoinInnerRoundedIcon />
            </ListItemIcon>
            <ListItemText> Tutors</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => Navigate("posts")}>
          <ListItemButton
            selected={pathnameArray[1] === "posts" ? true : false}
          >
            <ListItemIcon>
              <PersonRoundedIcon />
            </ListItemIcon>
            <ListItemText>Posts</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => Navigate("stuff")}>
          <ListItemButton
            selected={pathnameArray[1] === "stuff" ? true : false}
          >
            <ListItemIcon>
              <EventAvailableRoundedIcon />
            </ListItemIcon>
            <ListItemText>Stuff</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => Navigate("office")}>
          <ListItemButton
            selected={pathnameArray[1] === "office" ? true : false}
          >
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText>Office</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  console.log(pathnameArray[1]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ background: "#001C30" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          style={{
            background: "rgba(255,255,255,.9)",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ position: "absolute", left: 10 }}>
            <Typography variant="h6" style={{ color: "#071952" }}>
              {pathnameArray[1]
                ? pathnameArray[1].toString().charAt(0).toUpperCase() +
                  pathnameArray[1].toString().slice(1)
                : "Overview"}
            </Typography>
            <Breadcrumbs separator="○" aria-label="breadcrumb">
              {pathnameArray.map((curr, i) => {
                return (
                  <Link
                    style={{ color: "rgb(7, 24, 80,.5)" }}
                    component="button"
                    to={paths[i]}
                  >
                    {" "}
                    {curr}
                  </Link>
                );
              })}
            </Breadcrumbs>
          </div>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <NavigateBeforeRoundedIcon
              style={{
                color: "#071952",
              }}
            />
          </IconButton>
          <ProfileMenu />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route exact path="/" element={<Overview />} />
          <Route path="/students" element={<Students />}>
            <Route exact path="" element={<DataTable />} />
            <Route path="createnew" element={<AddNewStudent />} />
            <Route path="viewpostsdetails" element={<PostDetailsFromStudent/>} />
          </Route>
          <Route path="/tutors" element={<Tutors />}>
            <Route exact path="" element={<DataTutorTable />} />
            <Route path="createnewtutor" element={<AddNewTutor />} />
          </Route>
          <Route path="/posts" element={<Posts />}>
            <Route exact path="" element={<DataPostsTable />} />
            <Route path="createnewpost" element={<AddnewPost />} />
            <Route path="filterpost" element={<FilterTable />} />
          </Route>
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/office" element={<Office />} />
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawerStudent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawerStudent;
