import * as React from "react";
import {Routes,Route,useNavigate,useLocation} from 'react-router-dom';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import {Button} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import JoinInnerRoundedIcon from '@mui/icons-material/JoinInnerRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeTutorDash from "./HomeTutorDash";
import LeaderBoard from "./leaderboard";
import MatchedTuition from "./matchedTuition";
import Account from "./account";
import { toast } from "react-hot-toast";


const drawerWidth = 240;


function ResponsiveDrawer(props) {
  console.log(props);
  const { window } = props;
  const location=useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Navigate=useNavigate();

  const drawer = (
    <div >
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding onClick={()=>Navigate("/tutordash")}>
          <ListItemButton selected={location.pathname==='/tutordash'?true:false}>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={()=>Navigate("leaderboard")}>
          <ListItemButton selected={location.pathname==='/tutordash/leaderboard'?true:false}>
            <ListItemIcon>
              <LeaderboardRoundedIcon/>
            </ListItemIcon>
            <ListItemText>Leader Board</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={()=>Navigate("matchedtuitions")}>
          <ListItemButton selected={location.pathname==='/tutordash/matchedtuitions'?true:false}>
            <ListItemIcon>
              <JoinInnerRoundedIcon />
            </ListItemIcon>
            <ListItemText>Matched Tuitions</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={()=>Navigate("account")}>
          <ListItemButton selected={location.pathname==='/tutordash/account'?true:false}>
            <ListItemIcon>
              <PersonRoundedIcon  />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
const navigate=useNavigate();
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
        style={{background:'#001C30'}}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{background:'#176B87',display:'flex',justifyContent:'space-between'}}>
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
            Tutor Dashboard
          </Typography>
          <Button varient="outlined" style={{color:'#DAFFFB'}} onClick={logOut}><LogoutIcon/>LogOut</Button>
          
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
          <Route exact path="/" element={<HomeTutorDash/>}/>
          <Route path="leaderboard" element={<LeaderBoard data={props.data} />}/>
          <Route path="/matchedtuitions" element={<MatchedTuition data={props.data} />}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
