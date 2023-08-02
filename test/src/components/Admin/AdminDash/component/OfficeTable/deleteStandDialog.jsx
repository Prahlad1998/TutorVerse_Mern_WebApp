import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { DataContext } from "../../../../../context/dataContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteStandDialog({name}) {
  const {allStand}=React.useContext(DataContext);
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteStand= async()=>{
    
    const standfordelete=Object.values(allStand).find((e)=>{
      return e.name===name;
    })
    const idStand=standfordelete._id;
    const response = await axios.delete(`/stand/${idStand}`);
    console.log(response);
    if (!response.data.status === "ok") {
      toast.error(response.data.message);
    } else {
      handleClose();
      toast.success(response.data.message);
    
    }
    setTimeout(()=>navigate(0),2000);
  }

  return (
    <div>
      <Button>
        <DeleteRoundedIcon
          onClick={handleClickOpen}
          fontSize="small"
          style={{ color: "rgb(239, 98, 98)" }}
        />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure delete this Subject?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteStand} style={{
            color:'rgb(239, 98, 98)'
          }}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
