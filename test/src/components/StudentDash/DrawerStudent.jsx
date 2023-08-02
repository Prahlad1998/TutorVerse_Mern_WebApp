import * as React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import JoinInnerRoundedIcon from "@mui/icons-material/JoinInnerRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { toast } from "react-hot-toast";
import HomeStudentDash from "./HomeStudentDash";
import Stats from "./Stats";
import MatchedTutors from "./MatchedTutors";
import AccountDash from "./AccountDash";
import Event from "./Event";

const drawerWidth = 240;

function ResponsiveDrawerStudent(props) {
  console.log(props);
  const { window } = props;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Navigate = useNavigate();
  console.log(location.pathname);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => Navigate("")}>
          <ListItemButton
            selected={location.pathname === "/studentdash" ? true : false}
          >
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => Navigate("stats")}>
          <ListItemButton
            selected={location.pathname === "/studentdash/stats" ? true : false}
          >
            <ListItemIcon>
              <LeaderboardRoundedIcon />
            </ListItemIcon>
            <ListItemText>Stats</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => Navigate("matchedtutors")}>
          <ListItemButton
            selected={
              location.pathname === "/studentdash/matchedtutors" ? true : false
            }
          >
            <ListItemIcon>
              <JoinInnerRoundedIcon />
            </ListItemIcon>
            <ListItemText>Matched Tutors</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => Navigate("studentaccount")}>
          <ListItemButton
            selected={
              location.pathname === "/studentdash/studentaccount" ? true : false
            }
          >
            <ListItemIcon>
              <PersonRoundedIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => Navigate("events")}>
          <ListItemButton
            selected={
              location.pathname === "/studentdash/events" ? true : false
            }
          >
            <ListItemIcon>
              <EventAvailableRoundedIcon />
            </ListItemIcon>
            <ListItemText>Event</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    // window.localStorage.clear();
    toast.error("Looged Out successfully", {
      style: {
        borderRadius: "10px",
        background: "#001C30",
        color: "#DAFFFB",
      },
    });
    navigate("/login");
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            background: "#176B87",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Student Dashboard
          </Typography>
          <Button
            varient="outlined"
            style={{ color: "#DAFFFB" }}
            onClick={logOut}
          >
            <LogoutIcon />
            LogOut
          </Button>
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
          <Route
            exact
            path="/"
            element={<HomeStudentDash data={props.data} posts={props.posts} />}
          />
          <Route
            path="stats"
            element={<Stats data={props.data} posts={props.posts} />}
          />
          <Route
            path="/matchedtutors"
            element={<MatchedTutors data={props.data} posts={props.posts} />}
          />
          <Route
            path="/studentaccount"
            element={<AccountDash data={props.data} />}
            posts={props.posts}
          />
          <Route
            path="/events"
            element={<Event data={props.data} posts={props.posts} />}
          />
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
