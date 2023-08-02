import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 48;

export default function ProfileMenu() {
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
        navigate("/adminlogin");
      };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
      style={{background:'#071952',"boxShadow":"rgb(7, 24, 80,.5) 0px 8px 24px"}}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Person2RoundedIcon style={{color:'#ffffff'}} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem  onClick={logOut}>
           LogOut
          </MenuItem>
        {/* {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))} */}
      </Menu>
    </div>
  );
}